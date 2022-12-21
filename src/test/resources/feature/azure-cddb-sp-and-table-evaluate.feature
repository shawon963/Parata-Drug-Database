Feature:Table Data and column Test between PDDB_LP and DrugDB Database
  @dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls
  Scenario: Verify ${cddb_table} Table Data and column Test between PDDB_LP and DrugDB Database
    When connection setup with "${azure_database}" database from azure server
    And user should check "${azure_procedure}" procedure from PDDB_LP database in azure server
    And user get column from "${azure_procedure}" procedure in PDDB_LP database within azure server
    And user get data count from "${azure_procedure}" procedure in PDDB_LP database within azure server
    Then connection setup with "${cddb_database}" database from CDDB server
    And user should check "${cddb_table}" table from DrugDB database in CDDB server
    And user should verify "${cddb_table}" table column between "${azure_procedure}" procedure column in PDDB_LP database within azure server and "${cddb_table}" table column in DrugDB database within CDDB server
    And user should verify "${cddb_table}" table data count between "${azure_procedure}" procedure data in PDDB_LP database within azure server and "${cddb_table}" table data in DrugDB database within CDDB server