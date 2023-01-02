package constants;

import java.sql.*;
import java.util.ArrayList;

public class GlobalContext {
    //Database Status
    public static Connection onPremServerConnection;
    public static Connection azureServerConnection;
    public static Connection pgAdminConnection;
    public static String connectionStatus;
    public static String user = "stratusapps@pgdb-dcm-001";
    public static String password = "ceilingBoat36!";

    //Other Variable
    public static int datacountFromOnPremServer = 0;
    public static int datacountFromAzureServer = 0;
    public static int datacountFromCDDBServer = 0;

    //Table Column
    public static ArrayList<String> storeColumnFromTableWithinPDDB_LPDatabaseAndAzureServer= new ArrayList<String>();
    public static ArrayList<String> storeColumnFromTableWithinPDDBDatabaseAndOnPremServer= new ArrayList<String>();

    //Procedure Column
    public static ArrayList<String> storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer= new ArrayList<String>();
    public static ArrayList<String> storeColumnFromTableWithinDrugDBDatabaseAndCDDBServer= new ArrayList<String>();

    //Check Database connection
    public static boolean databaseConnectionForOnPrem = false;
    public static boolean databaseConnectionForAzure = false;
    public static boolean databaseConnectionForCDDB = false;
}
