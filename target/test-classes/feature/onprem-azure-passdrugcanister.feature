Feature: PassDrugCanister Table Data Test between PDDB_LP and PDDB
  Scenario: Verify PassDrugCanister Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "PassDrugCanister" table from PDDB database within on prem lan server
    And user count data from "PassDrugCanister" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "PassDrugCanister" table from PDDB_LP database in azure server
    And user should verify PassDrugCanister table column between PassDrugCanister table column in PDDB database within on prem server and "PassDrugCanister" table column in PDDB_LP database within Azure server
    And user should verify PassDrugCanister table data count between PassDrugCanister table data in PDDB_LP database within on prem server and "PassDrugCanister" table data in PDDB_LP database within azure server