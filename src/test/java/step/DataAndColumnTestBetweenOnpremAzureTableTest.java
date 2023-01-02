package step;

import GenericInfo.genericFactory;
import constants.GlobalContext;
import io.cucumber.java.en.And;
import net.javacrumbs.jsonunit.core.Option;
import org.junit.Assert;

import java.sql.SQLException;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;

public class DataAndColumnTestBetweenOnpremAzureTableTest {
    private genericFactory gen = new genericFactory();

    @And("Table {string} columns in PDDB_LP database should be same as table {string} columns in PDDB database")
    public void TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(String onPremTable, String tableName)  throws SQLException {
        boolean columnEvaluation = gen.checkColumnInTableBetweenPDDBAndPDDB_LPDatabase(tableName);
        assertThatJson(GlobalContext.storeColumnFromTableWithinPDDB_LPDatabaseAndAzureServer.toString())
                .isEqualTo(GlobalContext.storeColumnFromTableWithinPDDBDatabaseAndOnPremServer.toString());
    }

    @And("Table {string} data count in PDDB_LP database should be equals to table {string} data count in PDDB database")
    public void TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(String onPremTable, String tableName)  throws SQLException {
        boolean dataCountEvaluation = gen.checkDataCountInTableBetweenPDDBAndPDDB_LP(tableName);
        Assert.assertEquals(GlobalContext.datacountFromAzureServer, GlobalContext.datacountFromOnPremServer);
    }
}
