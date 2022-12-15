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
formatter.uri("file:src/test/resources/feature/azure-cddb-pddbdrugs.feature");
formatter.feature({
  "name": "PDDBDrugs Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify PDDBDrugs Table Data and column Test between PDDB_LP and DrugDB Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:PDDBDrugs Table Data and column Test between PDDB_LP and DrugDB Database"
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
  "name": "user should check \"SP_PDDB_Drug_Information_Api\" procedure from PDDB_LP database in azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckProcedureFromPDDB_LPDatabaseInAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get column from \"SP_PDDB_Drug_Information_Api\" procedure in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userGetColumnFromProcedureInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get data count from \"SP_PDDB_Drug_Information_Api\" procedure in PDDB_LP database within azure server",
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
  "name": "user should check \"PDDBDrugs\" table from DrugDB database in CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.DatabaseProcessTest.userShouldCheckTableFromDrugDBDatabaseInCDDBServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify PDDBDrugs table column between SP_PDDB_Drug_Information_Api procedure column in PDDB_LP database within azure server and \"PDDBDrugs\" table column in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBPDDBDrugsTest.userShouldVerifyPDDBDrugsTableColumnBetweenSP_PDDB_Drug_Information_ApiProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat step.AzureCDDBPDDBDrugsTest.userShouldVerifyPDDBDrugsTableColumnBetweenSP_PDDB_Drug_Information_ApiProcedureColumnInPDDB_LPDatabaseWithinAzureServerAndTableColumnInDrugDBDatabaseWithinCDDBServer(AzureCDDBPDDBDrugsTest.java:15)\r\n\tat ✽.user should verify PDDBDrugs table column between SP_PDDB_Drug_Information_Api procedure column in PDDB_LP database within azure server and \"PDDBDrugs\" table column in DrugDB database within CDDB server(file:///F:/Ether/Ether/QA/parata-database-testing-qa/src/test/resources/feature/azure-cddb-pddbdrugs.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify PDDBDrugs table data count between SP_PDDB_Drug_Information_Api procedure data in PDDB_LP database within azure server and \"PDDBDrugs\" table data in DrugDB database within CDDB server",
  "keyword": "And "
});
formatter.match({
  "location": "step.AzureCDDBPDDBDrugsTest.userShouldVerifyPDDBDrugsTableDataCountBetweenSP_PDDB_Drug_Information_ApiProcedureDataInPDDB_LPDatabaseWithinAzureServerAndTableDataInDrugDBDatabaseWithinCDDBServer(java.lang.String)"
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
  "location": "step.OnPremAzureClassificationShapeTest.userShouldVerifyClassificationShapeTableColumnBetweenClassificationShapeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify ClassificationShape table data count between ClassificationShape table data in PDDB_LP database within on prem server and \"ClassificationShape\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureClassificationShapeTest.userShouldVerifyClassificationShapeTableDataCountBetweenClassificationShapeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-coating.feature");
formatter.feature({
  "name": "Coating Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Coating Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Coating Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify Coating table column between Coating table column in PDDB database within on prem server and \"Coating\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureCoatingTest.userShouldVerifyDrugShapeTableColumnBetweenDrugShapeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Coating table data count between Coating table data in PDDB_LP database within on prem server and \"Coating\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureCoatingTest.userShouldVerifyDrugShapeTableDataCountBetweenDrugShapeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-devicesettingmax.feature");
formatter.feature({
  "name": "DrugName Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugName Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugName Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DrugName table column between DrugName table column in PDDB database within on prem server and \"DrugName\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugNameTest.userShouldVerifyDrugNameTableColumnBetweenDrugNameTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugName table data count between DrugName table data in PDDB_LP database within on prem server and \"DrugName\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugNameTest.userShouldVerifyDrugNameTableDataCountBetweenDrugNameTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-dosageform.feature");
formatter.feature({
  "name": "DosageForm Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DosageForm Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DosageForm Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DosageForm table column between DosageForm table column in PDDB database within on prem server and \"DosageForm\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDosageFormTest.userShouldVerifyDosageFormTableColumnBetweenDosageFormTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DosageForm table data count between DosageForm table data in PDDB_LP database within on prem server and \"DosageForm\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDosageFormTest.userShouldVerifyDosageFormTableDataCountBetweenDosageFormTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-drugattribute.feature");
formatter.feature({
  "name": "DrugAttribute Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugAttribute Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugAttribute Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DrugAttribute table column between DrugAttribute table column in PDDB database within on prem server and \"DrugAttribute\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugAttributeTest.userShouldVerifyDrugAttributeTableColumnBetweenDrugAttributeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugAttribute table data count between DrugAttribute table data in PDDB_LP database within on prem server and \"DrugAttribute\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugAttributeTest.userShouldVerifyDrugAttributeTableDataCountBetweenDrugAttributeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-drugcolor.feature");
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
  "name": "user should verify DrugColor table column between DrugColor table column in PDDB database within on prem server and \"DrugColor\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugColorTest.userShouldVerifyDrugColorTableColumnBetweenDrugColorTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugColor table data count between DrugColor table data in PDDB_LP database within on prem server and \"DrugColor\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugColorTest.userShouldVerifyDrugColorTableDataCountBetweenDrugColorTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-drugcore.feature");
formatter.feature({
  "name": "DrugCore Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugCore Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugCore Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DrugCore table column between DrugCore table column in PDDB database within on prem server and \"DrugCore\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnpremAzureDrugCoreTest.userShouldVerifyDrugCoreTableColumnBetweenDrugCoreTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugCore table data count between DrugCore table data in PDDB_LP database within on prem server and \"DrugCore\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnpremAzureDrugCoreTest.userShouldVerifyDrugCoreTableDataCountBetweenDrugCoreTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-drugname.feature");
formatter.feature({
  "name": "DrugName Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugName Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugName Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DrugName table column between DrugName table column in PDDB database within on prem server and \"DrugName\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugNameTest.userShouldVerifyDrugNameTableColumnBetweenDrugNameTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugName table data count between DrugName table data in PDDB_LP database within on prem server and \"DrugName\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugNameTest.userShouldVerifyDrugNameTableDataCountBetweenDrugNameTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
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
formatter.uri("file:src/test/resources/feature/onprem-azure-drugshape.feature");
formatter.feature({
  "name": "DrugShape Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify DrugShape Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DrugShape Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify DrugShape table column between DrugShape table column in PDDB database within on prem server and \"DrugShape\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugShapeTest.userShouldVerifyDrugShapeTableColumnBetweenDrugShapeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify DrugShape table data count between DrugShape table data in PDDB_LP database within on prem server and \"DrugShape\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureDrugShapeTest.userShouldVerifyDrugShapeTableDataCountBetweenDrugShapeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-firm.feature");
formatter.feature({
  "name": "Firm Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Firm Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Firm Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify Firm table column between Firm table column in PDDB database within on prem server and \"Firm\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureFirmTest.userShouldVerifyFirmTableColumnBetweenFirmTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Firm table data count between Firm table data in PDDB_LP database within on prem server and \"Firm\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureFirmTest.userShouldVerifyFirmTableDataCountBetweenFirmTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
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
formatter.uri("file:src/test/resources/feature/onprem-azure-measurements.feature");
formatter.feature({
  "name": "Measurements Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Measurements Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Measurements Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify Measurements table column between Measurements table column in PDDB database within on prem server and \"Measurements\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureMeasurementsTest.userShouldVerifyMeasurementsTableColumnBetweenMeasurementsTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify Measurements table data count between Measurements table data in PDDB_LP database within on prem server and \"Measurements\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureMeasurementsTest.userShouldVerifyMeasurementsTableDataCountBetweenMeasurementsTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-passcanister.feature");
formatter.feature({
  "name": "PassCanister Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify PassCanister Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:PassCanister Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify PassCanister table column between PassCanister table column in PDDB database within on prem server and \"PassCanister\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzurePassCanisterTest.userShouldVerifyPassCanisterTableColumnBetweenPassCanisterTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify PassCanister table data count between PassCanister table data in PDDB_LP database within on prem server and \"PassCanister\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzurePassCanisterTest.userShouldVerifyPassCanisterTableDataCountBetweenPassCanisterTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-passdrugcanister.feature");
formatter.feature({
  "name": "PassDrugCanister Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify PassDrugCanister Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:PassDrugCanister Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify PassDrugCanister table column between PassDrugCanister table column in PDDB database within on prem server and \"PassDrugCanister\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzurePassDrugCanisterTest.userShouldVerifyPassDrugCanisterTableColumnBetweenPassDrugCanisterTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify PassDrugCanister table data count between PassDrugCanister table data in PDDB_LP database within on prem server and \"PassDrugCanister\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzurePassDrugCanisterTest.userShouldVerifyPassDrugCanisterTableDataCountBetweenPassDrugCanisterTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/onprem-azure-passscenariodrug.feature");
formatter.feature({
  "name": "PassScenarioDrug Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify PassScenarioDrug Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:PassScenarioDrug Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify PassScenarioDrug table column between PassScenarioDrug table column in PDDB database within on prem server and \"PassScenarioDrug\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzurePassScenarioDrugTest.userShouldVerifyPassScenarioDrugTableColumnBetweenPassScenarioDrugTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify PassScenarioDrug table data count between PassScenarioDrug table data in PDDB_LP database within on prem server and \"PassScenarioDrug\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzurePassScenarioDrugTest.userShouldVerifyPassScenarioDrugTableDataCountBetweenPassScenarioDrugTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
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
formatter.uri("file:src/test/resources/feature/onprem-azure-strengthunittype.feature");
formatter.feature({
  "name": "StrengthUnitType Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify StrengthUnitType Table Data Test between PDDB_LP and PDDB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:StrengthUnitType Table Data Test between PDDB_LP and PDDB"
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
  "name": "user should verify StrengthUnitType table column between StrengthUnitType table column in PDDB database within on prem server and \"StrengthUnitType\" table column in PDDB_LP database within Azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureStrengthUnitTypeTest.userShouldVerifyStrengthUnitTypeTableColumnBetweenStrengthUnitTypeTableColumnInPDDBDatabaseWithinOnPremServerAndTableColumnInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify StrengthUnitType table data count between StrengthUnitType table data in PDDB_LP database within on prem server and \"StrengthUnitType\" table data in PDDB_LP database within azure server",
  "keyword": "And "
});
formatter.match({
  "location": "step.OnPremAzureStrengthUnitTypeTest.userShouldVerifyStrengthUnitTypeTableDataCountBetweenStrengthUnitTypeTableDataInPDDB_LPDatabaseWithinOnPremServerAndTableDataInPDDB_LPDatabaseWithinAzureServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});