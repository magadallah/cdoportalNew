package com.cibeg.cdo.cdoportal.controller;

import java.sql.*;
import java.util.Date;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;


@RestController
@SessionAttributes("LoginSession")
public class UserNameUpdate {

    private DBConnection conn;
    private Audit Logging;

    protected Connection con = null;

    static Logger log = Logger.getLogger(UserNameUpdate.class);
    //@ModelAttribute("LoginSession") LoginSession login

    @RequestMapping(value = "/ValidateUserName", method = RequestMethod.POST)
    public String ValidateUserName(@RequestParam(value = "UserName") String UserName, HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Not Found";

        try {

            if (!Session.isEmpty() && !login_id.isEmpty()) {

                String query = "select userloginid , postname from bwuser where userloginid = '" + UserName + "'";
                ResultSet rs = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                Statement stmt = conn.con.createStatement();
                rs = stmt.executeQuery(query);
                while (rs.next()) {

                    result = rs.getString("userloginid") + "," + rs.getString("userloginid");
                }

                conn.CloseDBConn();
                return result;
            } else {
                return result;

            }


        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (ValidateUserName) ::" + e.getMessage());
            return result;

        }


    }

    @RequestMapping(value = "/ValidateCustomerNumber", method = RequestMethod.POST)
    public String ValidateCustomerNumber(@RequestParam(value = "CustomerNumber") String CustomerNumber, HttpServletRequest request) {
        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Not Found";
        String resultMain = "Not Found";
        String resultNew = "Not Found";

        try {

            if (!Session.isEmpty() && !login_id.isEmpty()) {

                String query = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE  from CUSTOMER_SAMP where CUSTOMER_KEY = '" + CustomerNumber + "'";
                String queryNewTbl = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE , Authorization_status from CUSTOMER_ADDING_VALUES where CUSTOMER_KEY = '" + CustomerNumber + "'";
                ResultSet rs = null;
                ResultSet rsNewTbl = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                Statement stmt = conn.con.createStatement();
                rs = stmt.executeQuery(query);
                stmt = conn.con.createStatement();
                rsNewTbl = stmt.executeQuery(queryNewTbl);
                if (rs.next()) {

                    resultMain = rs.getString("CUSTOMER_TYPE") + "," + rs.getString("ACCOUNT_KEY") + "," +
                            rs.getString("PHONE_NO") + "," + rs.getString("PHONE_TYPE") + "," +
                            rs.getString("POLICY_PRODUCT_NO") + "," + rs.getString("LAST_UPDATED_DATE");
                }
                if (rsNewTbl.next()) {

                    resultNew = rsNewTbl.getString("CUSTOMER_TYPE") + "," + rsNewTbl.getString("ACCOUNT_KEY") + "," +
                            rsNewTbl.getString("PHONE_NO") + "," + rsNewTbl.getString("PHONE_TYPE") + "," +
                            rsNewTbl.getString("POLICY_PRODUCT_NO") + "," + rsNewTbl.getString("LAST_UPDATED_DATE") + "," +
                            rsNewTbl.getString("AUTHORIZATION_STATUS");

                }

                result = resultMain + "," + resultNew;

                rs.close();
                rsNewTbl.close();
                stmt.close();
                conn.CloseDBConn();
                return result;
            } else {
                return result;

            }

        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (ValidateCustomerNumber) ::" + e.getMessage());
            return result;

        }

    }

    @RequestMapping(value = "/ShowAuthCustomerNumber", method = RequestMethod.POST)
    public String ShowAuthCustomerNumber(@RequestParam(value = "CustomerType_Auth") String CustomerNumber, HttpServletRequest request) {
        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Not Found";
        String resultMain = "Not Found";
        String resultNew = "Not Found";

        try {

            if (!Session.isEmpty() && !login_id.isEmpty()) {

                String query = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE  from CUSTOMER_SAMP where CUSTOMER_KEY = '" + CustomerNumber + "'";
                String queryNewTbl = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE , Authorization_status ,Authorizer_comments from CUSTOMER_ADDING_VALUES where CUSTOMER_KEY = '" + CustomerNumber + "' and Authorization_Status = 'U'";
                ResultSet rs = null;
                ResultSet rsNewTbl = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                Statement stmt = conn.con.createStatement();
                rs = stmt.executeQuery(query);
                stmt = conn.con.createStatement();
                rsNewTbl = stmt.executeQuery(queryNewTbl);
                if (rs.next()) {

                    resultMain = rs.getString("CUSTOMER_TYPE") + "," + rs.getString("ACCOUNT_KEY") + "," +
                            rs.getString("PHONE_NO") + "," + rs.getString("PHONE_TYPE") + "," +
                            rs.getString("POLICY_PRODUCT_NO") + "," + rs.getString("LAST_UPDATED_DATE");
                }
                if (rsNewTbl.next()) {

                    resultNew = rsNewTbl.getString("CUSTOMER_TYPE") + "," + rsNewTbl.getString("ACCOUNT_KEY") + "," +
                            rsNewTbl.getString("PHONE_NO") + "," + rsNewTbl.getString("PHONE_TYPE") + "," +
                            rsNewTbl.getString("POLICY_PRODUCT_NO") + "," + rsNewTbl.getString("LAST_UPDATED_DATE") + "," +
                            rsNewTbl.getString("AUTHORIZATION_STATUS") + "," + rsNewTbl.getString("Authorizer_comments");

                }

                result = resultMain + "," + resultNew;

                rs.close();
                rsNewTbl.close();
                stmt.close();
                conn.CloseDBConn();
                return result;
            } else {
                return result;

            }

        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (ValidateCustomerNumber) ::" + e.getMessage());
            return result;

        }

    }

    @RequestMapping(value = "/GetAllUnauthorizedCustomerNumber", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String GetUnauthorizedCustomerNumber(HttpServletRequest request) {
        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Not Found";
        String resultMain = "Not Found";
        String resultNew = "Not Found";

        try {

            if (!Session.isEmpty() && !login_id.isEmpty()) {

                // String query = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE  from CUSTOMER_SAMP where CUSTOMER_KEY = '" + CustomerNumber + "'";
                // String queryNewTbl = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE , Authorization_status ,Authorizer_comments from CUSTOMER_ADDING_VALUES where Authorization_Status = 'U'";
                // ResultSet rs = null;
                ResultSet rsNewTbl = null;
                String queryNewTbl = "Authorization_Status = 'U'";
                conn = new DBConnection();
                conn.OpenDBConnection();
                // Statement stmt = conn.con.createStatement();
                // rs = stmt.executeQuery(query);
                // Statement stmt = conn.con.createStatement();
                //rsNewTbl = stmt.executeQuery(queryNewTbl);
                rsNewTbl = conn.SelectStatementwhere("CUSTOMER_ADDING_VALUES", queryNewTbl);
//                if (rs.next()) {
//
//                    resultMain = rs.getString("CUSTOMER_TYPE") + "," + rs.getString("ACCOUNT_KEY") + "," +
//                            rs.getString("PHONE_NO") + "," + rs.getString("PHONE_TYPE") + "," +
//                            rs.getString("POLICY_PRODUCT_NO") + "," + rs.getString("LAST_UPDATED_DATE");
//                }
                while (rsNewTbl.next()) {

                    resultNew = rsNewTbl.getString("CUSTOMER_TYPE") + "," + rsNewTbl.getString("ACCOUNT_KEY") + "," +
                            rsNewTbl.getString("PHONE_NO") + "," + rsNewTbl.getString("PHONE_TYPE") + "," +
                            rsNewTbl.getString("POLICY_PRODUCT_NO") + "," + rsNewTbl.getString("LAST_UPDATED_DATE") + "," +
                            rsNewTbl.getString("AUTHORIZATION_STATUS") + "," + rsNewTbl.getString("Authorizer_comments");

                }

                result = resultNew;

                //rs.close();
                rsNewTbl.close();
                //stmt.close();
                conn.CloseDBConn();
                return result;
            } else {
                return result;

            }

        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (CheckAuthCustomerNumber) ::" + e.getMessage());
            return result;

        }

    }

    @RequestMapping(value = "/AuthorizeSingleCustomer", method = RequestMethod.POST)
    public String AuthorizeSingleCustomer(@RequestParam(value = "CustomerNumber_Auth") String CustomerNumber, HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Failed";

        try {
            if (!Session.isEmpty() && !login_id.isEmpty()) {

                PreparedStatement AuthorizeCustomer = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                AuthorizeCustomer = conn.con.prepareStatement("update CUSTOMER_ADDING_VALUES set AUTHORIZATION_STATUS = ? , Authorization_date = ? where Customer_key = ?");
                AuthorizeCustomer.setString(1, "A");
                AuthorizeCustomer.setDate(2, new java.sql.Date(new Date().getTime()));
                AuthorizeCustomer.setString(3, CustomerNumber);

                int flag = AuthorizeCustomer.executeUpdate();
                if (flag > 0) {
//                    Logging = new Audit();
//                    Logging.AddLogging(login_id, "UPDATE USER-ID", "Update Username & Postname from '" + UserName + "' to '" + UserName_update + "'");
                    result = "Done";
                } else {
                    result = "No";

                }

                AuthorizeCustomer.close();
                conn.CloseDBConn();

                return result;

            } else {
                return result;

            }


        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (CustomerNumber) ::" + e.getMessage());
            return result;

        }


    }

    @RequestMapping(value = "/RejectSingleCustomer", method = RequestMethod.POST)
    public String RejectSingleCustomer(@RequestParam(value = "CustomerNumber_Auth") String CustomerNumber, @RequestParam(value = "Authorization_comments") String RejectionValue
            , HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Failed";

        try {
            if (!Session.isEmpty() && !login_id.isEmpty()) {

                PreparedStatement AuthorizeCustomer = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                AuthorizeCustomer = conn.con.prepareStatement("update CUSTOMER_ADDING_VALUES set AUTHORIZATION_STATUS = ? , Authorization_date = ? , Authorizer_comments = ? where Customer_key = ?");
                AuthorizeCustomer.setString(1, "R");
                AuthorizeCustomer.setDate(2, new java.sql.Date(new Date().getTime()));
                AuthorizeCustomer.setString(3, RejectionValue);
                AuthorizeCustomer.setString(4, CustomerNumber);

                int flag = AuthorizeCustomer.executeUpdate();
                if (flag > 0) {
//                    Logging = new Audit();
//                    Logging.AddLogging(login_id, "UPDATE USER-ID", "Update Username & Postname from '" + UserName + "' to '" + UserName_update + "'");
                    result = "Done";
                } else {
                    result = "No";

                }

                AuthorizeCustomer.close();
                conn.CloseDBConn();

                return result;

            } else {
                return result;

            }


        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (CustomerNumber) ::" + e.getMessage());
            return result;

        }


    }


    @RequestMapping(value = "/UpdateUserName", method = RequestMethod.POST)
    public String UpdateUserName(@RequestParam(value = "UserName_update") String UserName_update, @RequestParam(value = "UserName") String UserName, HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Failed";

        try {
            if (!Session.isEmpty() && !login_id.isEmpty()) {

                PreparedStatement UpdateUserName = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                UpdateUserName = conn.con.prepareStatement("update bwuser set userloginid = ? , postname = ? where userloginid = ?");
                UpdateUserName.setString(1, UserName_update);
                UpdateUserName.setString(2, UserName_update);
                UpdateUserName.setString(3, UserName);

                int flag = UpdateUserName.executeUpdate();
                if (flag > 0) {
                    Logging = new Audit();
                    Logging.AddLogging(login_id, "UPDATE USER-ID", "Update Username & Postname from '" + UserName + "' to '" + UserName_update + "'");
                    result = "Done";
                } else {
                    result = "No";

                }


                conn.CloseDBConn();

                return result;

            } else {
                return result;

            }


        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (UpdateUserName) ::" + e.getMessage());
            return result;

        }


    }


    @RequestMapping(value = "/UpdateCustomerInfo", method = RequestMethod.POST)
    public String UpdateCustomerInfo(@RequestParam(value = "CustomerType_update") String CustomerType_update,
                                     @RequestParam(value = "AccountKey_update") String AccountKey_update,
                                     @RequestParam(value = "PhoneNumber_update") String PhoneNumber_update,
                                     @RequestParam(value = "PhoneType_update") String PhoneType_update,
                                     @RequestParam(value = "PolicyProductNo_update") String PolicyProductNo_update,
                                     @RequestParam(value = "CustomerNumber") String CustomerNumber,
                                     HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Failed";
        String query = null;
//		try {
//
//			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//			if (auth != null && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_USR"))) {
//
//				if (!Session.isEmpty() && !login_id.isEmpty()) {
//
//					PreparedStatement UpdateCustomerInfor = null;
//					String query = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE  from CUSTOMER_ADDING_VALUES where CUSTOMER_KEY = '" + CustomerNumber + "'";
//					ResultSet rs = null;
//					PreparedStatement insertCustomerInfo = null;
//					conn = new DBConnection();
//					conn.OpenDBConnection();
//					Statement stmt = conn.con.createStatement();
//					rs = stmt.executeQuery(query);
//					if (rs.next()) {
//						UpdateCustomerInfor = conn.con.prepareStatement("update CUSTOMER_ADDING_VALUES set  CUSTOMER_TYPE = ? , ACCOUNT_KEY = ? , PHONE_NO = ? , PHONE_TYPE = ? , POLICY_PRODUCT_NO = ? , LAST_UPDATED_DATE = ? , AUTHORIZATION_STATUS = ? where CUSTOMER_KEY = ?");
//
//						UpdateCustomerInfor.setString(1, CustomerType_update);
//						UpdateCustomerInfor.setString(2, AccountKey_update);
//						UpdateCustomerInfor.setString(3, PhoneNumber_update);
//						UpdateCustomerInfor.setString(4, PhoneType_update);
//						UpdateCustomerInfor.setString(5, PolicyProductNo_update);
//						UpdateCustomerInfor.setDate(6, new java.sql.Date(new Date().getTime()));
//						UpdateCustomerInfor.setString(7, CustomerNumber);
//						UpdateCustomerInfor.setString(8, "U");
//
//						int flag = UpdateCustomerInfor.executeUpdate();
//						if (flag > 0) {
//							Logging = new Audit();
//							//Logging.AddLogging(login_id, "UPDATE Customer-Info", "Update Username & Postname from '" + UserName + "' to '" + UserName_update  +"'" );
//							result = "Done";
//						} else {
//							result = "No";
//						}
//					} else {
//						insertCustomerInfo = conn.con.prepareStatement("insert into CUSTOMER_ADDING_VALUES (Customer_key , Customer_type , account_key , phone_no,phone_type , policy_product_no , last_updated_date, authorization_status) values(?,?,?,?,?,?,?,?)");
//						insertCustomerInfo.setString(1, CustomerNumber);
//						insertCustomerInfo.setString(2, CustomerType_update);
//						insertCustomerInfo.setString(3, AccountKey_update);
//						insertCustomerInfo.setString(4, PhoneNumber_update);
//						insertCustomerInfo.setString(5, PhoneType_update);
//						insertCustomerInfo.setString(6, PolicyProductNo_update);
//						java.sql.Date dateNow = new java.sql.Date(new Date().getTime());
//						insertCustomerInfo.setDate(7, dateNow);
//						insertCustomerInfo.setString(8, "U");
//						int flag = insertCustomerInfo.executeUpdate();
//						if (flag > 0) {
//							Logging = new Audit();
//							//Logging.AddLogging(login_id, "UPDATE Customer-Info", "Update Username & Postname from '" + UserName + "' to '" + UserName_update  +"'" );
//							result = "Done";
//						} else {
//							result = "No";
//						}
//					}
//
//					conn.CloseDBConn();
//
//				}
//				return result;
//
//			}
//
//		}

        if (!Session.isEmpty() && !login_id.isEmpty()) {
            //Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            //if (auth != null && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_USR"))) {
            try {
                //PreparedStatement UpdateCustomerInfor = null;
                //String query = "select CUSTOMER_TYPE , ACCOUNT_KEY ,PHONE_NO ,PHONE_TYPE ,POLICY_PRODUCT_NO ,LAST_UPDATED_DATE , AUTHORIZATION_STATUS  from CUSTOMER_ADDING_VALUES where CUSTOMER_KEY = '" + CustomerNumber + "'";
                query = "CUSTOMER_KEY = '" + CustomerNumber + "'";
                //String custNum = ""CustomerNumber;
                ResultSet rs = null;
                //PreparedStatement insertCustomerInfo = null;
                conn = new DBConnection();
                conn.OpenDBConnection();
                //Statement stmt = conn.con.createStatement();
                //rs = stmt.executeQuery(query);
                rs = conn.SelectStatement("CUSTOMER_ADDING_VALUES", query);
                if (rs.next()) {

                    PreparedStatement UpdateCustomerInfor = null;
                    UpdateCustomerInfor = conn.con.prepareStatement("update CUSTOMER_ADDING_VALUES set  CUSTOMER_TYPE = ? , ACCOUNT_KEY = ? , PHONE_NO = ? , PHONE_TYPE = ? , POLICY_PRODUCT_NO = ? , LAST_UPDATED_DATE = ? , AUTHORIZATION_STATUS = ? where CUSTOMER_KEY = ?");
                    UpdateCustomerInfor.setString(1, CustomerType_update);
                    UpdateCustomerInfor.setString(2, AccountKey_update);
                    UpdateCustomerInfor.setString(3, PhoneNumber_update);
                    UpdateCustomerInfor.setString(4, PhoneType_update);
                    UpdateCustomerInfor.setString(5, PolicyProductNo_update);
                    UpdateCustomerInfor.setDate(6, new java.sql.Date(new Date().getTime()));
                    UpdateCustomerInfor.setString(8, CustomerNumber);
                    UpdateCustomerInfor.setString(7, "U");

                    int flag = UpdateCustomerInfor.executeUpdate();
                    //boolean flag1 = conn.UpdateStatement("CUSTOMER_ADDING_VALUES",UpdateCustomerInfor,query);
                    if (flag > 0) {
                        // Logging = new Audit();
                        //Logging.AddLogging(login_id, "UPDATE Customer-Info", "Update Username & Postname from '" + UserName + "' to '" + UserName_update  +"'" );
                        result = "Done";
                    } else {
                        result = "No";
                    }
                } else {
                    PreparedStatement insertCustomerInfo = null;
                    insertCustomerInfo = conn.con.prepareStatement("insert into CUSTOMER_ADDING_VALUES (Customer_key , Customer_type , account_key , phone_no,phone_type , policy_product_no , last_updated_date, authorization_status) values(?,?,?,?,?,?,?,?)");
                    insertCustomerInfo.setString(1, CustomerNumber);
                    insertCustomerInfo.setString(2, CustomerType_update);
                    insertCustomerInfo.setString(3, AccountKey_update);
                    insertCustomerInfo.setString(4, PhoneNumber_update);
                    insertCustomerInfo.setString(5, PhoneType_update);
                    insertCustomerInfo.setString(6, PolicyProductNo_update);
                    java.sql.Date dateNow = new java.sql.Date(new Date().getTime());
                    insertCustomerInfo.setDate(7, dateNow);
                    insertCustomerInfo.setString(8, "U");
                    int flag = insertCustomerInfo.executeUpdate();
                    if (flag > 0) {
                        // Logging = new Audit();
                        //Logging.AddLogging(login_id, "UPDATE Customer-Info", "Update Username & Postname from '" + UserName + "' to '" + UserName_update  +"'" );
                        result = "Done";
                    } else {
                        result = "No";
                    }
                }
                //stmt.close();
                rs.close();
                conn.CloseDBConn();


//					}else {
//						if (rs.next()) {
//							UpdateCustomerInfor = conn.con.prepareStatement("update CUSTOMER_ADDING_VALUES set  CUSTOMER_TYPE = ? , ACCOUNT_KEY = ? , PHONE_NO = ? , PHONE_TYPE = ? , POLICY_PRODUCT_NO = ? , LAST_UPDATED_DATE = ? , AUTHORIZATION_STATUS = ? where CUSTOMER_KEY = ?");
//							UpdateCustomerInfor.setString(1, CustomerType_update);
//							UpdateCustomerInfor.setString(2, AccountKey_update);
//							UpdateCustomerInfor.setString(3, PhoneNumber_update);
//							UpdateCustomerInfor.setString(4, PhoneType_update);
//							UpdateCustomerInfor.setString(5, PolicyProductNo_update);
//							UpdateCustomerInfor.setDate(6, new java.sql.Date(new Date().getTime()));
//							UpdateCustomerInfor.setString(7, CustomerNumber);
//							UpdateCustomerInfor.setString(8, "A");
//
//							int flag = UpdateCustomerInfor.executeUpdate();
//							if (flag > 0) {
//								Logging = new Audit();
//								//Logging.AddLogging(login_id, "UPDATE Customer-Info", "Update Username & Postname from '" + UserName + "' to '" + UserName_update  +"'" );
//								result = "Done";
//							} else {
//								result = "No";
//							}
//							conn.CloseDBConn();
//
//						}
//					}

                //return result;
            } catch (
                    Exception e) {
                result = "Error";
                conn.CloseDBConn();
                log.log(Level.ERROR, " (UpdateCustomerInfo) ::" + e.getMessage());
                return result;
            }


        }
        //}
        return result;
    }
}






