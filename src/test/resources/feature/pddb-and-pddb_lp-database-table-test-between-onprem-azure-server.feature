Feature: Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server
  @dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls
  Scenario: Verify table columns and data sync between PDDB_LP and PDDB database for table "${table_name}"
    Given Database connection for "PDDB" from on-prem server
    And Database connection for "PDDB_LP" from azure server
    When Database connections are established
    Then Table "${table_name}" columns in PDDB_LP database should be same as table "${table_name}" columns in PDDB database
    And Table "${table_name}" data count in PDDB_LP database should be equals to table "${table_name}" data count in PDDB database