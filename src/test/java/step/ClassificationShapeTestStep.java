package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.And;
import org.junit.Assert;

import java.sql.SQLException;

public class ClassificationShapeTestStep {
    private genericFactory gen = new genericFactory();

    @And("user should verify ClassificationShape data count between PDDB_LP ClassificationShape table and CDDB {string} table")
    public void userShouldVerifyClassificationShapeDataCountBetweenPDDB_LPClassificationShapeTableAndCDDBTable(String tableName) throws SQLException{
        boolean dataEvaluation = gen.checkTableDataCountBetweenPDDB_LPAndCDDB(tableName);
        Assert.assertTrue(dataEvaluation);
    }
}
