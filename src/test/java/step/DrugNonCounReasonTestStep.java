package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class DrugNonCounReasonTestStep {

    private genericFactory gen = new genericFactory();

    @And("user should verify DrugNonCountReason data count between PDDB_LP DrugNonCountReason table and CDDB {string} table")
    public void userShouldVerifyDrugNonCountReasonDataCountBetweenPDDB_LPDrugNonCountReasonTableAndCDDBTable(String tableName) throws SQLException {
        boolean dataEvaluation = gen.checkTableDataCountBetweenPDDB_LPAndCDDB(tableName);
        Assert.assertTrue(dataEvaluation);
    }
}
