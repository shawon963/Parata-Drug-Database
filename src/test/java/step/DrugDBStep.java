package step;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import constants.CONTEXT;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;
import utils.context.TestContext;

public class DrugDBStep {
    private TestContext testContext;
    private String token;

    public DrugDBStep(TestContext context) {
        testContext = context;
    }

    @Given("a valid token")
    public void aValidToken() {
        token = Tokenizer.getToken();
        Assert.assertNotNull(token);
    }

    @When("user hit the endpoint {string}")
    public void userHitTheEndpoint(String path) {
        System.out.println(path);
        Response res = DrugDBRequest.Get(path, token);
        testContext.scenarioContext.setContext(CONTEXT.RESPONSE_CODE, res.statusCode());


//        var responseDrug = res.then().extract().jsonPath().get("drug");
//        Gson gson = new Gson();
//        var drugObj = new JsonParser().parse(gson.toJson(responseDrug));
//        JsonObject drug = drugObj.getAsJsonObject();
//        String drugName = drug.get("color").getAsString();


        if(res.statusCode() == 200) {
            testContext.scenarioContext.setContext(CONTEXT.RESPONSE_BODY, res.body().asString());
            var drugObj = new JsonParser().parse(res.body().asString());

            if(drugObj.isJsonObject()) {
                JsonObject obj = drugObj.getAsJsonObject();
                testContext.scenarioContext.setContext(CONTEXT.DRUG_OBJ, obj);
            }

            if(drugObj.isJsonArray()) {
                JsonArray arr = drugObj.getAsJsonArray();
                testContext.scenarioContext.setContext(CONTEXT.DRUG_ARRAY, arr);
                testContext.scenarioContext.setContext(CONTEXT.DRUG_ARRAY_LENGTH, arr.size());
            }
        }
    }

    @When("user hit the endpoint {string} with file {string}")
    public void userHitTheEndpointWithFile(String path, String fileURL) {
        Response response = DrugDBRequest.Post(path, fileURL, token);
        testContext.scenarioContext.setContext(CONTEXT.RESPONSE_CODE, response.statusCode());
    }

    @Then("user should receive status code {int}")
    public void userShouldReceiveStatusCode(Integer argStatus) {
        Assert.assertEquals(argStatus, testContext.scenarioContext.getContext(CONTEXT.RESPONSE_CODE));
    }

    @And("user should receive drug name {string}")
    public void userShouldReceiveDrugName(String argDrugName) {
        JsonObject drugObj = (JsonObject) testContext.scenarioContext.getContext(CONTEXT.DRUG_OBJ);
        Assert.assertEquals(argDrugName, drugObj.get("DrugName").getAsString());
    }

    @And("user should receive color {string}")
    public void userShouldReceiveColor(String argColor) {
        JsonObject drugObj = (JsonObject) testContext.scenarioContext.getContext(CONTEXT.DRUG_OBJ);
//        Assert.assertEquals(argColor, drugObj.get("Color").getAsString());
        Assert.assertEquals(argColor, drugObj.get("Color").isJsonNull() ? "null" : drugObj.get("Color").getAsString());

    }

    @And("user should receive package size {int}")
    public void userShouldReceivePackageSize(Integer argPackageSize) {
        float packageSizeFloat = argPackageSize.floatValue();
        JsonObject drugObj = (JsonObject) testContext.scenarioContext.getContext(CONTEXT.DRUG_OBJ);
        Assert.assertEquals(packageSizeFloat, drugObj.get("PackSize").getAsFloat(), 0.00);
    }
}
