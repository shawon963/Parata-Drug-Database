Feature: ClassificationShape Table Data Test between PDDB_LP and DrugDB
  Scenario: Verify ClassificationShape Table Data Test between PDDB_LP and DrugDB
    When connection setup with "PDDB_LP" database
    And user count data from "ClassificationShape" table
    Then connection setup with CDDB "DrugDB" database
    And user should check "ClassificationShape" table
    And user should verify ClassificationShape data count between PDDB_LP ClassificationShape table and CDDB "ClassificationShape" table