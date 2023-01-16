package step;

import GenericInfo.genericFactory;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import net.javacrumbs.jsonunit.core.Option;
import org.junit.Assert;

import java.sql.SQLException;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;

public class TCGMeds_LPAndDrugDBDatabaseTableTestBetweenAzureAndOnPremServer {
    private genericFactory gen = new genericFactory();

    @Then("Procedure {string} columns in TCGMeds_LP database should be same as table {string} columns in DrugDB database")
    public void procedureColumnsInTCGMeds_LPDatabaseShouldBeSameAsTableColumnsInDrugDBDatabase(String procedureName, String tableName) throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableWithProcedureBetweenAzureAndOnPremServer(procedureName, tableName);
        System.out.println("This is the output"+ GlobalContext.storeColumnFromProcedureWithinAzureServer);
        assertThatJson(GlobalContext.storeColumnFromTableWithinDrugDBDatabaseAndCDDBServer.toString())
                .when(Option.IGNORING_EXTRA_FIELDS)
                .when(Option.IGNORING_ARRAY_ORDER)
                .when(Option.IGNORING_EXTRA_ARRAY_ITEMS)
                .isEqualTo(GlobalContext.storeColumnFromProcedureWithinAzureServer.toString());
    }

    @And("Procedure {string} data count in TCGMeds_LP database should be equals to table {string} data count in DrugDB database")
    public void procedureDataCountInTCGMeds_LPDatabaseShouldBeEqualsToTableDataCountInDrugDBDatabase(String procedureName, String tableName) throws SQLException{
        boolean dataCountEvaluation = gen.checkDataCountInTableWithProcedureBetweenDrugDBAndAzureServer(procedureName, tableName);
        Assert.assertEquals(GlobalContext.datacountFromCDDBServer, GlobalContext.datacountFromAzureServer);
    }
}
