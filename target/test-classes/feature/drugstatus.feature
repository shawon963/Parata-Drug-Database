Feature: DrugStatus Table Data Test between PDDB_LP and DrugDB
  Scenario: Verify DrugStatus Table Data Test between PDDB_LP and DrugDB
    When connection setup with "PDDB_LP" database
    And user count data from "Status" table
    Then connection setup with CDDB "DrugDB" database
    And user should check "DrugStatus" table
    And user should verify DrugStatus data count between PDDB_LP DrugStatus table and CDDB "DrugStatus" table