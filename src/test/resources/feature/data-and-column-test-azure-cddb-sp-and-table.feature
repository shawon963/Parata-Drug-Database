Feature: Table Data and Column Test between PDDB_LP and DrugDB Database
  @dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls
  Scenario: Verify table columns and data sync between PDDB_LP and DrugDB database for table "${table_name}"
    Given Database connection for "PDDB_LP" from azure server
    And Database connection for "DrugDB" from CDDB server
    When Database connections are established
    Then Procedure "${procedure_name}" columns in PDDB_LP database should be same as table "${table_name}" columns in DrugDB database
    And Procedure "${procedure_name}" data count in PDDB_LP database should be equals to table "${table_name}" data count in DrugDB database

