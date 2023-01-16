package step;

import GenericInfo.genericFactory;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.sql.SQLException;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;

public class TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest {
    private genericFactory gen = new genericFactory();

    @Then("Table {string} columns in TCGMeds database should be same as table {string} columns in TCGMeds_LP database")
    public void tableColumnsInTCGMedsDatabaseShouldBeSameAsTableColumnsInTCGMeds_LPDatabase(String onPremTable, String tableName) throws SQLException{
        boolean columnEvaluation = gen.checkColumnInTableBetweenTCGMedsAndTCGMeds_LPDatabase(tableName);
        assertThatJson(GlobalContext.storeColumnFromTableWithinTCGMeds_LPDatabaseAndAzureServer)
                .isEqualTo(GlobalContext.storeColumnFromTableWithinTCGMedsDatabaseAndOnPremServer);
    }

    @And("Table {string} data count in TCGMeds database should be equals to table {string} data count in TCGMeds_LP database")
    public void tableDataCountInTCGMedsDatabaseShouldBeEqualsToTableDataCountInTCGMeds_LPDatabase(String onPremTable, String tableName) throws SQLException {
        boolean dataCountEvaluation = gen.checkDataCountInTableBetweenTCGMedsAndTCGMeds_LPDatabase(tableName);
        Assert.assertEquals(GlobalContext.datacountFromAzureServer, GlobalContext.datacountFromTCGMedsDatabase);
    }
}
