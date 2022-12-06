package step;
import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;
import java.sql.SQLException;

public class InventoryTestStep {
    private genericFactory gen = new genericFactory();

    @And("user should verify Inventory data count between PDDB_LP Inventory table and CDDB {string} table")
    public void userShouldVerifyInventoryDataCountBetweenPDDB_LPInventoryTableAndCDDBInventoryTable(String tableName) throws SQLException {
        boolean dataEvaluation = gen.checkTableDataCountBetweenPDDB_LPAndCDDB(tableName);
        Assert.assertTrue(dataEvaluation);
    }
}
