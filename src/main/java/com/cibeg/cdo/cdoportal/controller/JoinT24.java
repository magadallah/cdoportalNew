package com.cibeg.cdo.cdoportal.controller;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;


@RestController
@SessionAttributes("LoginSession")
public class JoinT24 {
	
	private DBConnection conn  ;
	protected  Connection con = null; 
	private Audit Logging ;

	
	static Logger log = Logger.getLogger(CCReAct.class);
	
	
	@RequestMapping(value = "/JoinT24" , method = RequestMethod.POST)
	   public String JoinT24 (@RequestParam(value="T24CustNo") String T24CustNo , @RequestParam(value="SemaNum") String SemaNum , HttpServletRequest request ) {
		
			 String Session = (String) request.getSession().getAttribute("SessionID");
			 String login_id = (String) request.getSession().getAttribute("username");
			// String req_id = (String) request.getSession().getAttribute("ReqID");
			 String result = "Failed";
		
			 try
			 {
				 
				 if(!Session.isEmpty() && !login_id.isEmpty())
				 {
					
					 //String query = "exec update_sema_t24_link_pro('" + T24CustNo + "','" + SemaNum + "')";
					 //ResultSet rs = null ;
					 conn = new DBConnection ();
					 conn.OpenDBConnection();
					 
					 CallableStatement cstmt = conn.con.prepareCall("{call update_sema_t24_link_pro(?,?)}");
					 cstmt.setString(1, T24CustNo);
					 cstmt.setString(2, SemaNum);
					 cstmt.executeUpdate();
					 Logging = new Audit();
					 Logging.AddLogging(login_id, "JOIN CUST NO / SEMA", "Joining T24CustNo '" + T24CustNo + "' & Sema Number '" + SemaNum  +"'" );
					 
					 //Statement stmt = conn.con.createStatement();
					 //stmt.executeUpdate(query);				
					 conn.CloseDBConn();
					 result = "Done";
					 return result;
					 
				 }
				 else
				 {
					 return result;
					 
				 }
				 
			
					
				
			 }
			
			 catch (Exception e)
			 {
				 result = "Error";
				 conn.CloseDBConn();
				 log.log(Level.ERROR , " (JoinT24) ::" + e.getMessage());
				 return result ;
				 
			 }
			
				
			
			
		    }		
		

}
