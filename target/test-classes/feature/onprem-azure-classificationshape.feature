Feature: ClassificationShape Table Data Test between PDDB_LP and PDDB
  Scenario: Verify ClassificationShape Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "ClassificationShape" table with PDDB database within on prem lan server
    And user count data from "ClassificationShape" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "ClassificationShape" table from PDDB_LP database in azure server
    And user should verify ClassificationShape table column between ClassificationShape table column in PDDB database within on prem server and "ClassificationShape" table column in PDDB_LP database within Azure server
    And user should verify ClassificationShape table data count between ClassificationShape table data in PDDB_LP database within on prem server and "ClassificationShape" table data in PDDB_LP database within azure server