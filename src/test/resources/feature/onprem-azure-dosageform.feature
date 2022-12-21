Feature: DosageForm Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DosageForm Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DosageForm" table with PDDB database within on prem lan server
    And user count data from "DosageForm" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DosageForm" table from PDDB_LP database in azure server
    And user should verify DosageForm table column between DosageForm table column in PDDB database within on prem server and "DosageForm" table column in PDDB_LP database within Azure server
    And user should verify DosageForm table data count between DosageForm table data in PDDB_LP database within on prem server and "DosageForm" table data in PDDB_LP database within azure server