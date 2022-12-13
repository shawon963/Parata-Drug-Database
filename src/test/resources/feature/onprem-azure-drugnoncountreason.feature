Feature: DrugNonCountReason Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DrugNonCountReason Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DrugNonCountReason" table from PDDB database within on prem lan server
    And user count data from "DrugNonCountReason" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DrugNonCountReason" table from PDDB_LP database in azure server
    And user should verify DrugNonCountReason table column between DrugNonCountReason table column in PDDB database within on prem server and "DrugNonCountReason" table column in PDDB_LP database within Azure server
    And user should verify DrugNonCountReason table data count between DrugNonCountReason table data in PDDB_LP database within on prem server and "DrugNonCountReason" table data in PDDB_LP database within azure server