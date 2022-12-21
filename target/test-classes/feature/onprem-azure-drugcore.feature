Feature: DrugCore Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DrugCore Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DrugCore" table with PDDB database within on prem lan server
    And user count data from "DrugCore" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DrugCore" table from PDDB_LP database in azure server
    And user should verify DrugCore table column between DrugCore table column in PDDB database within on prem server and "DrugCore" table column in PDDB_LP database within Azure server
    And user should verify DrugCore table data count between DrugCore table data in PDDB_LP database within on prem server and "DrugCore" table data in PDDB_LP database within azure server