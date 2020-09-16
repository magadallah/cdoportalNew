package com.cibeg.cdo.cdoportal.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Array;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Locale;
import java.util.Properties;
import java.util.Set;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.*;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;


//import java.sql.*;

public class DBConnection {

	protected  Connection con = null; 
	
	static Logger log = Logger.getLogger(DBConnection.class);
	
	public String getPropValues(String name) throws IOException {
		String result = "";
		InputStream inputStream = null;
		try {
				Properties prop = new Properties();
				String propFileName = "PortalService.properties";

			inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
 
			if (inputStream != null) {
				prop.load(inputStream);
			} else {
				throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
			}
 
			//Date time = new Date(System.currentTimeMillis());
 
			// get the property value and print it out
			
			String words = prop.getProperty(name);
			
		
			result = words;
			//System.out.println(result + "\nProgram Ran on " + time + " by user=" + user);
		} catch (Exception e) {
			 e.printStackTrace();
			 log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		} finally {
			inputStream.close();
		}
		return result;
	}
	
	
	
	public void OpenDBConnection ()
	{
	      // Declare the JDBC objects.  
	      

	      try {  
	    	 
	    		 //To enable the JNDI connection
		         // Establish the connection.  
		    	/* DataSource dataSource;
		    	 // InitialContext context = new InitialContext();
		    	  InitialContext ctx = new InitialContext();
		    	 dataSource = (DataSource)ctx.lookup("jdbc/CR2Project");
		            //dataSource = (DataSource) encContext.lookup("jdbc/RMProject");
		            con = dataSource.getConnection();*/
	    	  
	         // To enable the direct JDBC connection
			  Class.forName("com.teradata.jdbc.TeraDriver");
          con = DriverManager.getConnection(getPropValues("DBConnectionString") , getPropValues("DBUserName") , getPropValues("DBPassword"));  
	         //Statement stmt = con.createStatement();
	      }  

	      // Handle any errors that may have occurred.  
	      catch (Exception e) {  
	         e.printStackTrace();
	         log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
	      }  		
	}
	public void CloseDBConn()
	{
		try {
			if (con.isClosed() == false)
			{
			con.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		}
	}
	
	public ResultSet SelectStatement(String... args)
	{	
		ResultSet rs = null ;
		String query = "Select * from " + args[0] ;
		if (args.length > 1)
		{
			query +=" where ";
		
		for(int i = 1 ; i<args.length ; i ++)
		{						
			query += args[i];
			query += " And ";			
		}
		query = query.substring(0, query.length() - 4);
		}		
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			Statement stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			
			
			//stmt.closeOnCompletion();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		}
		
		return rs;	
	}
	
	public ResultSet SelectStatementwhere(String... args)
	{	
		ResultSet rs = null ;
		String query = "Select * from " + args[0] + " where " + args[1] ;
	
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			Statement stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			
			
			//stmt.closeOnCompletion();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		}
		
		return rs;	
	}
	
	
	public ResultSet CountRows(String... args)
	{	
		ResultSet rs = null ;
		String query = "Select count(*) from " + args[0] + " where " + args[1] ;
	
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			Statement stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			
			
			//stmt.closeOnCompletion();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		}
		
		return rs;	
	}
	
	
	
	public ResultSet SelectStatementOrderBy(String... args)
	{	
		ResultSet rs = null ;
		int stop = 0 ;
		String query = "Select Top 1 " + args[1] + " from " + args[0] ;
		if (args.length > 2)
		{
			query +=" where ";
		
		for(int i = 2 ; i<args.length ; i ++)
		{			
			if(args[i] == "order by")
			{
				stop = i ;
				break ;
			}
			query += args[i];
			query += " And ";			
		}
		query = query.substring(0, query.length() - 4);
		
		query +=" Order by ";
		query += args[stop + 1] ;
		query += " " + args[stop + 2];
		
		}		
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			Statement stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			//stmt.closeOnCompletion();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		}
		
		return rs;	
	}
	
	
	public ResultSet SelectStatementOrderByWithoutTop(String... args)
	{	
		ResultSet rs = null ;
		int stop = 0 ;
		String query = "Select " + args[1] + " from " + args[0] ;
		if (args.length > 2)
		{
			query +=" where ";
		
		for(int i = 2 ; i<args.length ; i ++)
		{			
			if(args[i] == "order by")
			{
				stop = i ;
				break ;
			}
			query += args[i];
			query += " And ";			
		}
		query = query.substring(0, query.length() - 4);
		
		query +=" Order by ";
		query += args[stop + 1] ;
		query += " " + args[stop + 2];
		
		}		
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			Statement stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			//stmt.closeOnCompletion();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
		}
		
		return rs;	
	}
	
	
	
	public boolean InsertStatement(String... args)
	{	
		int flag = 2 ;
		ResultSet rs = null ;
		String query = "Insert into " + args[0] ;
		
		query +=" values ('";
		
		if (args.length > 1)
		{		
		for(int i = 1 ; i<args.length ; i ++)
		{		
			
			query += args[i];
			query += "' , '";			
		}
		query = query.substring(0, query.length() - 3);
		query += ")";
		}
		else
		{
			return false ;
		}
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			Statement stmt = con.createStatement();
			flag = stmt.executeUpdate(query);
			//stmt.closeOnCompletion();
			if (flag == 1)
			{
				return true;
			}
			else
			{
				return false;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			if(e.getMessage().contains("Cannot insert duplicate key row in object"))
			{
				log.log(Level.DEBUG , " (DBConnection) ::" + e.getMessage());
				
			}
			else
			{
				log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
			}
			
			
			return false;	
		}
		
		
	}
	
	
	public boolean UpdateStatement(String... args)
	{	
		
		int flag = 2 ;
		int stop = 0 ;
		ResultSet rs = null ;
		String query = "update " + args[0] ;
		//PreparedStatement update ;
		query +=" Set ";
		
		if (args.length > 1)
		{		
		for(int i = 1 ; i<args.length ; i ++)
		{		
			if (args[i] == "where")
			{
				stop = i ;
				break ;
			}
			query += args[i];
			query += " , ";
			
			
		}
		query = query.substring(0, query.length() - 2);
		query += " Where ";
		
		for(int i = stop + 1 ; i<args.length ; i ++)
		{						
			query += args[i];
			query += " And ";
			
			
			
		}
		query = query.substring(0, query.length() - 4);
		
		}
		else
		{
			return false ;
		}
		try {
			log.log(Level.DEBUG , "Query Statement : " + query );
			
			//update = con.prepareStatement(query)
			
			Statement stmt = con.createStatement();
			flag = stmt.executeUpdate(query);
			//stmt.closeOnCompletion();
			if (flag == 1)
			{
				return true;
			}
			else
			{
				return false;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.log(Level.ERROR , " (DBConnection) ::" + e.getMessage());
			return false;	
		}
		
		
	}
	
	
	
}
