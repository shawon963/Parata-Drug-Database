package step;

import GenericInfo.genericFactory;
import io.cucumber.java.en.Then;

import java.sql.SQLException;

public class DrugDBAndWkDBDatabaseTableFromCDDBServerTestStep {
    private genericFactory gen = new genericFactory();
    @Then("function {string} check from wk database")
    public void functionCheckFromWkDatabase(String functionName) throws SQLException {
        String checkData = gen.checkFunctionWithDataFromWkDatabase(functionName);
    }
}
