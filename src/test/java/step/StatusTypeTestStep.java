package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class StatusTypeTestStep {
    private genericFactory gen = new genericFactory();

    @And("user should verify StatusType data count between PDDB_LP StatusType table and CDDB {string} table")
    public void userShouldVerifyStatusTypeDataCountBetweenPDDB_LPStatusTypeTableAndCDDBTable(String tableName) throws SQLException {
        boolean dataEvaluation = gen.checkTableDataCountBetweenPDDB_LPAndCDDB(tableName);
        Assert.assertTrue(dataEvaluation);
    }
}
