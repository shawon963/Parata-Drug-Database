Feature: DrugName Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DrugName Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DrugName" table with PDDB database within on prem lan server
    And user count data from "DrugName" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DrugName" table from PDDB_LP database in azure server
    And user should verify DrugName table column between DrugName table column in PDDB database within on prem server and "DrugName" table column in PDDB_LP database within Azure server
    And user should verify DrugName table data count between DrugName table data in PDDB_LP database within on prem server and "DrugName" table data in PDDB_LP database within azure server