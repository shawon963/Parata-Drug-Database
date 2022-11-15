package step;

import constants.CONSTANTS;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import java.io.File;

import static io.restassured.RestAssured.given;

public class DrugDBRequest {
    public static Response Get(String path, String token) {
        String endPoint = CONSTANTS.DrugDbBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response = given().header("Authorization", "Bearer " + token).get(endPoint);

        //response.prettyPrint();

        System.out.println();
        System.out.println();

        return response;
    }
    public static Response Post(String path, String fileURL, String token) {
        String endPoint = CONSTANTS.LocalDrugDbBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response;
        if(fileURL.isEmpty()){
            response = RestAssured
                    .given()
                    .multiPart("file", " ", "multipart/form-data")
                    .post(endPoint)
                    .thenReturn();
        }
       else {
            File file = new File(fileURL);
            response = RestAssured
                    .given()
                    .multiPart("file", file, "multipart/form-data")
                    .post(endPoint)
                    .thenReturn();
        }

        //response.prettyPrint();

        System.out.println();
        System.out.println();

        return response;
    }
}
