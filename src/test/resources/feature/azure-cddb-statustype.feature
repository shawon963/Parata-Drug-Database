Feature: StatusType Table Data and column Test between PDDB_LP and DrugDB Database
  Scenario: Verify StatusType Table Data and column Test between PDDB_LP and DrugDB Database
    When connection setup with "PDDB_LP" database from azure server
    And user should check "SP_Pull_StatusType" procedure from PDDB_LP database in azure server
    And user get column from "SP_Pull_StatusType" procedure in PDDB_LP database within azure server
    And user get data count from "SP_Pull_StatusType" procedure in PDDB_LP database within azure server
    Then connection setup with "DrugDB" database from CDDB server
    And user should check "StatusType" table from DrugDB database in CDDB server
    And user should verify StatusType table column between SP_Pull_StatusType procedure column in PDDB_LP database within azure server and "StatusType" table column in DrugDB database within CDDB server
    And user should verify StatusType table data count between SP_Pull_StatusType procedure data in PDDB_LP database within azure server and "StatusType" table data in DrugDB database within CDDB server