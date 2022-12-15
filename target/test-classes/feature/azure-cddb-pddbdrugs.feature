Feature: PDDBDrugs Table Data and column Test between PDDB_LP and DrugDB Database
  Scenario: Verify PDDBDrugs Table Data and column Test between PDDB_LP and DrugDB Database
    When connection setup with "PDDB_LP" database from azure server
    And user should check "SP_PDDB_Drug_Information_Api" procedure from PDDB_LP database in azure server
    And user get column from "SP_PDDB_Drug_Information_Api" procedure in PDDB_LP database within azure server
    And user get data count from "SP_PDDB_Drug_Information_Api" procedure in PDDB_LP database within azure server
    Then connection setup with "DrugDB" database from CDDB server
    And user should check "PDDBDrugs" table from DrugDB database in CDDB server
    And user should verify PDDBDrugs table column between SP_PDDB_Drug_Information_Api procedure column in PDDB_LP database within azure server and "PDDBDrugs" table column in DrugDB database within CDDB server
    And user should verify PDDBDrugs table data count between SP_PDDB_Drug_Information_Api procedure data in PDDB_LP database within azure server and "PDDBDrugs" table data in DrugDB database within CDDB server