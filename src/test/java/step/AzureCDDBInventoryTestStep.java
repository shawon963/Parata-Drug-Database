package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class AzureCDDBInventoryTestStep {
    private genericFactory gen = new genericFactory();

    @And("user should verify Inventory table column between SP_Pull_Inventory procedure column in PDDB_LP database within azure server and {string} table column in DrugDB database within CDDB server")
    public void userShouldVerifyInventoryTableColumnBetweenSP_Pull_InventoryProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(String tableName)  throws SQLException{
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify Inventory table data count between SP_Pull_Inventory procedure data in PDDB_LP database within azure server and {string} table data in DrugDB database within CDDB server")
    public void userShouldVerifyInventoryTableDataCountBetweenSP_Pull_InventoryProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException{
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
