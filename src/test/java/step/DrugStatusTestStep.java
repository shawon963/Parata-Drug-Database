package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class DrugStatusTestStep {
    private genericFactory gen = new genericFactory();

    @And("user should verify DrugStatus data count between PDDB_LP DrugStatus table and CDDB {string} table")
    public void userShouldVerifyDrugStatusDataCountBetweenPDDB_LPDrugStatusTableAndCDDBTable(String tableName) throws SQLException {
        boolean dataEvaluation = gen.checkTableDataCountBetweenPDDB_LPAndCDDB(tableName);
        Assert.assertTrue(dataEvaluation);
    }
}
