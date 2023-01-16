Feature: Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server
  @dataFile:drug_database_test_data/tcgmeds_and_tcgmeds_lp_database_test_between_onprem_and_azure_server.xls
  Scenario: Verify table columns and data sync between TCGMeds_LP and TCGMeds database for table "${azure_tablename}"
    Given Database connection for "TCGMeds" from on-prem server
    And Database connection for "TCGMeds_LP" from azure server
    When Database connections are established
    Then Table "${onprem_tablename}" columns in TCGMeds database should be same as table "${azure_tablename}" columns in TCGMeds_LP database
    And Table "${onprem_tablename}" data count in TCGMeds database should be equals to table "${azure_tablename}" data count in TCGMeds_LP database