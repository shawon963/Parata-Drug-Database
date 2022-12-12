Feature: DrugStatus Table Data and column Test between PDDB_LP and DrugDB Database
  Scenario: Verify DrugStatus Table Data and column Test between PDDB_LP and DrugDB Database
    When connection setup with "PDDB_LP" database from azure server
    And user should check "SP_Pull_Status" procedure from PDDB_LP database in azure server
    And user get column from "SP_Pull_Status" procedure in PDDB_LP database within azure server
    And user get data count from "SP_Pull_Status" procedure in PDDB_LP database within azure server
    Then connection setup with "DrugDB" database from CDDB server
    And user should check "DrugStatus" table from DrugDB database in CDDB server
    And user should verify DrugStatus table column between SP_Pull_Status procedure column in PDDB_LP database within azure server and "DrugStatus" table column in DrugDB database within CDDB server
    And user should verify DrugStatus table data count between SP_Pull_Status procedure data in PDDB_LP database within azure server and "DrugStatus" table data in DrugDB database within CDDB server