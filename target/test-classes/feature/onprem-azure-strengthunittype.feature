Feature: StrengthUnitType Table Data Test between PDDB_LP and PDDB
  Scenario: Verify StrengthUnitType Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "StrengthUnitType" table with PDDB database within on prem lan server
    And user count data from "StrengthUnitType" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "StrengthUnitType" table from PDDB_LP database in azure server
    And user should verify StrengthUnitType table column between StrengthUnitType table column in PDDB database within on prem server and "StrengthUnitType" table column in PDDB_LP database within Azure server
    And user should verify StrengthUnitType table data count between StrengthUnitType table data in PDDB_LP database within on prem server and "StrengthUnitType" table data in PDDB_LP database within azure server