package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.sql.SQLException;

public class DatabaseProcessTest {
    private genericFactory gen = new genericFactory();

    @When("connection setup with {string} database from on prem lan server")
    public void connectionSetupWithPDDBDatabaseFromOnPremLanServer(String databaseName) {
        boolean isActive = gen.databaseConnectionSetupWithSqlServer(databaseName);
        Assert.assertTrue("Connection failed For PDDB from on prem lan server", isActive);
    }

    @Then("connection setup with {string} database from azure server")
    public void connectionSetupWithPDDB_LPDatabaseFromAzureServer(String databaseName) {
        boolean isActive = gen.databaseConnectionSetupWithAzureServer(databaseName);
        Assert.assertTrue("Connection Failed From Azure Server", isActive);
    }

    @And("user count data from {string} table")
    public void userCountDataFromInventoryTable(String tableName) throws SQLException {
        boolean countedData = gen.countDataFromTable(tableName);
        Assert.assertTrue(countedData);
    }

    @And("user should check {string} table")
    public void userShouldCheckInventoryTable(String tableName) throws SQLException {
        boolean isTableExist = gen.isTableExistInDrugDB(tableName);
        Assert.assertTrue(isTableExist);
    }

    @And("user should check {string} table from PDDB_LP database in azure server")
    public void userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(String tableName) throws SQLException {
        boolean isTableExist = gen.isTableExistInPDDB_LPInAzureServer(tableName);
        Assert.assertTrue(isTableExist);
    }

    @And("user should check {string} procedure from PDDB_LP database in azure server")
    public void userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(String procedureName) throws SQLException {
        boolean isProcedureExist = gen.isProcedureExistFromPDDB_LPDatabaseWithinAzureServer(procedureName);
        Assert.assertTrue(isProcedureExist);
    }

    @And("user get column from {string} procedure in PDDB_LP database within azure server")
    public void userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(String procedureName) throws SQLException{
        boolean isColumnExist = gen.getColumnFromPDDB_LPDatabaseWithinAzureServer(procedureName);
        Assert.assertTrue(isColumnExist);
    }

    @And("user get data count from {string} procedure in PDDB_LP database within azure server")
    public void userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(String procedureName) throws SQLException {
        boolean isDataExist = gen.getDataFromProcedurePDDB_LPDatabaseWithinAzureServer(procedureName);
        Assert.assertTrue(isDataExist);
    }

    @Then("connection setup with {string} database from CDDB server")
    public void connectionSetupWithDatabaseFromCDDBServer(String databaseName) throws SQLException{
        boolean isActive = gen.databaseConnectionSetupWithCDDBServer(databaseName);
        Assert.assertTrue("Connection failed For DrugDB from CDDB server", isActive);
    }

    @And("user should check {string} table from DrugDB database in CDDB server")
    public void userShouldCheckTableFromDrugDBDatabaseInCDDBServer(String tableName) throws SQLException{
        boolean isTableExist = gen.isTableExistInDrugDBFromCDDBServer(tableName);
        Assert.assertTrue(isTableExist);
    }

    @And("user get column from {string} table from PDDB database within on prem lan server")
    public void userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(String tableName) throws SQLException{
        boolean isColumnExist = gen.getColumnFromTable(tableName);
        Assert.assertTrue(isColumnExist);
    }

    @And("user count data from {string} table from PDDB database within on prem lan server")
    public void userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(String tableName) throws SQLException {
        boolean isDataExist = gen.countDataFromTable(tableName);
        Assert.assertTrue(isDataExist);
    }
}
