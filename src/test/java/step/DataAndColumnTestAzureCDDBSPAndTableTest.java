package step;

import GenericInfo.genericFactory;
import com.google.gson.JsonArray;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import net.javacrumbs.jsonunit.core.Option;
import org.junit.Assert;

import java.sql.SQLException;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;

public class DataAndColumnTestAzureCDDBSPAndTableTest {
    private genericFactory gen = new genericFactory();

    @And("Procedure {string} columns in PDDB_LP database should be same as table {string} columns in DrugDB database")
    public void ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(String procedureName, String tableName)  throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(procedureName, tableName);
        System.out.println("This is the output"+ GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer);
        assertThatJson(GlobalContext.storeColumnFromTableWithinDrugDBDatabaseAndCDDBServer.toString())
                .when(Option.IGNORING_EXTRA_FIELDS)
                .when(Option.IGNORING_ARRAY_ORDER)
                .when(Option.IGNORING_EXTRA_ARRAY_ITEMS)
                .isEqualTo(GlobalContext.storeColumnFromProcedureWithinPDDB_LPDatabaseAndAzureServer.toString());
    }

    @And("Procedure {string} data count in PDDB_LP database should be equals to table {string} data count in DrugDB database")
    public void ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(String procedureName, String tableName)  throws SQLException{
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndPDDB_LPServer(procedureName, tableName);
        Assert.assertEquals(GlobalContext.datacountFromCDDBServer, GlobalContext.datacountFromAzureServer);
    }
}
