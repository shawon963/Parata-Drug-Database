Feature: DrugColor Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DrugColor Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DrugColor" table with PDDB database within on prem lan server
    And user count data from "DrugColor" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DrugColor" table from PDDB_LP database in azure server
    And user should verify DrugColor table column between DrugColor table column in PDDB database within on prem server and "DrugColor" table column in PDDB_LP database within Azure server
    And user should verify DrugColor table data count between DrugColor table data in PDDB_LP database within on prem server and "DrugColor" table data in PDDB_LP database within azure server