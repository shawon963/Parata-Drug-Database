Feature: StatusType Table Data Test between PDDB_LP and DrugDB
  Scenario: Verify StatusType Table Data Test between PDDB_LP and DrugDB
    When connection setup with "PDDB_LP" database
    And user count data from "StatusType" table
    Then connection setup with CDDB "DrugDB" database
    And user should check "StatusType" table
    And user should verify StatusType data count between PDDB_LP StatusType table and CDDB "StatusType" table