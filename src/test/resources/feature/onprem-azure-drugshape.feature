Feature: DrugShape Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DrugShape Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DrugShape" table with PDDB database within on prem lan server
    And user count data from "DrugShape" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DrugShape" table from PDDB_LP database in azure server
    And user should verify DrugShape table column between DrugShape table column in PDDB database within on prem server and "DrugShape" table column in PDDB_LP database within Azure server
    And user should verify DrugShape table data count between DrugShape table data in PDDB_LP database within on prem server and "DrugShape" table data in PDDB_LP database within azure server