package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class OnPremAzureStatusTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify Status table column between Status table column in PDDB database within on prem server and {string} table column in PDDB_LP database within Azure server")
    public void userShouldVerifyStatusTableColumnBetweenStatusTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(String tableName)  throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableBetweenPDDBAndPDDB_LPDatabase(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify Status table data count between Status table data in PDDB_LP database within on prem server and {string} table data in PDDB_LP database within azure server")
    public void userShouldVerifyStatusTableDataCountBetweenStatusTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(String tableName)  throws SQLException{
        boolean dataCountEvaluation = gen.checkDataCountInTableBetweenPDDBAndPDDB_LP(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
