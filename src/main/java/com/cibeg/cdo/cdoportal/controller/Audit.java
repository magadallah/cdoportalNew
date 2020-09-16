package com.cibeg.cdo.cdoportal.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

public class Audit {
	
	private DBConnection conn  ;
	protected  Connection con = null; 
	private DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/YYYY hh:mm");
	private LocalDateTime localDate = LocalDateTime.now();
	static Logger log = Logger.getLogger(Audit.class);
	
	public boolean AddLogging (String username , String service , String query)
	{
		
		try
		{
			 PreparedStatement UpdateUserName = null;						
			 conn = new DBConnection ();
			 conn.OpenDBConnection();
			 UpdateUserName = conn.con.prepareStatement("insert into IBLOCALOBJ.LOGGINGTBL values(LOGGINGTBL_seq.nextval , ? , ? , ?,TO_DATE(? ,'dd/MM/YYYY HH:MI' ))");
			 UpdateUserName.setString(1,username);
			 UpdateUserName.setString(2,service);
			 UpdateUserName.setString(3,query);
			 UpdateUserName.setString(4, dtf.format(localDate));
			 UpdateUserName.executeUpdate();
			
			 conn.CloseDBConn();
			 return true;
		}
		catch (Exception e)
		 {
			
			 conn.CloseDBConn();
			 log.log(Level.ERROR , " (UpdateUserName) ::" + e.getMessage());
			 return false;
			 
		 }
		
		
	}

}
