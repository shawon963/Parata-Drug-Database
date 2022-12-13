Feature: DrugNonCountReason Table Data and column Test between PDDB_LP and DrugDB Database
  Scenario: Verify DrugNonCountReason Table Data and column Test between PDDB_LP and DrugDB Database
    When connection setup with "PDDB_LP" database from azure server
    And user should check "SP_Pull_DrugNonCountReason" procedure from PDDB_LP database in azure server
    And user get column from "SP_Pull_DrugNonCountReason" procedure in PDDB_LP database within azure server
    And user get data count from "SP_Pull_DrugNonCountReason" procedure in PDDB_LP database within azure server
    Then connection setup with "DrugDB" database from CDDB server
    And user should check "DrugNonCountReason" table from DrugDB database in CDDB server
    And user should verify DrugNonCountReason table column between SP_Pull_DrugNonCountReason procedure column in PDDB_LP database within azure server and "DrugNonCountReason" table column in DrugDB database within CDDB server
    And user should verify DrugNonCountReason table data count between SP_Pull_DrugNonCountReason procedure data in PDDB_LP database within azure server and "DrugNonCountReason" table data in DrugDB database within CDDB server