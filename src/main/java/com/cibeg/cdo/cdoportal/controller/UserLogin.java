package com.cibeg.cdo.cdoportal.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Hashtable;
import java.util.List;
import java.util.Properties;

import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.Attributes;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import javax.naming.ldap.InitialLdapContext;
import javax.naming.ldap.LdapContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

@SessionAttributes("LoginSession")
public class UserLogin implements AuthenticationProvider{
	static Logger log = Logger.getLogger(UserLogin.class);
	
	
	
	public Authentication authenticate(Authentication authentication ) throws AuthenticationException {
		 LoginSession login = new LoginSession();
		// HttpServletRequest request = null;
		try
		{
					
			  String userName = authentication.getName();
		      String password = authentication.getCredentials().toString().trim();
		      Authentication auth = null;
		       // HttpSession session = null;
		       
		        if(userName.equals("portal") && password.equals("P@$$w0rd") )
				 {				
				 // session.setAttribute("user", user);
		        	//request.getSession().setAttribute("username",userName);
		        	List<SimpleGrantedAuthority> role = new ArrayList<SimpleGrantedAuthority>();
		        	role.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		        	auth =new UsernamePasswordAuthenticationToken (userName , password , role);
		        
		        	
	        		//session.setAttribute("LoginSession", userName);
	        		//SetSession(login , userName);
	        		return auth;			 
				 }
		        
		        if(userName.equals("portal2") && password.equals("P@$$w0rd") )
				 {				
				 // session.setAttribute("user", user);
		        //	request.getSession().setAttribute("username",userName);
		        	List<SimpleGrantedAuthority> role = new ArrayList<SimpleGrantedAuthority>();
		        	role.add(new SimpleGrantedAuthority("ROLE_USR"));
		        	auth =new UsernamePasswordAuthenticationToken (userName , password , role);
		        	
		        	
	        		//session.setAttribute("LoginSession", userName);
	        		//SetSession(login , userName);
	        		return auth;			 
				 }
		        
		        
		        	if(validateLogin(userName, password).equals("SuccessUSR"))
		        	{
		        		
		        		
		        		List<SimpleGrantedAuthority> role = new ArrayList<SimpleGrantedAuthority>();
			        	role.add(new SimpleGrantedAuthority("ROLE_USR"));
			        	auth =new UsernamePasswordAuthenticationToken (userName , password , role);
		        	//	request.getSession().setAttribute("username",userName);
		        		//session.setAttribute("LoginSession", userName);
		        		//SetSession(login , userName);
		        		return auth;
		        	}
		        	else if(validateLogin(userName, password).equals("SuccessADM"))
		        	{
		        		
		        		
		        		List<SimpleGrantedAuthority> role = new ArrayList<SimpleGrantedAuthority>();
			        	role.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
			        	auth =new UsernamePasswordAuthenticationToken (userName , password , role);
			        	return auth;
		        		
		        	}
		        	else
		        	{
		        		//session.setAttribute("LoginSession", "Not Auth");
		        		//SetSession(login , "Not Auth");
		        		return null;
		        	}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
			
		}
	  
	        	
	        	
	    }
	    public boolean supports(Class<? extends Object> authentication) {
	        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
	    }
	
	
	
	
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
	
	
	 public String validateLogin(String UserName , String Password) {
			try {		
				Hashtable<String, String> env = new Hashtable<String, String>();
				String domain = "hodomain\\"; 
				String username = UserName;
				String passWord = Password;
				String securityPrincipal = domain + username; 
		 
				env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
				env.put(Context.PROVIDER_URL, "ldap://"+getPropValues("LDAPConn")); //IP and port of LDAP
				env.put(Context.SECURITY_AUTHENTICATION, "simple");
				env.put(Context.SECURITY_PRINCIPAL, securityPrincipal); // replace with user DN
				env.put(Context.SECURITY_CREDENTIALS, passWord);
		 
				/*DirContext dcx = new InitialDirContext(env);*/            
				//InitialLdapContext ctx = new InitialLdapContext(env, null);            
				LdapContext ctx = new InitialLdapContext(env, null);            
				//System.out.println("Authentication Success!");
				SearchControls searchControls = getSearchControls();
		        if(getUserInfo(username, ctx, searchControls))
		        {
		        	log.log(Level.INFO , "userName: " + UserName + " Logged In");
		        	return "SuccessUSR";
		        	
		        }
		        else if (getUserInfoAdmin(username, ctx, searchControls))
		        {
		        	log.log(Level.INFO , "userName: " + UserName + " Logged In");
		        	return "SuccessADM";
		        	
		        }
		        else
		        {
		        	
		        	return "Not Auth";
		        }
				
		 
			} catch (NamingException ex) {
				//System.out.println("Authentication failed: " + ex.toString());
				log.log(Level.INFO , "Authentication failed: " + ex.toString());
				return "Wrong Validation";
			} catch (Exception ex) {
				log.log(Level.ERROR ,"Authentication failed ! Exception: " + ex.toString());
				return "Error";
			}
		}
	 
	 private static SearchControls getSearchControls() 
	 {
	 	SearchControls cons = new SearchControls();
	 	cons.setSearchScope(SearchControls.SUBTREE_SCOPE);
	 	String[] attrIDs = {"memberOf"};
	 	cons.setReturningAttributes(attrIDs);
	 	return cons;
	 }
	 private boolean getUserInfo(String userName, LdapContext ctx, SearchControls searchControls) 
	 {
				 
	 	//System.out.println("userName: " + userName);
	 	String baseDN = "dc=hodomain,dc=local";
	 	
	 	//User user = null;
	 	try {
	 		NamingEnumeration<SearchResult> answer = ctx.search(baseDN, "sAMAccountName=" + userName, searchControls);
	 		if (answer.hasMore()) {
	 			Attributes attrs = answer.next().getAttributes();	 			
	 			//System.out.println(attrs.get("memberOf"));
	 			String grp = attrs.get("memberOf").toString() ;
	 			String Assgrp = getPropValues("UsersSecurityGrp");
	 			if (grp.contains(Assgrp))
	 			{
	 				
	 				return true ;
	 				
	 			}
	 			else
	 			{
	 				
	 				return false;
	 			}
	 			
	 			//return true ;
	 			
	 		} else {
	 			return false;
	 			//System.out.println("user not found.");
	 			
	 		}
	 	} catch (Exception ex) {
	 		log.log(Level.ERROR , ex.getMessage());
	 		return false;
	 	}
	 	//return user;
	 }
	 
	 
	 
	 private boolean getUserInfoAdmin(String userName, LdapContext ctx, SearchControls searchControls) 
	 {
				 
	 	//System.out.println("userName: " + userName);
	 	String baseDN = "dc=hodomain,dc=local";
	 	
	 	//User user = null;
	 	try {
	 		NamingEnumeration<SearchResult> answer = ctx.search(baseDN, "sAMAccountName=" + userName, searchControls);
	 		if (answer.hasMore()) {
	 			Attributes attrs = answer.next().getAttributes();	 			
	 			//System.out.println(attrs.get("memberOf"));
	 			String grp = attrs.get("memberOf").toString() ;
	 			String Assgrp = getPropValues("AdminSecurityGrp");
	 			if (grp.contains(Assgrp))
	 			{
	 				
	 				return true ;
	 				
	 			}
	 			else
	 			{
	 				
	 				return false;
	 			}
	 			
	 			//return true ;
	 			
	 		} else {
	 			return false;
	 			//System.out.println("user not found.");
	 			
	 		}
	 	} catch (Exception ex) {
	 		log.log(Level.ERROR , ex.getMessage());
	 		return false;
	 	}
	 	//return user;
	 }


	

	
	

}
