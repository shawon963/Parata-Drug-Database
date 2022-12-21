$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/azure-cddb-sp-and-table-evaluate.feature");
formatter.feature({
  "name": "Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify StatusType Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"SP_Pull_StatusType\" procedure from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"SP_Pull_StatusType\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get data count from \"SP_Pull_StatusType\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"DrugDB\" database from CDDB server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"StatusType\" table from DrugDB database in CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromDrugDBDatabaseInCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"StatusType\" table column between \"SP_Pull_StatusType\" procedure column in PDDB_LP database within azure server and \"StatusType\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"StatusType\" table data count between \"SP_Pull_StatusType\" procedure data in PDDB_LP database within azure server and \"StatusType\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableDataCountBetweenProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DrugNonCountReason Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"SP_Pull_DrugNonCountReason\" procedure from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"SP_Pull_DrugNonCountReason\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get data count from \"SP_Pull_DrugNonCountReason\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"DrugDB\" database from CDDB server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugNonCountReason\" table from DrugDB database in CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromDrugDBDatabaseInCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugNonCountReason\" table column between \"SP_Pull_DrugNonCountReason\" procedure column in PDDB_LP database within azure server and \"DrugNonCountReason\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugNonCountReason\" table data count between \"SP_Pull_DrugNonCountReason\" procedure data in PDDB_LP database within azure server and \"DrugNonCountReason\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableDataCountBetweenProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Inventory Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"SP_Pull_Inventory\" procedure from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"SP_Pull_Inventory\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get data count from \"SP_Pull_Inventory\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"DrugDB\" database from CDDB server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"Inventory\" table from DrugDB database in CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromDrugDBDatabaseInCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Inventory\" table column between \"SP_Pull_Inventory\" procedure column in PDDB_LP database within azure server and \"Inventory\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "net.javacrumbs.jsonunit.core.internal.BasicExceptionFactory$BasicJsonAssertError: JSON documents are different:\nArray \"\" has different length, expected: \u003c13\u003e but was: \u003c21\u003e.\nArray \"\" has different content. Missing values: [\"InventoryID\"], extra values: [\"InventoryId\", \"Id\", \"DestroyDate\", \"Destroyed\", \"DestroyedBy\", \"DestroyedComments\", \"SourceAddress\", \"SourceEmail\", \"SourcePhone\"], expected: \u003c[\"StatusTypeId\",\"StatusTypeDescription\",\"Id\",\"Reason\",\"InventoryID\",\"DrugNumber\",\"Date\",\"Source\",\"Quantity\",\"Price\",\"Comments\",\"ChangedBy\",\"ChangedDate\"]\u003e but was: \u003c[\"StatusTypeId\",\"StatusTypeDescription\",\"Id\",\"Reason\",\"InventoryId\",\"DrugNumber\",\"Date\",\"Source\",\"Quantity\",\"Price\",\"Comments\",\"ChangedBy\",\"ChangedDate\",\"Id\",\"DestroyDate\",\"Destroyed\",\"DestroyedBy\",\"DestroyedComments\",\"SourceAddress\",\"SourceEmail\",\"SourcePhone\"]\u003e\n\r\n\tat net.javacrumbs.jsonunit.core.internal.BasicExceptionFactory.createException(ExceptionFactory.java:19)\r\n\tat net.javacrumbs.jsonunit.core.internal.ExceptionUtils.createException(ExceptionUtils.java:45)\r\n\tat net.javacrumbs.jsonunit.core.internal.Diff.failIfDifferent(Diff.java:617)\r\n\tat net.javacrumbs.jsonunit.assertj.JsonAssert.isEqualTo(JsonAssert.java:117)\r\n\tat step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBSPAndTableEvaluateTest.java:24)\r\n\tat ✽.user should verify \"Inventory\" table column between \"SP_Pull_Inventory\" procedure column in PDDB_LP database within azure server and \"Inventory\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-sp-and-table-evaluate.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify \"Inventory\" table data count between \"SP_Pull_Inventory\" procedure data in PDDB_LP database within azure server and \"Inventory\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableDataCountBetweenProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify ClassificationShape Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"SP_Pull_ClassificationShape\" procedure from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"SP_Pull_ClassificationShape\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get data count from \"SP_Pull_ClassificationShape\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"DrugDB\" database from CDDB server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"ClassificationShape\" table from DrugDB database in CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromDrugDBDatabaseInCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"ClassificationShape\" table column between \"SP_Pull_ClassificationShape\" procedure column in PDDB_LP database within azure server and \"ClassificationShape\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "net.javacrumbs.jsonunit.core.internal.BasicExceptionFactory$BasicJsonAssertError: JSON documents are different:\nArray \"\" has different length, expected: \u003c17\u003e but was: \u003c25\u003e.\nArray \"\" has different content. Missing values: [\"InventoryID\", \"ClassificationShapeID\"], extra values: [\"InventoryId\", \"Id\", \"DestroyDate\", \"Destroyed\", \"DestroyedBy\", \"DestroyedComments\", \"SourceAddress\", \"SourceEmail\", \"SourcePhone\", \"ClassificationShapeId\"], expected: \u003c[\"StatusTypeId\",\"StatusTypeDescription\",\"Id\",\"Reason\",\"InventoryID\",\"DrugNumber\",\"Date\",\"Source\",\"Quantity\",\"Price\",\"Comments\",\"ChangedBy\",\"ChangedDate\",\"ClassificationShapeID\",\"ClassificationShapeDescription\",\"HandlerAssembly\",\"HandlerClass\"]\u003e but was: \u003c[\"StatusTypeId\",\"StatusTypeDescription\",\"Id\",\"Reason\",\"InventoryId\",\"DrugNumber\",\"Date\",\"Source\",\"Quantity\",\"Price\",\"Comments\",\"ChangedBy\",\"ChangedDate\",\"Id\",\"DestroyDate\",\"Destroyed\",\"DestroyedBy\",\"DestroyedComments\",\"SourceAddress\",\"SourceEmail\",\"SourcePhone\",\"ClassificationShapeId\",\"ClassificationShapeDescription\",\"HandlerAssembly\",\"HandlerClass\"]\u003e\n\r\n\tat net.javacrumbs.jsonunit.core.internal.BasicExceptionFactory.createException(ExceptionFactory.java:19)\r\n\tat net.javacrumbs.jsonunit.core.internal.ExceptionUtils.createException(ExceptionUtils.java:45)\r\n\tat net.javacrumbs.jsonunit.core.internal.Diff.failIfDifferent(Diff.java:617)\r\n\tat net.javacrumbs.jsonunit.assertj.JsonAssert.isEqualTo(JsonAssert.java:117)\r\n\tat step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBSPAndTableEvaluateTest.java:24)\r\n\tat ✽.user should verify \"ClassificationShape\" table column between \"SP_Pull_ClassificationShape\" procedure column in PDDB_LP database within azure server and \"ClassificationShape\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-sp-and-table-evaluate.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify \"ClassificationShape\" table data count between \"SP_Pull_ClassificationShape\" procedure data in PDDB_LP database within azure server and \"ClassificationShape\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableDataCountBetweenProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify DrugStatus Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Table Data and column Test between PDDB_LP and DrugDB Database"
    },
    {
      "name": "@dataFile:drug_database_test_data/azure_cddb_proc_with_table_validation.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"SP_Pull_Status\" procedure from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"SP_Pull_Status\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get data count from \"SP_Pull_Status\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetDataCountFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"DrugDB\" database from CDDB server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithDatabaseFromCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugStatus\" table from DrugDB database in CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromDrugDBDatabaseInCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugStatus\" table column between \"SP_Pull_Status\" procedure column in PDDB_LP database within azure server and \"DrugStatus\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "net.javacrumbs.jsonunit.core.internal.BasicExceptionFactory$BasicJsonAssertError: JSON documents are different:\nArray \"\" has different length, expected: \u003c24\u003e but was: \u003c33\u003e.\nArray \"\" has different content. Missing values: [\"InventoryID\", \"ClassificationShapeID\", \"StatusID\", \"StatusTypeID\", \"DeviceID\"], extra values: [\"InventoryId\", \"Id\", \"DestroyDate\", \"Destroyed\", \"DestroyedBy\", \"DestroyedComments\", \"SourceAddress\", \"SourceEmail\", \"SourcePhone\", \"ClassificationShapeId\", \"StatusId\", \"StatusTypeId\", \"DeviceId\", \"Id\"], expected: \u003c[\"StatusTypeId\",\"StatusTypeDescription\",\"Id\",\"Reason\",\"InventoryID\",\"DrugNumber\",\"Date\",\"Source\",\"Quantity\",\"Price\",\"Comments\",\"ChangedBy\",\"ChangedDate\",\"ClassificationShapeID\",\"ClassificationShapeDescription\",\"HandlerAssembly\",\"HandlerClass\",\"StatusID\",\"StatusTypeID\",\"DeviceID\",\"DrugNumber\",\"Comments\",\"NonCountReasonID\",\"IsSuperCellOnly\"]\u003e but was: \u003c[\"StatusTypeId\",\"StatusTypeDescription\",\"Id\",\"Reason\",\"InventoryId\",\"DrugNumber\",\"Date\",\"Source\",\"Quantity\",\"Price\",\"Comments\",\"ChangedBy\",\"ChangedDate\",\"Id\",\"DestroyDate\",\"Destroyed\",\"DestroyedBy\",\"DestroyedComments\",\"SourceAddress\",\"SourceEmail\",\"SourcePhone\",\"ClassificationShapeId\",\"ClassificationShapeDescription\",\"HandlerAssembly\",\"HandlerClass\",\"StatusId\",\"StatusTypeId\",\"DeviceId\",\"DrugNumber\",\"Comments\",\"NonCountReasonID\",\"IsSuperCellOnly\",\"Id\"]\u003e\n\r\n\tat net.javacrumbs.jsonunit.core.internal.BasicExceptionFactory.createException(ExceptionFactory.java:19)\r\n\tat net.javacrumbs.jsonunit.core.internal.ExceptionUtils.createException(ExceptionUtils.java:45)\r\n\tat net.javacrumbs.jsonunit.core.internal.Diff.failIfDifferent(Diff.java:617)\r\n\tat net.javacrumbs.jsonunit.assertj.JsonAssert.isEqualTo(JsonAssert.java:117)\r\n\tat step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableColumnBetweenProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBSPAndTableEvaluateTest.java:24)\r\n\tat ✽.user should verify \"DrugStatus\" table column between \"SP_Pull_Status\" procedure column in PDDB_LP database within azure server and \"DrugStatus\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-sp-and-table-evaluate.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify \"DrugStatus\" table data count between \"SP_Pull_Status\" procedure data in PDDB_LP database within azure server and \"DrugStatus\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBSPAndTableEvaluateTest.userShouldVerifyTableDataCountBetweenProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature");
formatter.feature({
  "name": "DrugColor Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugColor Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DrugColor\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DrugColor\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugColor\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugColor\" table column between \"DrugColor\" table column in PDDB database within on prem server and \"DrugColor\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugColor\" table data count between \"DrugColor\" table data in PDDB_LP database within on prem server and \"DrugColor\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify ClassificationShape Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"ClassificationShape\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"ClassificationShape\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"ClassificationShape\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"ClassificationShape\" table column between \"ClassificationShape\" table column in PDDB database within on prem server and \"ClassificationShape\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"ClassificationShape\" table data count between \"ClassificationShape\" table data in PDDB_LP database within on prem server and \"ClassificationShape\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DrugCore Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DrugCore\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DrugCore\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugCore\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugCore\" table column between \"DrugCore\" table column in PDDB database within on prem server and \"DrugCore\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugCore\" table data count between \"DrugCore\" table data in PDDB_LP database within on prem server and \"DrugCore\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c37556\u003e but was:\u003c37583\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"DrugCore\" table data count between \"DrugCore\" table data in PDDB_LP database within on prem server and \"DrugCore\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify DrugName Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DrugName\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DrugName\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugName\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugName\" table column between \"DrugName\" table column in PDDB database within on prem server and \"DrugName\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugName\" table data count between \"DrugName\" table data in PDDB_LP database within on prem server and \"DrugName\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c37837\u003e but was:\u003c37864\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"DrugName\" table data count between \"DrugName\" table data in PDDB_LP database within on prem server and \"DrugName\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify DrugNonCountReason Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DrugNonCountReason\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DrugNonCountReason\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugNonCountReason\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugNonCountReason\" table column between \"DrugNonCountReason\" table column in PDDB database within on prem server and \"DrugNonCountReason\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugNonCountReason\" table data count between \"DrugNonCountReason\" table data in PDDB_LP database within on prem server and \"DrugNonCountReason\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Firm Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"Firm\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"Firm\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"Firm\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Firm\" table column between \"Firm\" table column in PDDB database within on prem server and \"Firm\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Firm\" table data count between \"Firm\" table data in PDDB_LP database within on prem server and \"Firm\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c2526\u003e but was:\u003c2528\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"Firm\" table data count between \"Firm\" table data in PDDB_LP database within on prem server and \"Firm\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Inventory Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"Inventory\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"Inventory\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"Inventory\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Inventory\" table column between \"Inventory\" table column in PDDB database within on prem server and \"Inventory\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Inventory\" table data count between \"Inventory\" table data in PDDB_LP database within on prem server and \"Inventory\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c36111\u003e but was:\u003c36141\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"Inventory\" table data count between \"Inventory\" table data in PDDB_LP database within on prem server and \"Inventory\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify DrugShape Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DrugShape\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DrugShape\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugShape\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugShape\" table column between \"DrugShape\" table column in PDDB database within on prem server and \"DrugShape\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugShape\" table data count between \"DrugShape\" table data in PDDB_LP database within on prem server and \"DrugShape\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Measurements Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"Measurements\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"Measurements\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"Measurements\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Measurements\" table column between \"Measurements\" table column in PDDB database within on prem server and \"Measurements\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Measurements\" table data count between \"Measurements\" table data in PDDB_LP database within on prem server and \"Measurements\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c37839\u003e but was:\u003c37866\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"Measurements\" table data count between \"Measurements\" table data in PDDB_LP database within on prem server and \"Measurements\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify PassCanister Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"PassCanister\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"PassCanister\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"PassCanister\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"PassCanister\" table column between \"PassCanister\" table column in PDDB database within on prem server and \"PassCanister\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"PassCanister\" table data count between \"PassCanister\" table data in PDDB_LP database within on prem server and \"PassCanister\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify PassScenarioDrug Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"PassScenarioDrug\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"PassScenarioDrug\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"PassScenarioDrug\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"PassScenarioDrug\" table column between \"PassScenarioDrug\" table column in PDDB database within on prem server and \"PassScenarioDrug\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"PassScenarioDrug\" table data count between \"PassScenarioDrug\" table data in PDDB_LP database within on prem server and \"PassScenarioDrug\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c189477\u003e but was:\u003c190546\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"PassScenarioDrug\" table data count between \"PassScenarioDrug\" table data in PDDB_LP database within on prem server and \"PassScenarioDrug\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify DosageForm Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DosageForm\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DosageForm\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DosageForm\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DosageForm\" table column between \"DosageForm\" table column in PDDB database within on prem server and \"DosageForm\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DosageForm\" table data count between \"DosageForm\" table data in PDDB_LP database within on prem server and \"DosageForm\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DrugAttribute Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DrugAttribute\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DrugAttribute\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DrugAttribute\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugAttribute\" table column between \"DrugAttribute\" table column in PDDB database within on prem server and \"DrugAttribute\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DrugAttribute\" table data count between \"DrugAttribute\" table data in PDDB_LP database within on prem server and \"DrugAttribute\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c37839\u003e but was:\u003c37866\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"DrugAttribute\" table data count between \"DrugAttribute\" table data in PDDB_LP database within on prem server and \"DrugAttribute\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify PassDrugCanister Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"PassDrugCanister\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"PassDrugCanister\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"PassDrugCanister\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"PassDrugCanister\" table column between \"PassDrugCanister\" table column in PDDB database within on prem server and \"PassDrugCanister\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"PassDrugCanister\" table data count between \"PassDrugCanister\" table data in PDDB_LP database within on prem server and \"PassDrugCanister\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify StrengthUnitType Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"StrengthUnitType\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"StrengthUnitType\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"StrengthUnitType\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"StrengthUnitType\" table column between \"StrengthUnitType\" table column in PDDB database within on prem server and \"StrengthUnitType\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"StrengthUnitType\" table data count between \"StrengthUnitType\" table data in PDDB_LP database within on prem server and \"StrengthUnitType\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify DeviceSettingMax Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"DeviceSettingMax\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"DeviceSettingMax\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"DeviceSettingMax\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DeviceSettingMax\" table column between \"DeviceSettingMax\" table column in PDDB database within on prem server and \"DeviceSettingMax\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"DeviceSettingMax\" table data count between \"DeviceSettingMax\" table data in PDDB_LP database within on prem server and \"DeviceSettingMax\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c31457\u003e but was:\u003c31481\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(OnPremAzureTableDataAndColumnvalidationTest.java:26)\r\n\tat ✽.user should verify \"DeviceSettingMax\" table data count between \"DeviceSettingMax\" table data in PDDB_LP database within on prem server and \"DeviceSettingMax\" table data in PDDB_LP database within azure server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/data-and-column-test-between-onprem-azure-table.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Coating Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugColor Table Data Test between PDDB_LP and PDDB"
    },
    {
      "name": "@dataFile:drug_database_test_data/column-data-count-between-azure-and-onprem-table.xls"
    }
  ]
});
formatter.step({
  "name": "connection setup with \"PDDB\" database from on prem lan server",
  "keyword": "When "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDBDatabaseFromOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"Coating\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"Coating\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userCountDataFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection setup with \"PDDB_LP\" database from azure server",
  "keyword": "Then "
});
formatter.match({
  "location": "step.DatabaseProcessTest.connectionSetupWithPDDB_LPDatabaseFromAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should check \"Coating\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Coating\" table column between \"Coating\" table column in PDDB database within on prem server and \"Coating\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify \"Coating\" table data count between \"Coating\" table data in PDDB_LP database within on prem server and \"Coating\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureTableDataAndColumnvalidationTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});