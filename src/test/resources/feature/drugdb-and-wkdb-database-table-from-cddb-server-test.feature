Feature: Table Data and Column Test between DrugDB and WK Database from CDDB Server
  @dataFile:drug_database_test_data/drugdb_and_wk_database_from_cddb_server_test.xls
  Scenario: Verify table columns and data sync between DrugDB and WK database for table "${table_name}"
    Given Database connection for "DrugDB" from CDDB server
    And Database connection for "WK" from CDDB server
    When Database connections are established
    Then function "${procedure_name}" check from wk database
    #Then Table "${onprem_tablename}" columns in TCGMeds database should be same as table "${azure_tablename}" columns in TCGMeds_LP database
    #And Table "${onprem_tablename}" data count in TCGMeds database should be equals to table "${azure_tablename}" data count in TCGMeds_LP database