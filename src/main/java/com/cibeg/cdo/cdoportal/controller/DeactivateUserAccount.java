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
public class DeactivateUserAccount {

    private DBConnection conn;
    protected Connection con = null;
    private Audit Logging;


    static Logger log = Logger.getLogger(DeactivateUserAccount.class);
    //@ModelAttribute("LoginSession") LoginSession login

    @SuppressWarnings("null")
    @RequestMapping(value = "/DeactivateUserAccount", method = RequestMethod.POST)
    public String DeactivateUserAccount(@RequestParam(value = "Account_Number") String Account_Number, @RequestParam(value = "Customer_number") String Customer_number, HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Failed";

        try {
            if (!Session.isEmpty() && !login_id.isEmpty()) {

                String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 2 and BOSCUSTOMERID = '" + Customer_number + "'";
                String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 2 and HOSTACCOUNTID = '" + Account_Number + "'";
                String BWCUSTOMERID = "";
                String BWACCOUNTID = "";
                ResultSet BWCUSTOMERID_rs = null;
                ResultSet BWACCOUNTID_rs = null;
                PreparedStatement DeActUserAcc = null;
                conn = new DBConnection();
                conn.OpenDBConnection();

                Statement BWCUSTOMERID_stmt = conn.con.createStatement();
                Statement BWACCOUNTID_stmt = conn.con.createStatement();

                BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
                while (BWCUSTOMERID_rs.next()) {

                    BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
                }

                BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
                while (BWACCOUNTID_rs.next()) {

                    BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
                }
                if (BWCUSTOMERID.equals("") || BWACCOUNTID.equals("")) {
                    return result;
                }


                DeActUserAcc = conn.con.prepareStatement("update hostaccount set visibletocustomer = ? , isaccountactive = ? where BWCUSTOMERID = ? and BWACCOUNTID = ? ");
                DeActUserAcc.setInt(1, 0);
                DeActUserAcc.setInt(2, 0);
                DeActUserAcc.setString(3, BWCUSTOMERID);
                DeActUserAcc.setString(4, BWACCOUNTID);
                int flag = DeActUserAcc.executeUpdate();
                if (flag > 0) {
                    Logging = new Audit();
                    Logging.AddLogging(login_id, "ACCOUNTS DEACTIVATE", "Deactivate Customer ID '" + BWCUSTOMERID + "' & Account ID '" + BWACCOUNTID + "'");

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
            log.log(Level.ERROR, " (DeactivateUserAccount) ::" + e.getMessage());
            return result;

        }


    }


    @RequestMapping(value = "/ReactivateUserAccount", method = RequestMethod.POST)
    public String ReactivateUserAccount(@RequestParam(value = "Account_Number") String Account_Number, @RequestParam(value = "Customer_number") String Customer_number, HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Failed";

        try {
            if (!Session.isEmpty() && !login_id.isEmpty()) {

                String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 2 and BOSCUSTOMERID = '" + Customer_number + "'";
                String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 2 and HOSTACCOUNTID = '" + Account_Number + "'";
                String BWCUSTOMERID = "";
                String BWACCOUNTID = "";
                ResultSet BWCUSTOMERID_rs = null;
                ResultSet BWACCOUNTID_rs = null;
                PreparedStatement DeActUserAcc = null;
                conn = new DBConnection();
                conn.OpenDBConnection();

                Statement BWCUSTOMERID_stmt = conn.con.createStatement();
                Statement BWACCOUNTID_stmt = conn.con.createStatement();

                BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
                while (BWCUSTOMERID_rs.next()) {

                    BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
                }

                BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
                while (BWACCOUNTID_rs.next()) {

                    BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
                }
                if (BWCUSTOMERID.equals("") || BWACCOUNTID.equals("")) {
                    return result;
                }


                DeActUserAcc = conn.con.prepareStatement("update hostaccount set visibletocustomer = ? , isaccountactive = ? where BWCUSTOMERID = ? and BWACCOUNTID = ? ");
                DeActUserAcc.setInt(1, 1);
                DeActUserAcc.setInt(2, 1);
                DeActUserAcc.setString(3, BWCUSTOMERID);
                DeActUserAcc.setString(4, BWACCOUNTID);
                int flag = DeActUserAcc.executeUpdate();
                if (flag > 0) {
                    Logging = new Audit();
                    Logging.AddLogging(login_id, "ACCOUNTS DEACTIVATE", "Reactivate Customer ID '" + BWCUSTOMERID + "' & Account ID '" + BWACCOUNTID + "'");

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
            log.log(Level.ERROR, " (DeactivateUserAccount) ::" + e.getMessage());
            return result;

        }


    }


    @RequestMapping(value = "/ValidateACCReAct", method = RequestMethod.POST)
    public String ValidateCCReAct(@RequestParam(value = "Account_Number") String Account_Number, @RequestParam(value = "Customer_number") String Customer_number, HttpServletRequest request) {

        String Session = (String) request.getSession().getAttribute("SessionID");
        String login_id = (String) request.getSession().getAttribute("username");
        // String req_id = (String) request.getSession().getAttribute("ReqID");
        String result = "Not Found";

        try {
            if (!Session.isEmpty() && !login_id.isEmpty()) {


            } else {
                return result;

            }

            String BWCUSTOMERID_query = "select BWCUSTOMERID from BOSCUSTOMERMAPPING where bosid = 2 and BOSCUSTOMERID = '" + Customer_number + "'";
            String BWACCOUNTID_query = "select BWACCOUNTID from BOSHOSTACCOUNTMAPPING where bosid = 2 and HOSTACCOUNTID = '" + Account_Number + "'";
            String BWCUSTOMERID = "";
            String BWACCOUNTID = "";
            ResultSet BWCUSTOMERID_rs = null;
            ResultSet BWACCOUNTID_rs = null;

            ResultSet rs = null;
            conn = new DBConnection();
            conn.OpenDBConnection();


            Statement BWCUSTOMERID_stmt = conn.con.createStatement();
            Statement BWACCOUNTID_stmt = conn.con.createStatement();

            BWCUSTOMERID_rs = BWCUSTOMERID_stmt.executeQuery(BWCUSTOMERID_query);
            while (BWCUSTOMERID_rs.next()) {

                BWCUSTOMERID = BWCUSTOMERID_rs.getString("BWCUSTOMERID");
            }

            BWACCOUNTID_rs = BWACCOUNTID_stmt.executeQuery(BWACCOUNTID_query);
            while (BWACCOUNTID_rs.next()) {

                BWACCOUNTID = BWACCOUNTID_rs.getString("BWACCOUNTID");
            }
            if (BWCUSTOMERID.equals("") || BWACCOUNTID.equals("")) {
                return result;
            }


            String query = "select visibletocustomer , isaccountactive from hostaccount where BWCUSTOMERID = '" + BWCUSTOMERID + "' and BWACCOUNTID = '" + BWACCOUNTID + "'";
            Statement stmt = conn.con.createStatement();
            rs = stmt.executeQuery(query);
            if (rs.next()) {

                result = rs.getString("visibletocustomer") + "," + rs.getString("isaccountactive");
            }

            conn.CloseDBConn();
            return result;


        } catch (Exception e) {
            result = "Error";
            conn.CloseDBConn();
            log.log(Level.ERROR, " (ACCReAct) ::" + e.getMessage());
            return result;

        }


    }


}
