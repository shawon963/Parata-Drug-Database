package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.sql.SQLException;

public class DatabaseProcessTest {
    private genericFactory gen = new genericFactory();

    @When("connection setup with {string} database")
    public void connectionSetupWithPDDB_LPDatabase(String databaseName) {
        boolean isActive = gen.databaseConnectionSetupWithSqlServer(databaseName);
        Assert.assertTrue("Sql Server Connection Failed For PDDB_LP", isActive);
    }

    @Then("connection setup with CDDB {string} database")
    public void connectionSetupWithCDDBDrugDBDatabase(String databaseName) {
        boolean isActive = gen.databaseConnectionSetupWithPGAdmin(databaseName);
        Assert.assertTrue("PGAdmin Connection Failed For BacktalkDB", isActive);
    }

    @And("user count data from {string} table")
    public void userCountDataFromInventoryTable(String tableName) throws SQLException {
        int countedData = gen.countDataFromTable(tableName);
        Assert.assertTrue(countedData>0);
    }

    @And("user should check {string} table")
    public void userShouldCheckInventoryTable(String tableName) throws SQLException {
        boolean isTableExist = gen.isTableExistInDrugDB(tableName);
        Assert.assertTrue(isTableExist);
    }
}
