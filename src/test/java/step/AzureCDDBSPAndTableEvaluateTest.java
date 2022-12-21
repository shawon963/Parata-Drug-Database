package step;

import GenericInfo.genericFactory;
import com.google.gson.JsonArray;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import net.javacrumbs.jsonunit.core.Option;
import org.junit.Assert;

import java.sql.SQLException;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;

public class AzureCDDBSPAndTableEvaluateTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify {string} table column between {string} procedure column in PDDB_LP database within azure server and {string} table column in DrugDB database within CDDB server")
    public void userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(String arg0, String arg1, String tableName)  throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        System.out.println("This is the output"+ GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer);
        assertThatJson(GlobalContext.storeColumnFromTableWithinDrugDBDatabaseAndCDDBServer.toString())
                .when(Option.IGNORING_EXTRA_FIELDS)
                .when(Option.IGNORING_ARRAY_ORDER)
                .isEqualTo(GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer.toString());
    }

    @And("user should verify {string} table data count between {string} procedure data in PDDB_LP database within azure server and {string} table data in DrugDB database within CDDB server")
    public void userShouldVerifyTableDataCountBetweenProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(String arg0, String arg1, String tableName)  throws SQLException{
        System.out.println("This is output"+ GlobalContext.datacountFromAzureServer);
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(tableName);
        assertThatJson(GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer.toString())
                .when(Option.IGNORING_EXTRA_FIELDS)
                .when(Option.IGNORING_ARRAY_ORDER)
                .isEqualTo(GlobalContext.storeColumnFromTableWithinDrugDBDatabaseAndCDDBServer.toString());
    }
}
