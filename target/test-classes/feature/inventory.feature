Feature: Inventory Table Data Test between PDDB_LP and DrugDB
  Scenario: Verify Inventory Table Data Test between PDDB_LP and DrugDB
    When connection setup with "PDDB_LP" database
    And user count data from "Inventory" table
    Then connection setup with CDDB "DrugDB" database
    And user should check "Inventory" table
    And user should verify Inventory data count between PDDB_LP Inventory table and CDDB "Inventory" table