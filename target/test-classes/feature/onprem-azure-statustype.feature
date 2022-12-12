Feature: StatusType Table Data Test between PDDB_LP and PDDB
  Scenario: Verify StatusType Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "StatusType" table from PDDB database within on prem lan server
    And user count data from "StatusType" table from PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "StatusType" table from PDDB_LP database in azure server
    And user should verify StatusType table column between StatusType table column in PDDB database within on prem server and "StatusType" table column in PDDB_LP database within Azure server
    And user should verify StatusType table data count between StatusType table data in PDDB_LP database within on prem server and "StatusType" table data in PDDB_LP database within azure server