Feature: Table Data and Column Test between TCGMeds_LP and DrugDB Database
  @dataFile:drug_database_test_data/tcgmeds_lp_and_drugdb_database_test_between_azure_and_cddb_server.xls
  Scenario: Verify table columns and data sync between TCGMeds_LP and DrugDB database for table "${table_name}"
    Given Database connection for "TCGMeds_LP" from azure server
    And Database connection for "DrugDB" from CDDB server
    When Database connections are established
    Then Procedure "${procedure_name}" columns in TCGMeds_LP database should be same as table "${table_name}" columns in DrugDB database
    And Procedure "${procedure_name}" data count in TCGMeds_LP database should be equals to table "${table_name}" data count in DrugDB database

