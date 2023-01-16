package step;

import GenericInfo.genericFactory;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.sql.SQLException;

public class DatabaseProcessTest {
    private genericFactory gen = new genericFactory();

    @When("Database connection for {string} from on-prem server")
    public void databaseConnectionFromOnPremLanServer(String databaseName) {
        boolean isActive = gen.databaseConnectionSetupWithSqlServer(databaseName);
        Assert.assertTrue("Connection failed For PDDB from on prem lan server", isActive);
    }

    @Then("Database connection for {string} from azure server")
    public void databaseConnectionFromAzureServer(String databaseName) {
        boolean isActive = gen.databaseConnectionSetupWithAzureServer(databaseName);
        Assert.assertTrue("Connection Failed From Azure Server", isActive);
    }

    @And("user count data from {string} table")
    public void userCountDataFromTable(String tableName) throws SQLException {
        boolean countedData = gen.countDataFromTable(tableName);
        Assert.assertTrue(countedData);
    }

    @And("user should check {string} table")
    public void userShouldCheckTable(String tableName) throws SQLException {
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
        boolean isColumnExist = gen.getColumnFromProcedureWithinAzureServer(procedureName);
        Assert.assertTrue(isColumnExist);
    }

    @And("user get data count from {string} procedure in PDDB_LP database within azure server")
    public void userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(String procedureName) throws SQLException {
        boolean isDataExist = gen.getDataFromProcedureWithinAzureServer(procedureName);
        Assert.assertTrue(isDataExist);
    }

    @Then("Database connection for {string} from CDDB server")
    public void connectionSetupWithDatabaseFromCDDBServer(String databaseName) throws SQLException{
        boolean isActive = gen.databaseConnectionSetupWithCDDBServer(databaseName);
        Assert.assertTrue("Connection failed For DrugDB from CDDB server", isActive);
    }

    @And("user should check {string} table from DrugDB database in CDDB server")
    public void userShouldCheckTableFromDrugDBDatabaseInCDDBServer(String tableName) throws SQLException{
        boolean isTableExist = gen.isTableExistInDrugDBFromCDDBServer(tableName);
        Assert.assertTrue(isTableExist);
    }

    @And("user get column from {string} table with PDDB database within on prem lan server")
    public void userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(String tableName) throws SQLException{
        boolean isColumnExist = gen.getColumnFromTable(tableName);
        Assert.assertTrue(isColumnExist);
    }

    @And("user count data from {string} table with PDDB database within on prem lan server")
    public void userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(String tableName) throws SQLException {
        boolean isDataExist = gen.countDataFromTable(tableName);
        Assert.assertTrue(isDataExist);
    }

    @When("Database connections are established")
    public void databaseConnectionsAreEstablished() {
        boolean isDatabaseConnectionExist = false;
        if(GlobalContext.databaseConnectionForOnPrem == GlobalContext.databaseConnectionForAzure){
            isDatabaseConnectionExist = true;
        }
        else if(GlobalContext.databaseConnectionForCDDB == GlobalContext.databaseConnectionForAzure){
            isDatabaseConnectionExist = true;
        }
        Assert.assertTrue(isDatabaseConnectionExist);
    }
}
