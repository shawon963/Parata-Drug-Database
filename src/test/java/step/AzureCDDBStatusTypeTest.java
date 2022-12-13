package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class AzureCDDBStatusTypeTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify StatusType table column between SP_Pull_StatusType procedure column in PDDB_LP database within azure server and {string} table column in DrugDB database within CDDB server")
    public void userShouldVerifyStatusTypeTableColumnBetweenSP_Pull_StatusTypeProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException  {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify StatusType table data count between SP_Pull_StatusType procedure data in PDDB_LP database within azure server and {string} table data in DrugDB database within CDDB server")
    public void userShouldVerifyStatusTypeTableDataCountBetweenSP_Pull_StatusTypeProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException {
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
