package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class AzureCDDBDrugStatusTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify DrugStatus table column between SP_Pull_Status procedure column in PDDB_LP database within azure server and {string} table column in DrugDB database within CDDB server")
    public void userShouldVerifyDrugStatusTableColumnBetweenSP_Pull_StatusProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify DrugStatus table data count between SP_Pull_Status procedure data in PDDB_LP database within azure server and {string} table data in DrugDB database within CDDB server")
    public void userShouldVerifyDrugStatusTableDataCountBetweenSP_Pull_StatusProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException{
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
