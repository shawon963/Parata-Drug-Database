Feature: DrugAttribute Table Data Test between PDDB_LP and PDDB
  Scenario: Verify DrugAttribute Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "DrugAttribute" table from PDDB database within on prem lan server
    And user count data from "DrugAttribute" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "DrugAttribute" table from PDDB_LP database in azure server
    And user should verify DrugAttribute table column between DrugAttribute table column in PDDB database within on prem server and "DrugAttribute" table column in PDDB_LP database within Azure server
    And user should verify DrugAttribute table data count between DrugAttribute table data in PDDB_LP database within on prem server and "DrugAttribute" table data in PDDB_LP database within azure server