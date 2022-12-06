Feature: DrugNonCountReason Table Data Test between PDDB_LP and DrugDB
  Scenario: Verify DrugNonCountReason Table Data Test between PDDB_LP and DrugDB
    When connection setup with "PDDB_LP" database
    And user count data from "DrugNonCountReason" table
    Then connection setup with CDDB "DrugDB" database
    And user should check "DrugNonCountReason" table
    And user should verify DrugNonCountReason data count between PDDB_LP DrugNonCountReason table and CDDB "DrugNonCountReason" table