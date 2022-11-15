package step;

import io.restassured.response.Response;
import org.json.JSONObject;

import static io.restassured.RestAssured.given;

public class Tokenizer {
    public static String getToken() {
        JSONObject requestParams = new JSONObject();
        requestParams.put("audience", "https://api.parata.com/commondrugdatabase");
        requestParams.put("grant_type", "client_credentials");
        requestParams.put("client_id", "1E7qAnjX4e0rzUnfwk5neZX8u61xC8QK");
        requestParams.put("client_secret", "4HQYC6-XYkoGmghJSVmMhJieUeZWGvTQpbQLM6eHXBSg3xdMUwgLkO8vhJq9cMjP");

        Response response =
                given().
                        header("Content-Type", "application/json").
                        body(requestParams.toString()).
                        post("https://parata-poc.auth0.com/oauth/token");

        String token = response.jsonPath().get("access_token");
        System.out.println("Token is " + token);
        System.out.println();
        System.out.println();

        return token;
    }
}
