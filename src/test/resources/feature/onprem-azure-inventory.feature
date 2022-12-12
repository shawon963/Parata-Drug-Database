Feature: Inventory Table Data Test between PDDB_LP and PDDB
  Scenario: Verify Inventory Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "Inventory" table from PDDB database within on prem lan server
    And user count data from "Inventory" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "Inventory" table from PDDB_LP database in azure server
    And user should verify Inventory table column between Inventory table column in PDDB database within on prem server and "Inventory" table column in PDDB_LP database within Azure server
    And user should verify Inventory table data count between Inventory table data in PDDB_LP database within on prem server and "Inventory" table data in PDDB_LP database within azure server