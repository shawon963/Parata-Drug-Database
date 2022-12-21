package step;

import GenericInfo.genericFactory;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import net.javacrumbs.jsonunit.core.Option;
import org.junit.Assert;

import java.sql.SQLException;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;

public class OnPremAzureTableDataAndColumnvalidationTest {
    private genericFactory gen = new genericFactory();

    @And("user should verify {string} table column between {string} table column in PDDB database within on prem server and {string} table column in PDDB_LP database within Azure server")
    public void userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(String tableNametr, String tableNametd, String tableName)  throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableBetweenPDDBAndPDDB_LPDatabase(tableName);
        assertThatJson(GlobalContext.storeColumnFromTableWithinPDDB_LPDatabaseAndAzureServer.toString())
                .isEqualTo(GlobalContext.storeColumnFromTableWithinPDDBDatabaseAndOnPremServer.toString());
    }

    @And("user should verify {string} table data count between {string} table data in PDDB_LP database within on prem server and {string} table data in PDDB_LP database within azure server")
    public void userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(String tableNametr, String tableNametd, String tableName)  throws SQLException {
        boolean dataCountEvaluation = gen.checkDataCountInTableBetweenPDDBAndPDDB_LP(tableName);
        Assert.assertEquals(GlobalContext.datacountFromAzureServer, GlobalContext.datacountFromOnPremServer);
    }
}
