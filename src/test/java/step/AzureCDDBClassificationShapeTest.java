package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class AzureCDDBClassificationShapeTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify ClassificationShape table column between SP_Pull_ClassificationShape procedure column in PDDB_LP database within azure server and {string} table column in DrugDB database within CDDB server")
    public void userShouldVerifyClassificationShapeTableColumnBetweenSP_Pull_ClassificationShapeProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(columnEvaluation);
    }

    @And("user should verify ClassificationShape table data count between SP_Pull_ClassificationShape procedure data in PDDB_LP database within azure server and {string} table data in DrugDB database within CDDB server")
    public void userShouldVerifyClassificationShapeTableDataCountBetweenSP_Pull_ClassificationShapeProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(String tableName) throws SQLException{
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        Assert.assertTrue(dataCountEvaluation);
    }
}
