Feature: PassScenarioDrug Table Data Test between PDDB_LP and PDDB
  Scenario: Verify PassScenarioDrug Table Data Test between PDDB_LP and PDDB
    When connection setup with "PDDB" database from on prem lan server
    And user get column from "PassScenarioDrug" table with PDDB database within on prem lan server
    And user count data from "PassScenarioDrug" table with PDDB database within on prem lan server
    Then connection setup with "PDDB_LP" database from azure server
    And user should check "PassScenarioDrug" table from PDDB_LP database in azure server
    And user should verify PassScenarioDrug table column between PassScenarioDrug table column in PDDB database within on prem server and "PassScenarioDrug" table column in PDDB_LP database within Azure server
    And user should verify PassScenarioDrug table data count between PassScenarioDrug table data in PDDB_LP database within on prem server and "PassScenarioDrug" table data in PDDB_LP database within azure server