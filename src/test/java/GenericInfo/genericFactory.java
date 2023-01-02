package GenericInfo;
import constants.DbConnection;
import constants.GlobalContext;
import java.sql.*;
import java.util.ArrayList;

public class genericFactory {
    public boolean databaseConnectionSetupWithSqlServer(String databaseName){
        boolean isConnected = false;
        String connectionUrl = DbConnection.onpremconnectionUrl +databaseName;
        try {
            GlobalContext.onPremServerConnection = DriverManager.getConnection(connectionUrl);
            GlobalContext.connectionStatus = "Success";
            GlobalContext.databaseConnectionForOnPrem = true;
            isConnected = true;
        } catch (SQLException e) {
            GlobalContext.connectionStatus = "Error";
        }
        return isConnected;
    }

    public boolean databaseConnectionSetupWithAzureServer(String databaseName) {
        boolean isConnected = false;
        String connectionUrl = DbConnection.azureconnectionUrl+databaseName;
        try {
            // Load SQL Server With JDBC driver and establish connection.
            GlobalContext.azureServerConnection = DriverManager.getConnection(connectionUrl);
            GlobalContext.connectionStatus = "Success";
            GlobalContext.databaseConnectionForAzure = true;
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

    public boolean isTableExistInPDDB_LPInAzureServer(String tableName) throws SQLException{
        boolean isExists = false;
        DatabaseMetaData dbm = GlobalContext.azureServerConnection.getMetaData();
        ResultSet tables = dbm.getTables(null, null, tableName, null);
        if (tables.next()) {
            isExists = true;
        }
        return isExists;
    }

    public boolean countDataFromTable(String tableName) throws SQLException {
        boolean isDataExist = false;
        String sql = "select count(*) from "+tableName;
        System.out.println(sql);
        PreparedStatement stmt = GlobalContext.onPremServerConnection.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery();
        rs.next();
        GlobalContext.datacountFromOnPremServer = rs.getInt(1);
        int count = rs.getInt(1);
        if(count>0){
            isDataExist = true;
        }
        return isDataExist;
    }

    public boolean checkTableDataCountBetweenPDDB_LPAndCDDB(String tableName) throws SQLException{
        boolean dataEvaluate = false;
        String sql = "select count(*) from "+'"'+tableName+'"';
        PreparedStatement stmt = GlobalContext.pgAdminConnection.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery();
        rs.next();
        int count = rs.getInt(1);
        if(count == GlobalContext.datacountFromOnPremServer ){
            dataEvaluate = true;
        }
        return dataEvaluate;
    }

    public boolean getColumnFromTable(String tableName) throws SQLException{
        boolean columnIsExist = false;
        String sql = "select * from "+'"'+tableName+'"';
        PreparedStatement stmt = GlobalContext.onPremServerConnection.prepareStatement(sql);
        ResultSetMetaData rmd = stmt.getMetaData();
        for(int i =1; i <= rmd.getColumnCount(); i++){
           GlobalContext.storeColumnFromTableWithinPDDBDatabaseAndOnPremServer.add(rmd.getColumnName(i));
        }
        if(GlobalContext.storeColumnFromTableWithinPDDBDatabaseAndOnPremServer.stream().count()>0){
            columnIsExist = true;
        }
        return columnIsExist;
    }

    public boolean checkColumnInTableBetweenPDDBAndPDDB_LPDatabase(String tableName) throws SQLException {
        boolean isColumnExist = getColumnFromTable(tableName);
        boolean columnEvaluate = false;
        if(GlobalContext.storeColumnFromTableWithinPDDBDatabaseAndOnPremServer.stream().count()>0){
            String sql = "select * from "+'"'+tableName+'"';
            PreparedStatement stmt = GlobalContext.azureServerConnection.prepareStatement(sql);
            ResultSetMetaData rmd = stmt.getMetaData();
            for(int i =1; i <= rmd.getColumnCount(); i++){
                GlobalContext.storeColumnFromTableWithinPDDB_LPDatabaseAndAzureServer.add(rmd.getColumnName(i));
            }
            if(GlobalContext.storeColumnFromTableWithinPDDB_LPDatabaseAndAzureServer.equals(GlobalContext.storeColumnFromTableWithinPDDBDatabaseAndOnPremServer)){
                columnEvaluate = true;
            }
        }
        else{
            columnEvaluate = false;
        }

        return columnEvaluate;
    }


    public boolean checkDataCountInTableBetweenPDDBAndPDDB_LP(String tableName) throws SQLException {
        boolean dataCountEvaluate = false;
        boolean isDataExist = countDataFromTable(tableName);
        if(isDataExist){
            String sql = "select count(*) from "+'"'+tableName+'"';
            PreparedStatement stmt = GlobalContext.azureServerConnection.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();
            rs.next();
            int count = rs.getInt(1);
            GlobalContext.datacountFromAzureServer = count;
            if(count == GlobalContext.datacountFromOnPremServer ){
                dataCountEvaluate = true;
            }
        }
        else {
            dataCountEvaluate = false;
        }

        return dataCountEvaluate;
    }

    public boolean isProcedureExistFromPDDB_LPDatabaseWithinAzureServer(String procedureName) throws SQLException {
        boolean isExists = false;
        DatabaseMetaData dbm = GlobalContext.azureServerConnection.getMetaData();
        ResultSet procedures = dbm.getProcedures(null, null, procedureName);
        if (procedures.next()) {
            isExists = true;
        }
        return isExists;
    }

    public boolean getColumnFromPDDB_LPDatabaseWithinAzureServer(String procedureName) throws SQLException {
        boolean columnIsExist = false;
        PreparedStatement stmt = GlobalContext.azureServerConnection.prepareStatement(procedureName);
        ResultSet rs = stmt.executeQuery();
        ResultSetMetaData rmd = rs.getMetaData();
        for(int i =1; i <= rmd.getColumnCount(); i++){
            GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer.add(rmd.getColumnName(i));
        }
        if(GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer.stream().count()>0){
            columnIsExist = true;
        }
        return columnIsExist;
    }

    public boolean getDataFromProcedurePDDB_LPDatabaseWithinAzureServer(String procedureName) throws SQLException {
        boolean columnIsExist = false;
        PreparedStatement stmt = GlobalContext.azureServerConnection.prepareStatement(procedureName);
        ResultSet rs = stmt.executeQuery();
        ArrayList<Integer> rows = new ArrayList<Integer>();
        while(rs.next()) {
            rows.add(rs.getRow());
        }
        GlobalContext.datacountFromAzureServer = rows.size();

        if( GlobalContext.datacountFromAzureServer>0){
            columnIsExist = true;
        }
        return columnIsExist;
    }

    public boolean databaseConnectionSetupWithCDDBServer(String databaseName) throws SQLException{
        boolean isConnected = false;
        String connectionUrl = DbConnection.PgAdminConnectionUrl+databaseName;
        try {
            // Load PostGreSQL Server JDBC driver and establish connection.
            GlobalContext.pgAdminConnection = DriverManager.getConnection(connectionUrl, GlobalContext.user, GlobalContext.password);
            GlobalContext.connectionStatus = "Success";
            GlobalContext.databaseConnectionForCDDB = true;
            isConnected = true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            GlobalContext.connectionStatus = "Error";
        }
        return isConnected;
    }

    public boolean isTableExistInDrugDBFromCDDBServer(String tableName) throws SQLException{
        boolean isExists = false;
        DatabaseMetaData dbm = GlobalContext.pgAdminConnection.getMetaData();
        ResultSet tables = dbm.getTables(null, null, tableName, null);
        if (tables.next()) {
            isExists = true;
        }
        return isExists;
    }

    public boolean checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(String procedureName, String tableName) throws SQLException{
        boolean columnEvaluation = false;
        boolean isColumnExist = getColumnFromPDDB_LPDatabaseWithinAzureServer(procedureName);
        if(isColumnExist){
            String sql = "select * from "+'"'+tableName+'"';
            PreparedStatement stmt = GlobalContext.pgAdminConnection.prepareStatement(sql);
            ResultSetMetaData rmd = stmt.getMetaData();
            for(int i =1; i <= rmd.getColumnCount(); i++){
                GlobalContext.storeColumnFromTableWithinDrugDBDatabaseAndCDDBServer.add(rmd.getColumnName(i));
            }
            if(GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer.stream().count()>0){
                columnEvaluation = true;
            }
        }
        else{
            columnEvaluation = false;
        }

        return columnEvaluation;
    }

    public boolean checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(String procedureName, String tableName) throws SQLException{
        boolean dataEvaluate = false;
        boolean isDataExist = getDataFromProcedurePDDB_LPDatabaseWithinAzureServer(procedureName);
        if(isDataExist){
            String sql = "select count(*) from "+'"'+tableName+'"';
            PreparedStatement stmt = GlobalContext.pgAdminConnection.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();
            rs.next();
            int count = rs.getInt(1);
            GlobalContext.datacountFromCDDBServer = count;
            if(count == GlobalContext.datacountFromAzureServer ){
                dataEvaluate = true;
            }
        }
        else {
            dataEvaluate = false;
        }

        return dataEvaluate;
    }
}
