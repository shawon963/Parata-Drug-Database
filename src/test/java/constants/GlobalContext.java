package constants;

import java.sql.*;
import java.util.ArrayList;

public class GlobalContext {
    //Database Status
    public static Connection sqlServerConnection;
    public static Connection pgAdminConnection;
    public static String connectionStatus;
    public static String user = "stratusapps@pgdb-dcm-001";
    public static String password = "ceilingBoat36!";

    //Other Variable
    public static int datacountFromTable = 0;
}