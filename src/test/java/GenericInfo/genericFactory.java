package GenericInfo;
import constants.DbConnection;
import constants.GlobalContext;
import java.sql.*;
import java.util.ArrayList;

public class genericFactory {
    private ArrayList<String[]> statusDetails = new ArrayList<>();

    public boolean databaseConnectionSetupWithSqlServer(String databaseName){
        boolean isConnected = false;
        String connectionUrl = DbConnection.connectionUrl +databaseName;
        try {
            // Load SQL Server JDBC driver and establish connection.
            GlobalContext.sqlServerConnection = DriverManager.getConnection(connectionUrl);
            GlobalContext.connectionStatus = "Success";
            isConnected = true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            GlobalContext.connectionStatus = "Error";
        }
        return isConnected;
    }

    public boolean databaseConnectionSetupWithPGAdmin(String databaseName){
        boolean isConnected = false;
        String connectionUrl = DbConnection.PgAdminConnectionUrl+databaseName;
        try {
            // Load PostGreSQL Server JDBC driver and establish connection.
            GlobalContext.pgAdminConnection = DriverManager.getConnection(connectionUrl, GlobalContext.user, GlobalContext.password);
            GlobalContext.connectionStatus = "Success";
            isConnected = true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            GlobalContext.connectionStatus = "Error";
        }
        return isConnected;
    }

    public boolean isTableExistInDrugDB(String table) throws SQLException {
        boolean isExists = false;
        DatabaseMetaData dbm = GlobalContext.pgAdminConnection.getMetaData();
        ResultSet tables = dbm.getTables(null, null, table, null);
        if (tables.next()) {
            isExists = true;
        }
        return isExists;
    }
    public int countDataFromTable(String tableName) throws SQLException {
        String sql = "select count(*) from "+tableName;
        System.out.println(sql);
        PreparedStatement stmt = GlobalContext.sqlServerConnection.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery();
        rs.next();
        GlobalContext.datacountFromTable = rs.getInt(1);
        int count = rs.getInt(1);
        return count;
    }

    public boolean checkTableDataCountBetweenPDDB_LPAndCDDB(String tableName) throws SQLException{
        boolean dataEvaluate = false;
        String sql = "select count(*) from "+'"'+tableName+'"';
        PreparedStatement stmt = GlobalContext.pgAdminConnection.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery();
        rs.next();
        int count = rs.getInt(1);
        if(count == GlobalContext.datacountFromTable ){
            dataEvaluate = true;
        }
        return dataEvaluate;
    }
}
