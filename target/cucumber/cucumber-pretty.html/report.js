$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/drugdb-and-wkdb-database-table-from-cddb-server-test.feature");
formatter.feature({
  "name": "Table Data and Column Test between DrugDB and WK Database from CDDB Server",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify table columns and data sync between DrugDB and WK database for table \"WKDrugs\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between DrugDB and WK Database from CDDB Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/drugdb_and_wk_database_from_cddb_server_test.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"WK\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "function \"fn_drug_wk\" check from wk database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DrugDBAndWkDBDatabaseTableFromCDDBServerTestStep.functionCheckFromWkDatabase(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between DrugDB and WK database for table \"WKLabelWarning\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between DrugDB and WK Database from CDDB Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/drugdb_and_wk_database_from_cddb_server_test.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"WK\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "function \"fn_drug_wk_label_warning\" check from wk database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DrugDBAndWkDBDatabaseTableFromCDDBServerTestStep.functionCheckFromWkDatabase(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between DrugDB and WK database for table \"WKDrugs\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between DrugDB and WK Database from CDDB Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/drugdb_and_wk_database_from_cddb_server_test.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"WK\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "function \"fn_drug_wk_update\" check from wk database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DrugDBAndWkDBDatabaseTableFromCDDBServerTestStep.functionCheckFromWkDatabase(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/pddb-and-drugdb-database-table-test-between-azure-cddb-server.feature");
formatter.feature({
  "name": "Table Data and Column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and DrugDB database for table \"StatusType\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_azure_cddb_sp_and_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_StatusType\" columns in PDDB_LP database should be same as table \"StatusType\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_StatusType\" data count in PDDB_LP database should be equals to table \"StatusType\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and DrugDB database for table \"DrugNonCountReason\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_azure_cddb_sp_and_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_DrugNonCountReason\" columns in PDDB_LP database should be same as table \"DrugNonCountReason\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_DrugNonCountReason\" data count in PDDB_LP database should be equals to table \"DrugNonCountReason\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and DrugDB database for table \"Inventory\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_azure_cddb_sp_and_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_Inventory\" columns in PDDB_LP database should be same as table \"Inventory\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_Inventory\" data count in PDDB_LP database should be equals to table \"Inventory\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c36182\u003e but was:\u003c36188\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(DataAndColumnTestAzureCDDBSPAndTableTest.java:31)\r\n\tat ✽.Procedure \"SP_Pull_Inventory\" data count in PDDB_LP database should be equals to table \"Inventory\" data count in DrugDB database(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/pddb-and-drugdb-database-table-test-between-azure-cddb-server.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and DrugDB database for table \"ClassificationShape\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_azure_cddb_sp_and_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_ClassificationShape\" columns in PDDB_LP database should be same as table \"ClassificationShape\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_ClassificationShape\" data count in PDDB_LP database should be equals to table \"ClassificationShape\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and DrugDB database for table \"DrugStatus\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_azure_cddb_sp_and_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_Status\" columns in PDDB_LP database should be same as table \"DrugStatus\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_Status\" data count in PDDB_LP database should be equals to table \"DrugStatus\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c276812\u003e but was:\u003c276854\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(DataAndColumnTestAzureCDDBSPAndTableTest.java:31)\r\n\tat ✽.Procedure \"SP_Pull_Status\" data count in PDDB_LP database should be equals to table \"DrugStatus\" data count in DrugDB database(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/pddb-and-drugdb-database-table-test-between-azure-cddb-server.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and DrugDB database for table \"DrugAttribute\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_azure_cddb_sp_and_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_DrugAttribute\" columns in PDDB_LP database should be same as table \"DrugAttribute\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"SP_Pull_DrugAttribute\" data count in PDDB_LP database should be equals to table \"DrugAttribute\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c37899\u003e but was:\u003c37905\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.DataAndColumnTestAzureCDDBSPAndTableTest.ProcedureDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInDrugDBDatabase(DataAndColumnTestAzureCDDBSPAndTableTest.java:31)\r\n\tat ✽.Procedure \"SP_Pull_DrugAttribute\" data count in PDDB_LP database should be equals to table \"DrugAttribute\" data count in DrugDB database(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/pddb-and-drugdb-database-table-test-between-azure-cddb-server.feature:8)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/feature/pddb-and-pddb_lp-database-table-test-between-onprem-azure-server.feature");
formatter.feature({
  "name": "Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DrugColor\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugColor\" columns in PDDB_LP database should be same as table \"DrugColor\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugColor\" data count in PDDB_LP database should be equals to table \"DrugColor\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"ClassificationShape\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"ClassificationShape\" columns in PDDB_LP database should be same as table \"ClassificationShape\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"ClassificationShape\" data count in PDDB_LP database should be equals to table \"ClassificationShape\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DrugCore\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugCore\" columns in PDDB_LP database should be same as table \"DrugCore\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugCore\" data count in PDDB_LP database should be equals to table \"DrugCore\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DrugName\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugName\" columns in PDDB_LP database should be same as table \"DrugName\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugName\" data count in PDDB_LP database should be equals to table \"DrugName\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DrugNonCountReason\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugNonCountReason\" columns in PDDB_LP database should be same as table \"DrugNonCountReason\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugNonCountReason\" data count in PDDB_LP database should be equals to table \"DrugNonCountReason\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"Firm\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Firm\" columns in PDDB_LP database should be same as table \"Firm\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Firm\" data count in PDDB_LP database should be equals to table \"Firm\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"Inventory\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Inventory\" columns in PDDB_LP database should be same as table \"Inventory\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Inventory\" data count in PDDB_LP database should be equals to table \"Inventory\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DrugShape\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugShape\" columns in PDDB_LP database should be same as table \"DrugShape\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugShape\" data count in PDDB_LP database should be equals to table \"DrugShape\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"Measurements\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Measurements\" columns in PDDB_LP database should be same as table \"Measurements\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Measurements\" data count in PDDB_LP database should be equals to table \"Measurements\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"PassCanister\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"PassCanister\" columns in PDDB_LP database should be same as table \"PassCanister\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"PassCanister\" data count in PDDB_LP database should be equals to table \"PassCanister\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"PassScenarioDrug\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"PassScenarioDrug\" columns in PDDB_LP database should be same as table \"PassScenarioDrug\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"PassScenarioDrug\" data count in PDDB_LP database should be equals to table \"PassScenarioDrug\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DosageForm\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DosageForm\" columns in PDDB_LP database should be same as table \"DosageForm\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DosageForm\" data count in PDDB_LP database should be equals to table \"DosageForm\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DrugAttribute\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugAttribute\" columns in PDDB_LP database should be same as table \"DrugAttribute\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DrugAttribute\" data count in PDDB_LP database should be equals to table \"DrugAttribute\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"PassDrugCanister\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"PassDrugCanister\" columns in PDDB_LP database should be same as table \"PassDrugCanister\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"PassDrugCanister\" data count in PDDB_LP database should be equals to table \"PassDrugCanister\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"StrengthUnitType\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"StrengthUnitType\" columns in PDDB_LP database should be same as table \"StrengthUnitType\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"StrengthUnitType\" data count in PDDB_LP database should be equals to table \"StrengthUnitType\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"DeviceSettingMax\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DeviceSettingMax\" columns in PDDB_LP database should be same as table \"DeviceSettingMax\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"DeviceSettingMax\" data count in PDDB_LP database should be equals to table \"DeviceSettingMax\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between PDDB_LP and PDDB database for table \"Coating\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between PDDB_LP and PDDB from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/data_and_column_test_between_onprem_azure_table.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"PDDB\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"PDDB_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Coating\" columns in PDDB_LP database should be same as table \"Coating\" columns in PDDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableColumnInPDDB_LPDatabaseShouldBeSameAsTableColumnInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Coating\" data count in PDDB_LP database should be equals to table \"Coating\" data count in PDDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.DataAndColumnTestBetweenOnpremAzureTableTest.TableDataCountInPDDB_LPDatabaseShouldBeEqualToTableDataCountInPDDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/tcgmeds-and-tcgmeds_lp-database-table-test-between-onprem-and-azure-server.feature");
formatter.feature({
  "name": "Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify table columns and data sync between TCGMeds_LP and TCGMeds database for table \"NDC-History\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/tcgmeds_and_tcgmeds_lp_database_test_between_onprem_and_azure_server.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"TCGMeds\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"TCGMeds_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"NDC-History\" columns in TCGMeds database should be same as table \"NDC-History\" columns in TCGMeds_LP database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableColumnsInTCGMedsDatabaseShouldBeSameAsTableColumnsInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"NDC-History\" data count in TCGMeds database should be equals to table \"NDC-History\" data count in TCGMeds_LP database",
  "keyword": "And "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableDataCountInTCGMedsDatabaseShouldBeEqualsToTableDataCountInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between TCGMeds_LP and TCGMeds database for table \"NDC-9-10-11\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/tcgmeds_and_tcgmeds_lp_database_test_between_onprem_and_azure_server.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"TCGMeds\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"TCGMeds_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"NDC-9-10-11\" columns in TCGMeds database should be same as table \"NDC-9-10-11\" columns in TCGMeds_LP database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableColumnsInTCGMedsDatabaseShouldBeSameAsTableColumnsInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"NDC-9-10-11\" data count in TCGMeds database should be equals to table \"NDC-9-10-11\" data count in TCGMeds_LP database",
  "keyword": "And "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableDataCountInTCGMedsDatabaseShouldBeEqualsToTableDataCountInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between TCGMeds_LP and TCGMeds database for table \"Dimensions\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/tcgmeds_and_tcgmeds_lp_database_test_between_onprem_and_azure_server.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"TCGMeds\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"TCGMeds_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Dimensions\" columns in TCGMeds database should be same as table \"Dimensions\" columns in TCGMeds_LP database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableColumnsInTCGMedsDatabaseShouldBeSameAsTableColumnsInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Dimensions\" data count in TCGMeds database should be equals to table \"Dimensions\" data count in TCGMeds_LP database",
  "keyword": "And "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableDataCountInTCGMedsDatabaseShouldBeEqualsToTableDataCountInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between TCGMeds_LP and TCGMeds database for table \"CanadaMeds\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/tcgmeds_and_tcgmeds_lp_database_test_between_onprem_and_azure_server.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"TCGMeds\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"TCGMeds_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"CanadaMeds\" columns in TCGMeds database should be same as table \"CanadaMeds\" columns in TCGMeds_LP database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableColumnsInTCGMedsDatabaseShouldBeSameAsTableColumnsInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"CanadaMeds\" data count in TCGMeds database should be equals to table \"CanadaMeds\" data count in TCGMeds_LP database",
  "keyword": "And "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableDataCountInTCGMedsDatabaseShouldBeEqualsToTableDataCountInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify table columns and data sync between TCGMeds_LP and TCGMeds database for table \"Product\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between TCGMeds_LP and TCGMeds from Azure and OnPrem Server"
    },
    {
      "name": "@dataFile:drug_database_test_data/tcgmeds_and_tcgmeds_lp_database_test_between_onprem_and_azure_server.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"TCGMeds\" from on-prem server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"TCGMeds_LP\" from azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Product\" columns in TCGMeds database should be same as table \"Product\" columns in TCGMeds_LP database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableColumnsInTCGMedsDatabaseShouldBeSameAsTableColumnsInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Table \"Product\" data count in TCGMeds database should be equals to table \"Product\" data count in TCGMeds_LP database",
  "keyword": "And "
});
formatter.match({
  "location": "step.TCGMedsAndTCGMeds_LPDatabaseTableTestBetweenOnpremAndAzureServerTest.tableDataCountInTCGMedsDatabaseShouldBeEqualsToTableDataCountInTCGMeds_LPDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/tcgmeds_lp-and-drugdb-database-table-test-between-azure-and-cddb-server.feature");
formatter.feature({
  "name": "Table Data and Column Test between TCGMeds_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify table columns and data sync between TCGMeds_LP and DrugDB database for table \"TCGDrugs\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and Column Test between TCGMeds_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/tcgmeds_lp_and_drugdb_database_test_between_azure_and_cddb_server.xls"
    }
  ]
});
formatter.step({
  "name": "Database connection for \"TCGMeds_LP\" from azure server",
  "keyword": "Given "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connection for \"DrugDB\" from CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database connections are established",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.databaseConnectionsAreEstablished()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"sp_Canister_Drug_Information_Api\" columns in TCGMeds_LP database should be same as table \"TCGDrugs\" columns in DrugDB database",
  "keyword": "Then "
});
formatter.match({
  "location": "step.TCGMeds_LPAndDrugDBDatabaseTableTestBetweenAzureAndOnPremServer.procedureColumnsInTCGMeds_LPDatabaseShouldBeSameAsTableColumnsInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Procedure \"sp_Canister_Drug_Information_Api\" data count in TCGMeds_LP database should be equals to table \"TCGDrugs\" data count in DrugDB database",
  "keyword": "And "
});
formatter.match({
  "location": "step.TCGMeds_LPAndDrugDBDatabaseTableTestBetweenAzureAndOnPremServer.procedureDataCountInTCGMeds_LPDatabaseShouldBeEqualsToTableDataCountInDrugDBDatabase(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});