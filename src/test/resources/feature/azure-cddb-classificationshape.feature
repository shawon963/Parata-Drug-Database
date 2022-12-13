Feature: ClassificationShape Table Data and column Test between PDDB_LP and DrugDB Database
  Scenario: Verify ClassificationShape Table Data and column Test between PDDB_LP and DrugDB Database
    When connection setup with "PDDB_LP" database from azure server
    And user should check "SP_Pull_ClassificationShape" procedure from PDDB_LP database in azure server
    And user get column from "SP_Pull_ClassificationShape" procedure in PDDB_LP database within azure server
    And user get data count from "SP_Pull_ClassificationShape" procedure in PDDB_LP database within azure server
    Then connection setup with "DrugDB" database from CDDB server
    And user should check "ClassificationShape" table from DrugDB database in CDDB server
    And user should verify ClassificationShape table column between SP_Pull_ClassificationShape procedure column in PDDB_LP database within azure server and "ClassificationShape" table column in DrugDB database within CDDB server
    And user should verify ClassificationShape table data count between SP_Pull_ClassificationShape procedure data in PDDB_LP database within azure server and "ClassificationShape" table data in DrugDB database within CDDB server