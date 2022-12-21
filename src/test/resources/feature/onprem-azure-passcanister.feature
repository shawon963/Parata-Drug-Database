Feature: PassCanister Table Data Test between PDDB_LP and PDDB
  Scenario: Verify PassCanister Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "PassCanister" table with PDDB database within on prem lan server
    And user count data from "PassCanister" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "PassCanister" table from PDDB_LP database in azure server
    And user should verify PassCanister table column between PassCanister table column in PDDB database within on prem server and "PassCanister" table column in PDDB_LP database within Azure server
    And user should verify PassCanister table data count between PassCanister table data in PDDB_LP database within on prem server and "PassCanister" table data in PDDB_LP database within azure server