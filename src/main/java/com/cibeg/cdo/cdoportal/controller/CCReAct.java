package com.cibeg.cdo.cdoportal.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
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
public class CCReAct {
	
	private DBConnection conn  ;
	protected  Connection con = null; 
	private Audit Logging ;
	
	static Logger log = Logger.getLogger(CCReAct.class);
	//@ModelAttribute("LoginSession") LoginSession login 

		@RequestMapping(value = "/ValidateCCReAct" , method = RequestMethod.POST)
	   public String ValidateCCReAct (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
		
			String Session = (String) request.getSession().getAttribute("SessionID");
			 String login_id = (String) request.getSession().getAttribute("username");
			// String req_id = (String) request.getSession().getAttribute("ReqID");
			 String result = "Not Found";
		
			 try
			 {
				 if(!Session.isEmpty() && !login_id.isEmpty())
				 {
					 
					 
				 }
				 else
				 {
					 return result;
					 
				 }
				 
				 String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
				 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
				 String BWCUSTOMERID = "" ;
				 String BWACCOUNTID = "";
				 ResultSet BWCUSTOMERID_rs = null ;
				 ResultSet BWACCOUNTID_rs = null ;				 
				
				 ResultSet rs = null ;
				 conn = new DBConnection ();
				 conn.OpenDBConnection();
				 
				 
				 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
				 Statement BWACCOUNTID_stmt = conn.con.createStatement();
				 
				 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
				 while(BWCUSTOMERID_rs.next())
				 {
					 
					 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
				 }
				 
				 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
				 while(BWACCOUNTID_rs.next())
				 {
					 
					 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
				 }
				 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
				 	{
				 		return result;
				 	}
				 
				 
				 
				 
				 
				 String query = "select text1 , text2 , text3, text4 from hostaccount where BWCUSTOMERID = '"+ BWCUSTOMERID +"' and BWACCOUNTID = '"+ BWACCOUNTID +"'";
				 Statement stmt = conn.con.createStatement();
				 rs = stmt.executeQuery(query);
				 if(rs.next())
				 {
					 
					 result = rs.getString("text1") + "," + rs.getString("text2") + "," + rs.getString("text3") + "," + rs.getString("text4");
				 }
				 
				 conn.CloseDBConn();
				 return result;
					
				
			 }
			
			 catch (Exception e)
			 {
				 result = "Error";
				 conn.CloseDBConn();
				 log.log(Level.ERROR , " (CCReAct) ::" + e.getMessage());
				 return result ;
				 
			 }
			
				
			
			
		    }		
		
		
		@RequestMapping(value = "/ValidateCCUpdateSup" , method = RequestMethod.POST)
		   public String ValidateCCUpdateSup (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Not Found";
			
				 try
				 {
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
						 
						 
					 }
					 else
					 {
						 return result;
						 
					 }
					 
					/* String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
					 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
					 String BWCUSTOMERID = "" ;
					 String BWACCOUNTID = "";
					 ResultSet BWCUSTOMERID_rs = null ;
					 ResultSet BWACCOUNTID_rs = null ;				 
					
					
					 conn = new DBConnection ();
					 conn.OpenDBConnection();
					 
					 
					 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
					 Statement BWACCOUNTID_stmt = conn.con.createStatement();
					 
					 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
					 while(BWCUSTOMERID_rs.next())
					 {
						 
						 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
					 }
					 
					 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
					 while(BWACCOUNTID_rs.next())
					 {
						 
						 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
					 }
					 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
					 	{
					 		return result;
					 	}
					 */
					 conn = new DBConnection ();
					 conn.OpenDBConnection();
					 ResultSet rs = null ;
					 
					 
					 String query = "select text1 , text2 , text3, text4 from hostaccount where customernickname ='"+ gp_acc_num +"_" + sema_num + "' and text1 = 'S'";
					 Statement stmt = conn.con.createStatement();
					 rs = stmt.executeQuery(query);
					 if(rs.next())
					 {
						
							 
							 result = rs.getString("text1") + "," + rs.getString("text2") + "," + rs.getString("text3") + "," + rs.getString("text4");
						
						 
					 }
					 else
					 {
						 
						 return result;
					 }
					
					 
					 conn.CloseDBConn();
					 return result;
						
					
				 }
				
				 catch (Exception e)
				 {
					 result = "Error";
					 conn.CloseDBConn();
					 log.log(Level.ERROR , " (CCReAct) ::" + e.getMessage());
					 return result ;
					 
				 }
				
					
				
				
			    }		
		
		
		
		@RequestMapping(value = "/ReActivateCC" , method = RequestMethod.POST)
		   public String ReActivateCC (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Failed";
			
				 try
				 {
					 
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
						 
						 String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
						 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
						 String BWCUSTOMERID = "" ;
						 String BWACCOUNTID = "";
						 ResultSet BWCUSTOMERID_rs = null ;
						 ResultSet BWACCOUNTID_rs = null ;
						 PreparedStatement DeActUserAcc = null;
						 conn = new DBConnection ();
						 conn.OpenDBConnection();
						 
						 
						 
						 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
						 Statement BWACCOUNTID_stmt = conn.con.createStatement();
						 
						 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
						 while(BWCUSTOMERID_rs.next())
						 {
							 
							 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
						 }
						 
						 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
						 while(BWACCOUNTID_rs.next())
						 {
							 
							 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
						 }
						 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
						 	{
						 		return result;
						 	}
						 
						
						 DeActUserAcc = conn.con.prepareStatement("update hostaccount set visibletocustomer = ? , isaccountactive = ? , text4 = ? where BWCUSTOMERID = ? and BWACCOUNTID = ? ");				
						 DeActUserAcc.setInt(1,1);
						 DeActUserAcc.setInt(2,1);
						 DeActUserAcc.setInt(3,1);
						 DeActUserAcc.setString(4,BWCUSTOMERID);
						 DeActUserAcc.setString(5,BWACCOUNTID);
						 int flag = DeActUserAcc.executeUpdate();
						 
						 if(flag>0)
					        {
							  Logging = new Audit();
							  Logging.AddLogging(login_id, "Credit Card Reactivate ", "Reactivate Customer ID '" + BWCUSTOMERID + "' & Account ID '" + BWACCOUNTID  +"'" );	
							 	
							 result = "Done";
					        }
					              else
					        {
					            	  result = "Failed";

					        }
						 
					
						 conn.CloseDBConn();
						 
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
					 log.log(Level.ERROR , " (ReActivateCC) ::" + e.getMessage());
					 return result ;
					 
				 }
					
				
				
					
				
				
			    }	
		
		
		@RequestMapping(value = "/DeActivateCC" , method = RequestMethod.POST)
		   public String DeActivateCC (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Failed";
			
				 try
				 {
					 
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
						 String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
						 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
						 String BWCUSTOMERID = "" ;
						 String BWACCOUNTID = "";
						 ResultSet BWCUSTOMERID_rs = null ;
						 ResultSet BWACCOUNTID_rs = null ;
						 PreparedStatement DeActUserAcc = null;
						 conn = new DBConnection ();
						 conn.OpenDBConnection();
						 
						 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
						 Statement BWACCOUNTID_stmt = conn.con.createStatement();
						 
						 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
						 while(BWCUSTOMERID_rs.next())
						 {
							 
							 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
						 }
						 
						 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
						 while(BWACCOUNTID_rs.next())
						 {
							 
							 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
						 }
						 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
						 	{
						 		return result;
						 	}
						 
						 
						 DeActUserAcc = conn.con.prepareStatement("update hostaccount set visibletocustomer = ? , isaccountactive = ? , text4 = ? where BWCUSTOMERID = ? and BWACCOUNTID = ? ");				
						 DeActUserAcc.setInt(1,0);
						 DeActUserAcc.setInt(2,0);
						 DeActUserAcc.setInt(3,4);
						 DeActUserAcc.setString(4,BWCUSTOMERID);
						 DeActUserAcc.setString(5,BWACCOUNTID);
						 int flag = DeActUserAcc.executeUpdate();
						 
						 if(flag>0)
					        {
							 Logging = new Audit();
							 Logging.AddLogging(login_id, "Credit Card Deactivate ", "Deactivate Customer ID '" + BWCUSTOMERID + "' & Account ID '" + BWACCOUNTID  +"'" );		
							 	
							 result = "Done";
					        }
					              else
					        {
					            	  result = "Failed";

					        }
						 conn.CloseDBConn();
						 
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
					 log.log(Level.ERROR , " (DeActivateCC) ::" + e.getMessage());
					 return result ;
					 
				 }
					
				
				
					
				
				
			    }		
		
		
		
		
		@RequestMapping(value = "/ReActivateCCSup" , method = RequestMethod.POST)
		   public String ReActivateCCSup (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Failed";
			
				 try
				 {
					 
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
						 
						 /*String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
						 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
						 String BWCUSTOMERID = "" ;
						 String BWACCOUNTID = "";
						 ResultSet BWCUSTOMERID_rs = null ;
						 ResultSet BWACCOUNTID_rs = null ;
						
						 
						 
						 
						 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
						 Statement BWACCOUNTID_stmt = conn.con.createStatement();
						 
						 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
						 while(BWCUSTOMERID_rs.next())
						 {
							 
							 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
						 }
						 
						 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
						 while(BWACCOUNTID_rs.next())
						 {
							 
							 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
						 }
						 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
						 	{
						 		return result;
						 	}*/
						 	
						 	
						 	
						 	 PreparedStatement DeActUserAcc = null;
							 conn = new DBConnection ();
							 conn.OpenDBConnection();
						 
						 
						 DeActUserAcc = conn.con.prepareStatement("update hostaccount set visibletocustomer = ? , isaccountactive = ? , text4 = ? where customernickname = ?");				
						 DeActUserAcc.setInt(1,1);
						 DeActUserAcc.setInt(2,1);
						 DeActUserAcc.setInt(3,1);
						 DeActUserAcc.setString(4,gp_acc_num +"_" + sema_num);
						 int flag = DeActUserAcc.executeUpdate();
						 
						 if(flag>0)
					        {
							 Logging = new Audit();
							  Logging.AddLogging(login_id, "Credit Card Reactivate ", "Reactivate Supplementary Card With number '" + gp_acc_num +"_" + sema_num + "'" );	
							 	
							 result = "Done";
					        }
					              else
					        {
					            	  result = "Failed";

					        }
						 
					
						 conn.CloseDBConn();
						 
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
					 log.log(Level.ERROR , " (ReActivateCC) ::" + e.getMessage());
					 return result ;
					 
				 }
					
				
				
					
				
				
			    }	
		
		
		@RequestMapping(value = "/DeActivateCCSup" , method = RequestMethod.POST)
		   public String DeActivateCCSup (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Failed";
			
				 try
				 {
					 
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
//						 String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
//						 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
//						 String BWCUSTOMERID = "" ;
//						 String BWACCOUNTID = "";
//						 ResultSet BWCUSTOMERID_rs = null ;
//						 ResultSet BWACCOUNTID_rs = null ;
//						 PreparedStatement DeActUserAcc = null;
//						 conn = new DBConnection ();
//						 conn.OpenDBConnection();
//						 
//						 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
//						 Statement BWACCOUNTID_stmt = conn.con.createStatement();
//						 
//						 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
//						 while(BWCUSTOMERID_rs.next())
//						 {
//							 
//							 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
//						 }
//						 
//						 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
//						 while(BWACCOUNTID_rs.next())
//						 {
//							 
//							 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
//						 }
//						 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
//						 	{
//						 		return result;
//						 	}
						 
						 PreparedStatement DeActUserAcc = null;
						 conn = new DBConnection ();
						 conn.OpenDBConnection();
						 
							
						 	
						 DeActUserAcc = conn.con.prepareStatement("update hostaccount set visibletocustomer = ? , isaccountactive = ? , text4 = ? where customernickname = ?");				
						 DeActUserAcc.setInt(1,0);
						 DeActUserAcc.setInt(2,0);
						 DeActUserAcc.setInt(3,4);
						 DeActUserAcc.setString(4,gp_acc_num +"_" + sema_num );
						
						 int flag = DeActUserAcc.executeUpdate();
						 
						 if(flag>0)
					        {
							 Logging = new Audit();
							 Logging.AddLogging(login_id, "Credit Card Deactivate ", "Deactivate Supplementary Card With number  '" + gp_acc_num +"_" + sema_num + "'");	
							 result = "Done";
							 
					        }
					              else
					        {
					            	  result = "Failed";

					        }
						 conn.CloseDBConn();
						 
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
					 log.log(Level.ERROR , " (DeActivateCC) ::" + e.getMessage());
					 return result ;
					 
				 }
					
				
				
					
				
				
			    }		
		
		
		
		
		

		@RequestMapping(value = "/UpdateCC" , method = RequestMethod.POST)
		   public String UpdateCC (@RequestParam(value="sema_num") String sema_num , @RequestParam(value="gp_acc_num") String gp_acc_num , HttpServletRequest request ) {
			
				String Session = (String) request.getSession().getAttribute("SessionID");
				 String login_id = (String) request.getSession().getAttribute("username");
				// String req_id = (String) request.getSession().getAttribute("ReqID");
				 String result = "Failed";
			
				 try
				 {
					 if(!Session.isEmpty() && !login_id.isEmpty())
					 {
						 
						 
					 }
					 else
					 {
						 return result;
						 
					 }
					 
					 
//					 String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 6 and BOSCUSTOMERID = '"+ sema_num +"'";
//					 String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 6 and HOSTACCOUNTID = '"+ gp_acc_num +"_" + sema_num + "'";
//					 String BWCUSTOMERID = "" ;
//					 String BWACCOUNTID = "";
//					 ResultSet BWCUSTOMERID_rs = null ;
//					 ResultSet BWACCOUNTID_rs = null ;
//					 
//					 
//					 conn = new DBConnection ();
//					 conn.OpenDBConnection();
//					 
//					 Statement BWCUSTOMERID_stmt = conn.con.createStatement();
//					 Statement BWACCOUNTID_stmt = conn.con.createStatement();
//					 
//					 BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
//					 while(BWCUSTOMERID_rs.next())
//					 {
//						 
//						 BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
//					 }
//					 
//					 BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
//					 while(BWACCOUNTID_rs.next())
//					 {
//						 
//						 BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
//					 }
//					 	if(BWCUSTOMERID.equals("") || BWACCOUNTID.equals(""))
//					 	{
//					 		return result;
//					 	}
					 conn = new DBConnection ();
					 conn.OpenDBConnection();
					 PreparedStatement DeActUserAcc = null;
					 ResultSet rs = null ;	
					 String query = "select text1 , text2 , text3, text4 from hostaccount where customernickname ='"+ gp_acc_num +"_" + sema_num + "' and text1 = 'S'";
					 Statement stmt = conn.con.createStatement();
					 rs = stmt.executeQuery(query);
					 while(rs.next())
					 {
						 
						 if(!rs.getString("text1").equals("S"))
						 {
							 
							 return result ;
							 
						 }
						 
						
						 
					 
					 DeActUserAcc = conn.con.prepareStatement("update hostaccount set text2 = ? where customernickname = ? ");				
					 DeActUserAcc.setString(1,rs.getString("text3"));
					 DeActUserAcc.setString(2,gp_acc_num +"_" + sema_num);
					
					 }
					 DeActUserAcc.executeUpdate();
					 Logging = new Audit();
					 Logging.AddLogging(login_id, "Credit Card Update ", "Update Supplementary Card With number '" + gp_acc_num +"_" + sema_num +"'" );		
					 result = "Done";
					 conn.CloseDBConn();
					 
					 return result;
						
					
				 }
				
				 catch (Exception e)
				 {
					 result = "Error";
					 conn.CloseDBConn();
					 log.log(Level.ERROR , " (UpdateCC) ::" + e.getMessage());
					 return result ;
					 
				 }
					
				
				
					
				
				
			    }		

}
