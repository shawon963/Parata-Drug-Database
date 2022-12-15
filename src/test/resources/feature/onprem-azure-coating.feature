Feature: Coating Table Data Test between PDDB_LP and PDDB
  Scenario: Verify Coating Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "Coating" table from PDDB database within on prem lan server
    And user count data from "Coating" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "Coating" table from PDDB_LP database in azure server
    And user should verify Coating table column between Coating table column in PDDB database within on prem server and "Coating" table column in PDDB_LP database within Azure server
    And user should verify Coating table data count between Coating table data in PDDB_LP database within on prem server and "Coating" table data in PDDB_LP database within azure server