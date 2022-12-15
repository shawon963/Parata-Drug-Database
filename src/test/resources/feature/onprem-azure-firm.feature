Feature: Firm Table Data Test between PDDB_LP and PDDB
  Scenario: Verify Firm Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "Firm" table from PDDB database within on prem lan server
    And user count data from "Firm" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "Firm" table from PDDB_LP database in azure server
    And user should verify Firm table column between Firm table column in PDDB database within on prem server and "Firm" table column in PDDB_LP database within Azure server
    And user should verify Firm table data count between Firm table data in PDDB_LP database within on prem server and "Firm" table data in PDDB_LP database within azure server