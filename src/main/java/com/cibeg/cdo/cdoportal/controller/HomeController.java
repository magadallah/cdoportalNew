package com.cibeg.cdo.cdoportal.controller;


import java.io.OutputStream;
import java.security.Principal;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;


@Controller
@SessionAttributes("LoginSession")
public class HomeController {
	
	
	static Logger log = Logger.getLogger(HomeController.class);
	
	
	@RequestMapping(value = "/Accamend")
	public String Accamend(HttpServletRequest request) {
		try
		{
			Principal principal = request.getUserPrincipal();
			principal.getName();

			return "accamend";
		}
		catch (Exception e)
		 {
			
			 log.log(Level.ERROR , " (Home) ::" + e.getMessage());
			
			 return "login";
			 
		 }
		
		
	    
	}
	
	
	 @RequestMapping(value = "/ExportCSV", method = RequestMethod.POST)
	 public void CDO_Report(@RequestParam("datepicker_from") String datepicker_from
			 ,@RequestParam("datepicker_to") String datepicker_to			
			 ,HttpServletRequest request, HttpServletResponse response) {

		 try {
			 Principal principal = request.getUserPrincipal();
			 principal.getName();
			 // String Phone_code;
			 String Session = (String) request.getSession().getAttribute("SessionID");
			 String login_id = (String) request.getSession().getAttribute("username");


			 DBConnection conn = new DBConnection();
			 String query = null;
			 if (!Session.isEmpty() && !login_id.isEmpty()) {


				 try {

					 conn.OpenDBConnection();
					 ResultSet exprs = null;
					 String exp_data;
					 exp_data = "CUSTOMER_KEY";
					 exp_data += ",";
					 exp_data += "CUSTOMER_TYPE";
					 exp_data += ",";
					 exp_data += "ACCOUNT_KEY";
					 exp_data += ",";
					 exp_data += "PHONE_NO";
					 exp_data += ",";
					 exp_data += "PHONE_TYPE ";
					 exp_data += ",";
					 exp_data += "POLICY_PRODUCT_NO ";
					 exp_data += ",";
					 exp_data += "LAST_UPDATED_DATE";
					 exp_data += "\n";

//				SimpleDateFormat sdf = new SimpleDateFormat("dd/mm/YYYY");
//				Calendar c = Calendar.getInstance();
//				c.setTime(sdf.parse(datepicker_to));
//				c.add(Calendar.DATE, 1);  // number of days to add
//				datepicker_to = sdf.format(c.getTime());  // dt is now the new date


					 query = "Last_Updated_date >= TO_DATE('" + datepicker_from + "'" + " ,'dd/MM/YYYY' )" + " and " + "Last_updated_date <= TO_DATE('" + datepicker_to + "'" + " ,'dd/MM/YYYY' )";


					 exprs = conn.SelectStatementwhere("CUSTOMER_SAMP", query);


					 while (exprs.next()) {

						 exp_data += exprs.getString("CUSTOMER_KEY");
						 exp_data += ",";
						 exp_data += exprs.getString("CUSTOMER_TYPE");
						 exp_data += ",";
						 exp_data += exprs.getString("ACCOUNT_KEY");
						 exp_data += ",";
						 exp_data += exprs.getString("PHONE_NO");
						 exp_data += ",";
						 exp_data += exprs.getString("PHONE_TYPE");
						 exp_data += ",";
						 exp_data += exprs.getString("POLICY_PRODUCT_NO");
						 exp_data += ",";
						 exp_data += exprs.getString("LAST_UPDATED_DATE");
						 exp_data += "\n";
					 }


					 response.setContentType("text/csv");
					 response.setHeader("Content-Disposition", "attachment; filename=\"CDOServicesReport.csv\"");
					 try {
						 OutputStream outputStream = response.getOutputStream();
						 outputStream.write(exp_data.getBytes());
						 outputStream.flush();
						 outputStream.close();
					 } catch (Exception e) {
						 e.toString();
						 conn.CloseDBConn();
					 }


				 } catch (Exception e) {
					 e.toString();
					 log.log(Level.ERROR, " (CDO_Report) ::" + e.getMessage());
					 conn.CloseDBConn();

				 }

				 conn.CloseDBConn();
			 }
		 }
		 catch(Exception e)
			 {
				 e.toString();
				 log.log(Level.ERROR, " (CDO_Report) ::" + e.getMessage());
				 // conn.CloseDBConn();

			 }

		 }

	
	
	
	
	
	//@RequestMapping(value = "/Reports")
	 @RequestMapping(value = "/home")
	public String homecontrol(HttpServletRequest request) {
		try
		{
			 //log.log(Level.ERROR , " (Home) :: entered");
			Principal principal = request.getUserPrincipal();
			String UserName = principal.getName();
			//log.log(Level.ERROR , " (Home) :: entered ---" + UserName);
			//RandomString sessionID = new RandomString();
			//log.log(Level.ERROR , " (Home) :: entered ---" + sessionID.nextString());
		     //boolean flag = request.isUserInRole("ROLE_USR");
			request.getSession().setAttribute("username", UserName);
			request.getSession().setAttribute("SessionID", request.getSession().getId());
			return "home";
		}
		catch (Exception e)
		 {
			
			 log.log(Level.ERROR , " (Home) ::" + e.getMessage());
			
			 return "login";
			 
		 }
		
		
	    
	}
	 
	 
	 @RequestMapping(value = "/Reports")
		public String Reports(HttpServletRequest request) {
			try
			{
				Principal principal = request.getUserPrincipal();
				principal.getName();
				return "Reports";
			}
			catch (Exception e)
			 {
				
				 log.log(Level.ERROR , " (Home) ::" + e.getMessage());
				
				 return "login";
				 
			 }
			
			
		    
		}
	
/*	@RequestMapping(value = "/home")
	public String home(HttpServletRequest request) {
		try
		{
			
			RandomString sessionID = new RandomString();
			 log.log(Level.ERROR , " (home) :  1");
			Principal principal = request.getUserPrincipal();
			 log.log(Level.ERROR , " (home) :  2");
			 String UserName = principal.getName();
			 log.log(Level.ERROR , " (home) :  3");
		     //boolean flag = request.isUserInRole("ROLE_USR");
			 request.getSession().setAttribute("username", UserName);
			 log.log(Level.ERROR , " (home) :  4");
			 request.getSession().setAttribute("SessionID", sessionID.nextString());
			 log.log(Level.ERROR , " (home) :  5");
			 return "home";
		}
		 catch (Exception e)
		 {
			
			 log.log(Level.ERROR , " (home) ::" + e.getMessage());
			
			 return "login";
			 
		 }
		
		
	    
	}*/
	@RequestMapping(value = "/login")
	 public ModelAndView LoginPage ()
	 {
		
		 return new ModelAndView("login" , "error" , "");
		 
	 }
	
	@RequestMapping(value = "/ccreactive")
	public String ccreactive(HttpServletRequest request) {
		
		try
		{
			Principal principal = request.getUserPrincipal();
			principal.getName();
			return "ccreactive";
		}
		catch (Exception e)
		 {
			
			 log.log(Level.ERROR , " (home) ::" + e.getMessage());
			
			 return "login";
			 
		 }
	   
	}

	@RequestMapping(value = "/BatchUpload")
	public String BatchUpload(HttpServletRequest request) {

		try
		{
			Principal principal = request.getUserPrincipal();
			principal.getName();
			return "BatchUpload";
		}
		catch (Exception e)
		{

			log.log(Level.ERROR , " (home) ::" + e.getMessage());

			return "login";

		}

	}
	
	
	@RequestMapping(value = "/ccamend")
	public String ccamend(HttpServletRequest request) {
		try
		{
			Principal principal = request.getUserPrincipal();
			principal.getName();
			return "ccamend";
		}
		catch (Exception e)
		 {
			
			 log.log(Level.ERROR , " (home) ::" + e.getMessage());
			
			 return "login";
			 
		 }
	    
	}
	
	
	@RequestMapping(value = "/JoinT24")
	public String JoinT24(HttpServletRequest request) {
		try
		{
			Principal principal = request.getUserPrincipal();
			principal.getName();
			return "JoinT24";
		}
		catch (Exception e)
		 {
			
			 log.log(Level.ERROR , " (home) ::" + e.getMessage());
			
			 return "login";
			 
		 }
	   
	}
	
	 
	 @RequestMapping(value="/Logout", method = RequestMethod.GET)
		public String logoutPage (HttpServletRequest request, HttpServletResponse response) {
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			if (auth != null){    
				new SecurityContextLogoutHandler().logout(request, response, auth);
			}
			//log.log(Level.INFO , "userName: " + UserName + " Logged Out");
			return "redirect:/login";//You can redirect wherever you want, but generally it's a good practice to show login screen again.
		}
}
