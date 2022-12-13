Feature: Measurements Table Data Test between PDDB_LP and PDDB
  Scenario: Verify Measurements Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "Measurements" table from PDDB database within on prem lan server
    And user count data from "Measurements" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "Measurements" table from PDDB_LP database in azure server
    And user should verify Measurements table column between Measurements table column in PDDB database within on prem server and "Measurements" table column in PDDB_LP database within Azure server
    And user should verify Measurements table data count between Measurements table data in PDDB_LP database within on prem server and "Measurements" table data in PDDB_LP database within azure server