Feature: Status Table Data Test between PDDB_LP and PDDB
  Scenario: Verify Status Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "Status" table from PDDB database within on prem lan server
    And user count data from "Status" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "Status" table from PDDB_LP database in azure server
    And user should verify Status table column between Status table column in PDDB database within on prem server and "Status" table column in PDDB_LP database within Azure server
    And user should verify Status table data count between Status table data in PDDB_LP database within on prem server and "Status" table data in PDDB_LP database within azure server