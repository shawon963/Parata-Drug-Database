package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class OnPremAzureMeasurementsTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify Measurements table column between Measurements table column in PDDB database within on prem server and {string} table column in PDDB_LP database within Azure server")
    public void userShouldVerifyMeasurementsTableColumnBetweenMeasurementsTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(String tableName) throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableBetweenPDDBAndPDDB_LPDatabase(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify Measurements table data count between Measurements table data in PDDB_LP database within on prem server and {string} table data in PDDB_LP database within azure server")
    public void userShouldVerifyMeasurementsTableDataCountBetweenMeasurementsTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(String tableName) throws SQLException {
        boolean dataCountEvaluation = gen.checkDataCountInTableBetweenPDDBAndPDDB_LP(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
