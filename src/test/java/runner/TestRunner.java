package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/feature/azure-cddb-sp-and-table-evaluate.feature", "src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature"},
        glue = "step",
        plugin = { "pretty", "html:target/cucumber/cucumber-pretty.html", "json:target/cucumber/cucumber.json","junit:target/cucumber/cucumber.xml"}
        )

public class TestRunner {
}
