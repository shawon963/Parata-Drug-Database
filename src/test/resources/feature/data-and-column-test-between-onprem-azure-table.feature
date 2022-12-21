Feature: DrugColor Table Data Test between PDDB_LP and PDDB
  @dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls
  Scenario: Verify ${onprem_table} Table Data Test between PDDB_LP and PDDB
    When connection setup with "${onprem_database}" database from on prem lan server
    And user get column from "${onprem_table}" table with PDDB database within on prem lan server
    And user count data from "${onprem_table}" table with PDDB database within on prem lan server
    Then connection setup with "${azure_database}" database from azure server
    And user should check "${azure_table}" table from PDDB_LP database in azure server
    And user should verify "${azure_table}" table column between "${onprem_table}" table column in PDDB database within on prem server and "${azure_table}" table column in PDDB_LP database within Azure server
    And user should verify "${azure_table}" table data count between "${onprem_table}" table data in PDDB_LP database within on prem server and "${azure_table}" table data in PDDB_LP database within azure server