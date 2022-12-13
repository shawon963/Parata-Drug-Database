package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class AzureCDDBDrugNonCountReasonTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify DrugNonCountReason table column between SP_Pull_DrugNonCountReason procedure column in PDDB_LP database within azure server and {string} table column in DrugDB database within CDDB server")
    public void userShouldVerifyDrugNonCountReasonTableColumnBetweenSP_Pull_DrugNonCountReasonProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException  {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify DrugNonCountReason table data count between SP_Pull_DrugNonCountReason procedure data in PDDB_LP database within azure server and {string} table data in DrugDB database within CDDB server")
    public void userShouldVerifyDrugNonCountReasonTableDataCountBetweenSP_Pull_DrugNonCountReasonProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException  {
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
