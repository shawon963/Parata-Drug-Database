$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/azure-cddb-classificationshape.feature");
formatter.feature({
  "name": "ClassificationShape Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify ClassificationShape Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:ClassificationShape Table Data and column Test between PDDB_LP and DrugDB Database"
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
  "name": "user should verify ClassificationShape table column between SP_Pull_ClassificationShape procedure column in PDDB_LP database within azure server and \"ClassificationShape\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBClassificationShapeTest.userShouldVerifyClassificationShapeTableColumnBetweenSP_Pull_ClassificationShapeProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify ClassificationShape table data count between SP_Pull_ClassificationShape procedure data in PDDB_LP database within azure server and \"ClassificationShape\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBClassificationShapeTest.userShouldVerifyClassificationShapeTableDataCountBetweenSP_Pull_ClassificationShapeProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/azure-cddb-drugnoncountreason.feature");
formatter.feature({
  "name": "DrugNonCountReason Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugNonCountReason Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugNonCountReason Table Data and column Test between PDDB_LP and DrugDB Database"
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
  "name": "user should verify DrugNonCountReason table column between SP_Pull_DrugNonCountReason procedure column in PDDB_LP database within azure server and \"DrugNonCountReason\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBDrugNonCountReasonTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenSP_Pull_DrugNonCountReasonProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugNonCountReason table data count between SP_Pull_DrugNonCountReason procedure data in PDDB_LP database within azure server and \"DrugNonCountReason\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBDrugNonCountReasonTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenSP_Pull_DrugNonCountReasonProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/azure-cddb-drugstatus.feature");
formatter.feature({
  "name": "DrugStatus Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugStatus Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugStatus Table Data and column Test between PDDB_LP and DrugDB Database"
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
  "name": "user should verify DrugStatus table column between SP_Pull_Status procedure column in PDDB_LP database within azure server and \"DrugStatus\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBDrugStatusTest.userShouldVerifyDrugStatusTableColumnBetweenSP_Pull_StatusProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat step.AzureCDDBDrugStatusTest.userShouldVerifyDrugStatusTableColumnBetweenSP_Pull_StatusProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBDrugStatusTest.java:15)\r\n\tat ✽.user should verify DrugStatus table column between SP_Pull_Status procedure column in PDDB_LP database within azure server and \"DrugStatus\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-drugstatus.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify DrugStatus table data count between SP_Pull_Status procedure data in PDDB_LP database within azure server and \"DrugStatus\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBDrugStatusTest.userShouldVerifyDrugStatusTableDataCountBetweenSP_Pull_StatusProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/feature/azure-cddb-inventory.feature");
formatter.feature({
  "name": "Inventory Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Inventory Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Inventory Table Data and column Test between PDDB_LP and DrugDB Database"
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
  "name": "user should verify Inventory table column between SP_Pull_Inventory procedure column in PDDB_LP database within azure server and \"Inventory\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBInventoryTest.userShouldVerifyInventoryTableColumnBetweenSP_Pull_InventoryProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat step.AzureCDDBInventoryTest.userShouldVerifyInventoryTableColumnBetweenSP_Pull_InventoryProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBInventoryTest.java:15)\r\n\tat ✽.user should verify Inventory table column between SP_Pull_Inventory procedure column in PDDB_LP database within azure server and \"Inventory\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-inventory.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify Inventory table data count between SP_Pull_Inventory procedure data in PDDB_LP database within azure server and \"Inventory\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBInventoryTest.userShouldVerifyInventoryTableDataCountBetweenSP_Pull_InventoryProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/feature/azure-cddb-statustype.feature");
formatter.feature({
  "name": "StatusType Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify StatusType Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:StatusType Table Data and column Test between PDDB_LP and DrugDB Database"
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
  "name": "user should verify StatusType table column between SP_Pull_StatusType procedure column in PDDB_LP database within azure server and \"StatusType\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBStatusTypeTest.userShouldVerifyStatusTypeTableColumnBetweenSP_Pull_StatusTypeProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat step.AzureCDDBStatusTypeTest.userShouldVerifyStatusTypeTableColumnBetweenSP_Pull_StatusTypeProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBStatusTypeTest.java:15)\r\n\tat ✽.user should verify StatusType table column between SP_Pull_StatusType procedure column in PDDB_LP database within azure server and \"StatusType\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-statustype.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify StatusType table data count between SP_Pull_StatusType procedure data in PDDB_LP database within azure server and \"StatusType\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBStatusTypeTest.userShouldVerifyStatusTypeTableDataCountBetweenSP_Pull_StatusTypeProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-classificationshape.feature");
formatter.feature({
  "name": "ClassificationShape Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify ClassificationShape Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:ClassificationShape Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify ClassificationShape table column between ClassificationShape table column in PDDB database within on prem server and \"ClassificationShape\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremClassificationShapeTest.userShouldVerifyClassificationShapeTableColumnBetweenClassificationShapeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify ClassificationShape table data count between ClassificationShape table data in PDDB_LP database within on prem server and \"ClassificationShape\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremClassificationShapeTest.userShouldVerifyClassificationShapeTableDataCountBetweenClassificationShapeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-drugnoncountreason.feature");
formatter.feature({
  "name": "DrugNonCountReason Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugNonCountReason Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugNonCountReason Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DrugNonCountReason table column between DrugNonCountReason table column in PDDB database within on prem server and \"DrugNonCountReason\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugNonCountReasonTest.userShouldVerifyDrugNonCountReasonTableColumnBetweenDrugNonCountReasonTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugNonCountReason table data count between DrugNonCountReason table data in PDDB_LP database within on prem server and \"DrugNonCountReason\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugNonCountReasonTest.userShouldVerifyDrugNonCountReasonTableDataCountBetweenDrugNonCountReasonTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-inventory.feature");
formatter.feature({
  "name": "Inventory Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Inventory Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Inventory Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify Inventory table column between Inventory table column in PDDB database within on prem server and \"Inventory\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureInventoryTest.userShouldVerifyInventoryTableColumnBetweenInventoryTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Inventory table data count between Inventory table data in PDDB_LP database within on prem server and \"Inventory\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureInventoryTest.userShouldVerifyInventoryTableDataCountBetweenInventoryTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-status.feature");
formatter.feature({
  "name": "Status Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Status Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Status Table Data Test between PDDB_LP and PDDB"
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
  "name": "user get column from \"Status\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"Status\" table from PDDB database within on prem lan server",
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
  "name": "user should check \"Status\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Status table column between Status table column in PDDB database within on prem server and \"Status\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureStatusTest.userShouldVerifyStatusTableColumnBetweenStatusTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Status table data count between Status table data in PDDB_LP database within on prem server and \"Status\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureStatusTest.userShouldVerifyStatusTableDataCountBetweenStatusTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-statustype.feature");
formatter.feature({
  "name": "StatusType Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify StatusType Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:StatusType Table Data Test between PDDB_LP and PDDB"
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
  "name": "user get column from \"StatusType\" table from PDDB database within on prem lan server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromTableFromPDDBDatabaseWithinOnPremLanServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user count data from \"StatusType\" table from PDDB database within on prem lan server",
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
  "name": "user should check \"StatusType\" table from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify StatusType table column between StatusType table column in PDDB database within on prem server and \"StatusType\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureStatusTypeTest.userShouldVerifyStatusTypeTableColumnBetweenStatusTypeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify StatusType table data count between StatusType table data in PDDB_LP database within on prem server and \"StatusType\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureStatusTypeTest.userShouldVerifyStatusTypeTableDataCountBetweenStatusTypeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});