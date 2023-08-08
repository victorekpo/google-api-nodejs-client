// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace documentai_v1beta3 {
  export interface Options extends GlobalOptions {
    version: 'v1beta3';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Document AI API
   *
   * Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const documentai = google.documentai('v1beta3');
   * ```
   */
  export class Documentai {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Metadata of the auto-labeling documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * The list of individual auto-labeling statuses of the dataset documents.
     */
    individualAutoLabelStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus[];
    /**
     * Total number of the auto-labeling documents.
     */
    totalDocumentCount?: number | null;
  }
  /**
   * The status of individual documents in the auto-labeling process.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus {
    /**
     * The gcs_uri of the auto-labeling document, which uniquely identifies a dataset document.
     */
    gcsUri?: string | null;
    /**
     * The status of the document auto-labeling.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * The response proto of AutoLabelDocuments method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponse {}
  export interface Schema$GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * Total number of documents that failed to be deleted in storage.
     */
    errorDocumentCount?: number | null;
    /**
     * The list of response details of each document.
     */
    individualBatchDeleteStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus[];
    /**
     * Total number of documents deleting from dataset.
     */
    totalDocumentCount?: number | null;
  }
  /**
   * The status of each individual document in the batch delete process.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus {
    /**
     * The document id of the document.
     */
    documentId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentId;
    /**
     * The status of deleting the document in storage.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Response of the delete documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponse {}
  export interface Schema$GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * The destination dataset split type.
     */
    destDatasetType?: string | null;
    /**
     * The destination dataset split type.
     */
    destSplitType?: string | null;
    /**
     * The list of response details of each document.
     */
    individualBatchMoveStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus[];
  }
  /**
   * The status of each individual document in the batch move process.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus {
    /**
     * The document id of the document.
     */
    documentId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentId;
    /**
     * The status of moving the document.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Response of the batch move documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponse {}
  /**
   * The common metadata for long running operations.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * A related resource to this operation.
     */
    resource?: string | null;
    /**
     * The state of the operation.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The long-running operation metadata for the CreateLabelerPool method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for DeleteLabelerPool.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeleteProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeleteProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response message for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse {}
  /**
   * The long-running operation metadata for the DisableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse {}
  /**
   * Document Identifier.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DocumentId {
    /**
     * A document id within user-managed Cloud Storage.
     */
    gcsManagedDocId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId;
    /**
     * Points to a specific revision of the document if set.
     */
    revisionRef?: Schema$GoogleCloudDocumentaiUiv1beta3RevisionRef;
    /**
     * A document id within unmanaged dataset.
     */
    unmanagedDocId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentId;
  }
  /**
   * Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId {
    /**
     * Id of the document (indexed) managed by Content Warehouse.
     */
    cwDocId?: string | null;
    /**
     * Required. The Cloud Storage URI where the actual document is stored.
     */
    gcsUri?: string | null;
  }
  /**
   * Identifies a document uniquely within the scope of a dataset in unmanaged option.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentId {
    /**
     * Required. The id of the document.
     */
    docId?: string | null;
  }
  /**
   * The long-running operation metadata for the EnableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse {}
  /**
   * Metadata of the EvaluateProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response of the EvaluateProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponse {
    /**
     * The resource name of the created evaluation.
     */
    evaluation?: string | null;
  }
  /**
   * Metadata of the batch export documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * The list of response details of each document.
     */
    individualExportStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus[];
    /**
     * The list of statistics for each dataset split type.
     */
    splitExportStats?: Schema$GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat[];
  }
  /**
   * The status of each individual document in the export process.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus {
    /**
     * The path to source docproto of the document.
     */
    documentId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentId;
    /**
     * The output_gcs_destination of the exported document if it was successful, otherwise empty.
     */
    outputGcsDestination?: string | null;
    /**
     * The status of the exporting of the document.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * The statistic representing a dataset split type for this export.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat {
    /**
     * The dataset split type.
     */
    splitType?: string | null;
    /**
     * Total number of documents with the given dataset split type to be exported.
     */
    totalDocumentCount?: number | null;
  }
  /**
   * The response proto of ExportDocuments method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponse {}
  /**
   * Metadata message associated with the ExportProcessorVersion operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadata {
    /**
     * The common metadata about the operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response message associated with the ExportProcessorVersion operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse {
    /**
     * The Cloud Storage URI containing the output artifacts.
     */
    gcsUri?: string | null;
  }
  /**
   * Metadata of the import document operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * Validation statuses of the batch documents import config.
     */
    importConfigValidationResults?: Schema$GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult[];
    /**
     * The list of response details of each document.
     */
    individualImportStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus[];
    /**
     * Total number of the documents that are qualified for importing.
     */
    totalDocumentCount?: number | null;
  }
  /**
   * The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult {
    /**
     * The source Cloud Storage URI specified in the import config.
     */
    inputGcsSource?: string | null;
    /**
     * The validation status of import config.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * The status of each individual document in the import process.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus {
    /**
     * The source Cloud Storage URI of the document.
     */
    inputGcsSource?: string | null;
    /**
     * The document id of imported document if it was successful, otherwise empty.
     */
    outputDocumentId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentId;
    /**
     * The output_gcs_destination of the processed document if it was successful, otherwise empty.
     */
    outputGcsDestination?: string | null;
    /**
     * The status of the importing of the document.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Response of the import document operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponse {}
  /**
   * The long-running operation metadata for the ImportProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadata {
    /**
     * The basic metadata for the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The response message for the ImportProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponse {
    /**
     * The destination processor version name.
     */
    processorVersion?: string | null;
  }
  /**
   * The metadata proto of ResyncDataset method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * The list of dataset resync statuses. Not checked when `dataset_documents` is specified in ResyncRequest.
     */
    datasetResyncStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus[];
    /**
     * The list of document resync statuses. The same document could have multiple `individual_document_resync_statuses` if it has multiple inconsistencies.
     */
    individualDocumentResyncStatuses?: Schema$GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus[];
  }
  /**
   * Resync status against inconsistency types on the dataset level.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus {
    /**
     * The type of the inconsistency of the dataset.
     */
    datasetInconsistencyType?: string | null;
    /**
     * The status of resyncing the dataset with regards to the detected inconsistency. Empty if `validate_only` is true in the request.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Resync status for each document per inconsistency type.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus {
    /**
     * The document identifier.
     */
    documentId?: Schema$GoogleCloudDocumentaiUiv1beta3DocumentId;
    /**
     * The type of document inconsistency.
     */
    documentInconsistencyType?: string | null;
    /**
     * The status of resyncing the document with regards to the detected inconsistency. Empty if `validate_only` is true in the request.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * The response proto of ResyncDataset method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponse {}
  /**
   * The revision reference specifies which revision on the document to read.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3RevisionRef {
    /**
     * Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    latestProcessorVersion?: string | null;
    /**
     * Reads the revision by the predefined case.
     */
    revisionCase?: string | null;
    /**
     * Reads the revision given by the id.
     */
    revisionId?: string | null;
  }
  /**
   * Metadata of the sample documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3SampleDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response of the sample documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse {
    /**
     * The status of sampling documents in test split.
     */
    sampleTestStatus?: Schema$GoogleRpcStatus;
    /**
     * The status of sampling documents in training split.
     */
    sampleTrainingStatus?: Schema$GoogleRpcStatus;
    /**
     * The result of the sampling process.
     */
    selectedDocuments?: Schema$GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocument[];
  }
  export interface Schema$GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocument {
    /**
     * An internal identifier for document.
     */
    documentId?: string | null;
  }
  /**
   * The long-running operation metadata for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response message for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponse {}
  /**
   * The metadata that represents a processor version being created.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
    /**
     * The test dataset validation information.
     */
    testDatasetValidation?: Schema$GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation;
    /**
     * The training dataset validation information.
     */
    trainingDatasetValidation?: Schema$GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation;
  }
  /**
   * The dataset validation information. This includes any and all errors with documents and the dataset.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation {
    /**
     * The total number of dataset errors.
     */
    datasetErrorCount?: number | null;
    /**
     * Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.
     */
    datasetErrors?: Schema$GoogleRpcStatus[];
    /**
     * The total number of document errors.
     */
    documentErrorCount?: number | null;
    /**
     * Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.
     */
    documentErrors?: Schema$GoogleRpcStatus[];
  }
  /**
   * The response for TrainProcessorVersion.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponse {
    /**
     * The resource name of the processor version produced by training.
     */
    processorVersion?: string | null;
  }
  /**
   * The long-running operation metadata for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * Response message for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse {}
  export interface Schema$GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for updating the human review configuration.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for UpdateLabelerPool.
   */
  export interface Schema$GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for BatchProcessDocuments.
   */
  export interface Schema$GoogleCloudDocumentaiV1BatchProcessMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The list of response details of each document.
     */
    individualProcessStatuses?: Schema$GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus[];
    /**
     * The state of the current batch processing.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing. For example, the error message if the operation is failed.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The status of a each individual document in the batch process.
   */
  export interface Schema$GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus {
    /**
     * The status of human review on the processed document.
     */
    humanReviewStatus?: Schema$GoogleCloudDocumentaiV1HumanReviewStatus;
    /**
     * The source of the document, same as the input_gcs_source field in the request when the batch process started.
     */
    inputGcsSource?: string | null;
    /**
     * The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty.
     */
    outputGcsDestination?: string | null;
    /**
     * The status processing the document.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Response message for BatchProcessDocuments.
   */
  export interface Schema$GoogleCloudDocumentaiV1BatchProcessResponse {}
  /**
   * Encodes the detailed information of a barcode.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1Barcode {
    /**
     * Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.
     */
    format?: string | null;
    /**
     * Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.
     */
    rawValue?: string | null;
    /**
     * Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.
     */
    valueFormat?: string | null;
  }
  /**
   * Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse {
    /**
     * Responses for each individual document.
     */
    responses?: Schema$GoogleCloudDocumentaiV1beta1ProcessDocumentResponse[];
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDocumentaiV1beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudDocumentaiV1beta1Vertex[];
  }
  /**
   * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1Document {
    /**
     * Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
     */
    entities?: Schema$GoogleCloudDocumentaiV1beta1DocumentEntity[];
    /**
     * Placeholder. Relationship among Document.entities.
     */
    entityRelations?: Schema$GoogleCloudDocumentaiV1beta1DocumentEntityRelation[];
    /**
     * Any error that occurred while processing this document.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml).
     */
    mimeType?: string | null;
    /**
     * Visual page layout for the Document.
     */
    pages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPage[];
    /**
     * Placeholder. Revision history of this document.
     */
    revisions?: Schema$GoogleCloudDocumentaiV1beta1DocumentRevision[];
    /**
     * Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.
     */
    shardInfo?: Schema$GoogleCloudDocumentaiV1beta1DocumentShardInfo;
    /**
     * Optional. UTF-8 encoded text in reading order from the document.
     */
    text?: string | null;
    /**
     * Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
     */
    textChanges?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextChange[];
    /**
     * Styles for the Document.text.
     */
    textStyles?: Schema$GoogleCloudDocumentaiV1beta1DocumentStyle[];
    /**
     * Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris).
     */
    uri?: string | null;
  }
  /**
   * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentEntity {
    /**
     * Optional. Confidence of detected Schema entity. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Optional. Canonical id. This will be a unique value in the entity list for this document.
     */
    id?: string | null;
    /**
     * Optional. Deprecated. Use `id` field instead.
     */
    mentionId?: string | null;
    /**
     * Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.
     */
    mentionText?: string | null;
    /**
     * Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.
     */
    normalizedValue?: Schema$GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue;
    /**
     * Optional. Represents the provenance of this entity wrt. the location on the page where it was found.
     */
    pageAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageAnchor;
    /**
     * Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
     */
    properties?: Schema$GoogleCloudDocumentaiV1beta1DocumentEntity[];
    /**
     * Optional. The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
    /**
     * Optional. Whether the entity will be redacted for de-identification purposes.
     */
    redacted?: boolean | null;
    /**
     * Optional. Provenance of the entity. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
    /**
     * Required. Entity type from a schema e.g. `Address`.
     */
    type?: string | null;
  }
  /**
   * Parsed and normalized entity value.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue {
    /**
     * Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto
     */
    addressValue?: Schema$GoogleTypePostalAddress;
    /**
     * Boolean value. Can be used for entities with binary values, or for checkboxes.
     */
    booleanValue?: boolean | null;
    /**
     * DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto
     */
    datetimeValue?: Schema$GoogleTypeDateTime;
    /**
     * Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto
     */
    dateValue?: Schema$GoogleTypeDate;
    /**
     * Float value.
     */
    floatValue?: number | null;
    /**
     * Integer value.
     */
    integerValue?: number | null;
    /**
     * Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto
     */
    moneyValue?: Schema$GoogleTypeMoney;
    /**
     * Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.
     */
    text?: string | null;
  }
  /**
   * Relationship between Entities.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentEntityRelation {
    /**
     * Object entity id.
     */
    objectId?: string | null;
    /**
     * Relationship description.
     */
    relation?: string | null;
    /**
     * Subject entity id.
     */
    subjectId?: string | null;
  }
  /**
   * A page in a Document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPage {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageBlock[];
    /**
     * A list of detected barcodes.
     */
    detectedBarcodes?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Physical dimension of the page.
     */
    dimension?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageFormField[];
    /**
     * Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.
     */
    image?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageImage;
    /**
     * Image quality scores.
     */
    imageQualityScores?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores;
    /**
     * Layout for the page.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number | null;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageParagraph[];
    /**
     * The history of this page.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
    /**
     * A list of visually detected symbols on the page.
     */
    symbols?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageSymbol[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageToken[];
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     */
    transforms?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageMatrix[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageVisualElement[];
  }
  /**
   * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageAnchor {
    /**
     * One or more references to visual page elements
     */
    pageRefs?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef[];
  }
  /**
   * Represents a weak reference to a page element within a document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef {
    /**
     * Optional. Identifies the bounding polygon of a layout element on the page.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta1BoundingPoly;
    /**
     * Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Optional. Deprecated. Use PageRef.bounding_poly instead.
     */
    layoutId?: string | null;
    /**
     * Optional. The type of the layout element that is being referenced if any.
     */
    layoutType?: string | null;
    /**
     * Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.
     */
    page?: string | null;
  }
  /**
   * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageBlock {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Block.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
  }
  /**
   * A detected barcode.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode {
    /**
     * Detailed barcode information of the DetectedBarcode.
     */
    barcode?: Schema$GoogleCloudDocumentaiV1beta1Barcode;
    /**
     * Layout for DetectedBarcode.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage {
    /**
     * Confidence of detected language. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`.
     */
    languageCode?: string | null;
  }
  /**
   * Dimension for the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageDimension {
    /**
     * Page height.
     */
    height?: number | null;
    /**
     * Dimension unit.
     */
    unit?: string | null;
    /**
     * Page width.
     */
    width?: number | null;
  }
  /**
   * A form field detected on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageFormField {
    /**
     * Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.
     */
    correctedKeyText?: string | null;
    /**
     * Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.
     */
    correctedValueText?: string | null;
    /**
     * Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.
     */
    fieldName?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * Layout for the FormField value.
     */
    fieldValue?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * A list of detected languages for name together with confidence.
     */
    nameDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
    /**
     * A list of detected languages for value together with confidence.
     */
    valueDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`
     */
    valueType?: string | null;
  }
  /**
   * Rendered image contents for this page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageImage {
    /**
     * Raw byte content of the image.
     */
    content?: string | null;
    /**
     * Height of the image in pixels.
     */
    height?: number | null;
    /**
     * Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image.
     */
    mimeType?: string | null;
    /**
     * Width of the image in pixels.
     */
    width?: number | null;
  }
  /**
   * Image quality scores for the page image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores {
    /**
     * A list of detected defects.
     */
    detectedDefects?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect[];
    /**
     * The overall quality score. Range `[0, 1]` where `1` is perfect quality.
     */
    qualityScore?: number | null;
  }
  /**
   * Image Quality Defects
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect {
    /**
     * Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists.
     */
    confidence?: number | null;
    /**
     * Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`
     */
    type?: string | null;
  }
  /**
   * Visual element describing a layout unit on a page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout {
    /**
     * The bounding polygon for the Layout.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta1BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
  }
  /**
   * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageLine {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Line.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
  }
  /**
   * Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageMatrix {
    /**
     * Number of columns in the matrix.
     */
    cols?: number | null;
    /**
     * The matrix data.
     */
    data?: string | null;
    /**
     * Number of rows in the matrix.
     */
    rows?: number | null;
    /**
     * This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html
     */
    type?: number | null;
  }
  /**
   * A collection of lines that a human would perceive as a paragraph.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageParagraph {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Paragraph.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
  }
  /**
   * A detected symbol.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageSymbol {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Symbol.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
  }
  /**
   * A table representation similar to HTML table structure.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTable {
    /**
     * Body rows of the table.
     */
    bodyRows?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow[];
    /**
     * Layout for Table.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * The history of this table.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
  }
  /**
   * A cell representation inside the table.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number | null;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for TableCell.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number | null;
  }
  /**
   * A row of table cells.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow {
    /**
     * Cells that make up this row.
     */
    cells?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell[];
  }
  /**
   * A detected token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageToken {
    /**
     * Detected break at the end of a Token.
     */
    detectedBreak?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for Token.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance;
    /**
     * Text style attributes.
     */
    styleInfo?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfo;
  }
  /**
   * Detected break at the end of a Token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak {
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Font and other text style attributes.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfo {
    /**
     * Color of the background.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Whether the text is bold (equivalent to font_weight is at least `700`).
     */
    bold?: boolean | null;
    /**
     * Font size in points (`1` point is `¹⁄₇₂` inches).
     */
    fontSize?: number | null;
    /**
     * Name or style of the font.
     */
    fontType?: string | null;
    /**
     * TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`.
     */
    fontWeight?: number | null;
    /**
     * Whether the text is handwritten.
     */
    handwritten?: boolean | null;
    /**
     * Whether the text is italic.
     */
    italic?: boolean | null;
    /**
     * Letter spacing in points.
     */
    letterSpacing?: number | null;
    /**
     * Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`.
     */
    pixelFontSize?: number | null;
    /**
     * Whether the text is in small caps.
     */
    smallcaps?: boolean | null;
    /**
     * Whether the text is strikethrough.
     */
    strikeout?: boolean | null;
    /**
     * Whether the text is a subscript.
     */
    subscript?: boolean | null;
    /**
     * Whether the text is a superscript.
     */
    superscript?: boolean | null;
    /**
     * Color of the text.
     */
    textColor?: Schema$GoogleTypeColor;
    /**
     * Whether the text is underlined.
     */
    underlined?: boolean | null;
  }
  /**
   * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentPageVisualElement {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage[];
    /**
     * Layout for VisualElement.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta1DocumentPageLayout;
    /**
     * Type of the VisualElement.
     */
    type?: string | null;
  }
  /**
   * Structure to identify provenance relationships between annotations in different revisions.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance {
    /**
     * The Id of this operation. Needs to be unique within the scope of the revision.
     */
    id?: number | null;
    /**
     * References to the original elements that are replaced.
     */
    parents?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenanceParent[];
    /**
     * The index of the revision that produced this element.
     */
    revision?: number | null;
    /**
     * The type of provenance operation.
     */
    type?: string | null;
  }
  /**
   * The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentProvenanceParent {
    /**
     * The id of the parent provenance.
     */
    id?: number | null;
    /**
     * The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.
     */
    index?: number | null;
    /**
     * The index of the index into current revision's parent_ids list.
     */
    revision?: number | null;
  }
  /**
   * Contains past or forward revisions of this document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentRevision {
    /**
     * If the change was made by a person specify the name or id of that person.
     */
    agent?: string | null;
    /**
     * The time that the revision was created, internally generated by doc proto storage at the time of create.
     */
    createTime?: string | null;
    /**
     * Human Review information of this revision.
     */
    humanReview?: Schema$GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview;
    /**
     * Id of the revision, internally generated by doc proto storage. Unique within the context of the document.
     */
    id?: string | null;
    /**
     * The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.
     */
    parent?: number[] | null;
    /**
     * The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.
     */
    parentIds?: string[] | null;
    /**
     * If the annotation was made by processor identify the processor by its resource name.
     */
    processor?: string | null;
  }
  /**
   * Human Review information of the document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview {
    /**
     * Human review state. e.g. `requested`, `succeeded`, `rejected`.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.
     */
    stateMessage?: string | null;
  }
  /**
   * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentShardInfo {
    /**
     * Total number of shards.
     */
    shardCount?: string | null;
    /**
     * The 0-based index of this shard.
     */
    shardIndex?: string | null;
    /**
     * The index of the first character in Document.text in the overall document global text.
     */
    textOffset?: string | null;
  }
  /**
   * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentStyle {
    /**
     * Text background color.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Text color.
     */
    color?: Schema$GoogleTypeColor;
    /**
     * Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp
     */
    fontFamily?: string | null;
    /**
     * Font size.
     */
    fontSize?: Schema$GoogleCloudDocumentaiV1beta1DocumentStyleFontSize;
    /**
     * [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`.
     */
    fontWeight?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
    /**
     * [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard.
     */
    textDecoration?: string | null;
    /**
     * [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`.
     */
    textStyle?: string | null;
  }
  /**
   * Font size with unit.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentStyleFontSize {
    /**
     * Font size for the text.
     */
    size?: number | null;
    /**
     * Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`).
     */
    unit?: string | null;
  }
  /**
   * Text reference indexing into the Document.text.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor {
    /**
     * Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.
     */
    content?: string | null;
    /**
     * The text segments from the Document.text.
     */
    textSegments?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment[];
  }
  /**
   * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment {
    /**
     * TextSegment half open end UTF-8 char index in the Document.text.
     */
    endIndex?: string | null;
    /**
     * TextSegment start UTF-8 char index in the Document.text.
     */
    startIndex?: string | null;
  }
  /**
   * This message is used for text changes aka. OCR corrections.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1DocumentTextChange {
    /**
     * The text that replaces the text identified in the `text_anchor`.
     */
    changedText?: string | null;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta1DocumentProvenance[];
    /**
     * Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
  }
  /**
   * The Google Cloud Storage location where the output file will be written to.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1GcsDestination {
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input file will be read from.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1GcsSource {
    uri?: string | null;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1InputConfig {
    /**
     * The Google Cloud Storage location to read the input from. This must be a single file.
     */
    gcsSource?: Schema$GoogleCloudDocumentaiV1beta1GcsSource;
    /**
     * Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.
     */
    mimeType?: string | null;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate (starts from the top of the image).
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchProcessDocuments operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1OperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The state of the current batch processing.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1OutputConfig {
    /**
     * The Google Cloud Storage location to write the output to.
     */
    gcsDestination?: Schema$GoogleCloudDocumentaiV1beta1GcsDestination;
    /**
     * The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json
     */
    pagesPerShard?: number | null;
  }
  /**
   * Response to a single document processing request.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1ProcessDocumentResponse {
    /**
     * Information about the input file. This is the same as the corresponding input config in the request.
     */
    inputConfig?: Schema$GoogleCloudDocumentaiV1beta1InputConfig;
    /**
     * The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.
     */
    outputConfig?: Schema$GoogleCloudDocumentaiV1beta1OutputConfig;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate (starts from the top of the image).
     */
    y?: number | null;
  }
  /**
   * Encodes the detailed information of a barcode.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2Barcode {
    /**
     * Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.
     */
    format?: string | null;
    /**
     * Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.
     */
    rawValue?: string | null;
    /**
     * Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.
     */
    valueFormat?: string | null;
  }
  /**
   * Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse {
    /**
     * Responses for each individual document.
     */
    responses?: Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentResponse[];
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDocumentaiV1beta2NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudDocumentaiV1beta2Vertex[];
  }
  /**
   * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2Document {
    /**
     * Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
     */
    entities?: Schema$GoogleCloudDocumentaiV1beta2DocumentEntity[];
    /**
     * Placeholder. Relationship among Document.entities.
     */
    entityRelations?: Schema$GoogleCloudDocumentaiV1beta2DocumentEntityRelation[];
    /**
     * Any error that occurred while processing this document.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Labels for this document.
     */
    labels?: Schema$GoogleCloudDocumentaiV1beta2DocumentLabel[];
    /**
     * An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml).
     */
    mimeType?: string | null;
    /**
     * Visual page layout for the Document.
     */
    pages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPage[];
    /**
     * Placeholder. Revision history of this document.
     */
    revisions?: Schema$GoogleCloudDocumentaiV1beta2DocumentRevision[];
    /**
     * Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.
     */
    shardInfo?: Schema$GoogleCloudDocumentaiV1beta2DocumentShardInfo;
    /**
     * Optional. UTF-8 encoded text in reading order from the document.
     */
    text?: string | null;
    /**
     * Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
     */
    textChanges?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextChange[];
    /**
     * Styles for the Document.text.
     */
    textStyles?: Schema$GoogleCloudDocumentaiV1beta2DocumentStyle[];
    /**
     * Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris).
     */
    uri?: string | null;
  }
  /**
   * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentEntity {
    /**
     * Optional. Confidence of detected Schema entity. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Optional. Canonical id. This will be a unique value in the entity list for this document.
     */
    id?: string | null;
    /**
     * Optional. Deprecated. Use `id` field instead.
     */
    mentionId?: string | null;
    /**
     * Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.
     */
    mentionText?: string | null;
    /**
     * Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.
     */
    normalizedValue?: Schema$GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue;
    /**
     * Optional. Represents the provenance of this entity wrt. the location on the page where it was found.
     */
    pageAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageAnchor;
    /**
     * Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
     */
    properties?: Schema$GoogleCloudDocumentaiV1beta2DocumentEntity[];
    /**
     * Optional. The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
    /**
     * Optional. Whether the entity will be redacted for de-identification purposes.
     */
    redacted?: boolean | null;
    /**
     * Optional. Provenance of the entity. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    /**
     * Required. Entity type from a schema e.g. `Address`.
     */
    type?: string | null;
  }
  /**
   * Parsed and normalized entity value.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue {
    /**
     * Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto
     */
    addressValue?: Schema$GoogleTypePostalAddress;
    /**
     * Boolean value. Can be used for entities with binary values, or for checkboxes.
     */
    booleanValue?: boolean | null;
    /**
     * DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto
     */
    datetimeValue?: Schema$GoogleTypeDateTime;
    /**
     * Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto
     */
    dateValue?: Schema$GoogleTypeDate;
    /**
     * Float value.
     */
    floatValue?: number | null;
    /**
     * Integer value.
     */
    integerValue?: number | null;
    /**
     * Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto
     */
    moneyValue?: Schema$GoogleTypeMoney;
    /**
     * Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.
     */
    text?: string | null;
  }
  /**
   * Relationship between Entities.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentEntityRelation {
    /**
     * Object entity id.
     */
    objectId?: string | null;
    /**
     * Relationship description.
     */
    relation?: string | null;
    /**
     * Subject entity id.
     */
    subjectId?: string | null;
  }
  /**
   * Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentLabel {
    /**
     * Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id\}/locations/{location-id\}/models/{model-id\}`
     */
    automlModel?: string | null;
    /**
     * Confidence score between 0 and 1 for label assignment.
     */
    confidence?: number | null;
    /**
     * Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category.
     */
    name?: string | null;
  }
  /**
   * A page in a Document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPage {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageBlock[];
    /**
     * A list of detected barcodes.
     */
    detectedBarcodes?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Physical dimension of the page.
     */
    dimension?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageFormField[];
    /**
     * Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.
     */
    image?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageImage;
    /**
     * Image quality scores.
     */
    imageQualityScores?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores;
    /**
     * Layout for the page.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number | null;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageParagraph[];
    /**
     * The history of this page.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
    /**
     * A list of visually detected symbols on the page.
     */
    symbols?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageSymbol[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageToken[];
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     */
    transforms?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageMatrix[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageVisualElement[];
  }
  /**
   * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageAnchor {
    /**
     * One or more references to visual page elements
     */
    pageRefs?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef[];
  }
  /**
   * Represents a weak reference to a page element within a document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef {
    /**
     * Optional. Identifies the bounding polygon of a layout element on the page.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta2BoundingPoly;
    /**
     * Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Optional. Deprecated. Use PageRef.bounding_poly instead.
     */
    layoutId?: string | null;
    /**
     * Optional. The type of the layout element that is being referenced if any.
     */
    layoutType?: string | null;
    /**
     * Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.
     */
    page?: string | null;
  }
  /**
   * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageBlock {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Block.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
  }
  /**
   * A detected barcode.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode {
    /**
     * Detailed barcode information of the DetectedBarcode.
     */
    barcode?: Schema$GoogleCloudDocumentaiV1beta2Barcode;
    /**
     * Layout for DetectedBarcode.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage {
    /**
     * Confidence of detected language. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`.
     */
    languageCode?: string | null;
  }
  /**
   * Dimension for the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageDimension {
    /**
     * Page height.
     */
    height?: number | null;
    /**
     * Dimension unit.
     */
    unit?: string | null;
    /**
     * Page width.
     */
    width?: number | null;
  }
  /**
   * A form field detected on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageFormField {
    /**
     * Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.
     */
    correctedKeyText?: string | null;
    /**
     * Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.
     */
    correctedValueText?: string | null;
    /**
     * Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.
     */
    fieldName?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * Layout for the FormField value.
     */
    fieldValue?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * A list of detected languages for name together with confidence.
     */
    nameDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
    /**
     * A list of detected languages for value together with confidence.
     */
    valueDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`
     */
    valueType?: string | null;
  }
  /**
   * Rendered image contents for this page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageImage {
    /**
     * Raw byte content of the image.
     */
    content?: string | null;
    /**
     * Height of the image in pixels.
     */
    height?: number | null;
    /**
     * Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image.
     */
    mimeType?: string | null;
    /**
     * Width of the image in pixels.
     */
    width?: number | null;
  }
  /**
   * Image quality scores for the page image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores {
    /**
     * A list of detected defects.
     */
    detectedDefects?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect[];
    /**
     * The overall quality score. Range `[0, 1]` where `1` is perfect quality.
     */
    qualityScore?: number | null;
  }
  /**
   * Image Quality Defects
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect {
    /**
     * Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists.
     */
    confidence?: number | null;
    /**
     * Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`
     */
    type?: string | null;
  }
  /**
   * Visual element describing a layout unit on a page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout {
    /**
     * The bounding polygon for the Layout.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta2BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
  }
  /**
   * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageLine {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Line.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
  }
  /**
   * Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageMatrix {
    /**
     * Number of columns in the matrix.
     */
    cols?: number | null;
    /**
     * The matrix data.
     */
    data?: string | null;
    /**
     * Number of rows in the matrix.
     */
    rows?: number | null;
    /**
     * This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html
     */
    type?: number | null;
  }
  /**
   * A collection of lines that a human would perceive as a paragraph.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageParagraph {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Paragraph.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
  }
  /**
   * A detected symbol.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageSymbol {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Symbol.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
  }
  /**
   * A table representation similar to HTML table structure.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTable {
    /**
     * Body rows of the table.
     */
    bodyRows?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow[];
    /**
     * Layout for Table.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * The history of this table.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
  }
  /**
   * A cell representation inside the table.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number | null;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for TableCell.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number | null;
  }
  /**
   * A row of table cells.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow {
    /**
     * Cells that make up this row.
     */
    cells?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell[];
  }
  /**
   * A detected token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageToken {
    /**
     * Detected break at the end of a Token.
     */
    detectedBreak?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for Token.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance;
    /**
     * Text style attributes.
     */
    styleInfo?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfo;
  }
  /**
   * Detected break at the end of a Token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak {
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Font and other text style attributes.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfo {
    /**
     * Color of the background.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Whether the text is bold (equivalent to font_weight is at least `700`).
     */
    bold?: boolean | null;
    /**
     * Font size in points (`1` point is `¹⁄₇₂` inches).
     */
    fontSize?: number | null;
    /**
     * Name or style of the font.
     */
    fontType?: string | null;
    /**
     * TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`.
     */
    fontWeight?: number | null;
    /**
     * Whether the text is handwritten.
     */
    handwritten?: boolean | null;
    /**
     * Whether the text is italic.
     */
    italic?: boolean | null;
    /**
     * Letter spacing in points.
     */
    letterSpacing?: number | null;
    /**
     * Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`.
     */
    pixelFontSize?: number | null;
    /**
     * Whether the text is in small caps.
     */
    smallcaps?: boolean | null;
    /**
     * Whether the text is strikethrough.
     */
    strikeout?: boolean | null;
    /**
     * Whether the text is a subscript.
     */
    subscript?: boolean | null;
    /**
     * Whether the text is a superscript.
     */
    superscript?: boolean | null;
    /**
     * Color of the text.
     */
    textColor?: Schema$GoogleTypeColor;
    /**
     * Whether the text is underlined.
     */
    underlined?: boolean | null;
  }
  /**
   * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentPageVisualElement {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Layout for VisualElement.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * Type of the VisualElement.
     */
    type?: string | null;
  }
  /**
   * Structure to identify provenance relationships between annotations in different revisions.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance {
    /**
     * The Id of this operation. Needs to be unique within the scope of the revision.
     */
    id?: number | null;
    /**
     * References to the original elements that are replaced.
     */
    parents?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenanceParent[];
    /**
     * The index of the revision that produced this element.
     */
    revision?: number | null;
    /**
     * The type of provenance operation.
     */
    type?: string | null;
  }
  /**
   * The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentProvenanceParent {
    /**
     * The id of the parent provenance.
     */
    id?: number | null;
    /**
     * The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.
     */
    index?: number | null;
    /**
     * The index of the index into current revision's parent_ids list.
     */
    revision?: number | null;
  }
  /**
   * Contains past or forward revisions of this document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentRevision {
    /**
     * If the change was made by a person specify the name or id of that person.
     */
    agent?: string | null;
    /**
     * The time that the revision was created, internally generated by doc proto storage at the time of create.
     */
    createTime?: string | null;
    /**
     * Human Review information of this revision.
     */
    humanReview?: Schema$GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview;
    /**
     * Id of the revision, internally generated by doc proto storage. Unique within the context of the document.
     */
    id?: string | null;
    /**
     * The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.
     */
    parent?: number[] | null;
    /**
     * The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.
     */
    parentIds?: string[] | null;
    /**
     * If the annotation was made by processor identify the processor by its resource name.
     */
    processor?: string | null;
  }
  /**
   * Human Review information of the document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview {
    /**
     * Human review state. e.g. `requested`, `succeeded`, `rejected`.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.
     */
    stateMessage?: string | null;
  }
  /**
   * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentShardInfo {
    /**
     * Total number of shards.
     */
    shardCount?: string | null;
    /**
     * The 0-based index of this shard.
     */
    shardIndex?: string | null;
    /**
     * The index of the first character in Document.text in the overall document global text.
     */
    textOffset?: string | null;
  }
  /**
   * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentStyle {
    /**
     * Text background color.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Text color.
     */
    color?: Schema$GoogleTypeColor;
    /**
     * Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp
     */
    fontFamily?: string | null;
    /**
     * Font size.
     */
    fontSize?: Schema$GoogleCloudDocumentaiV1beta2DocumentStyleFontSize;
    /**
     * [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`.
     */
    fontWeight?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    /**
     * [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard.
     */
    textDecoration?: string | null;
    /**
     * [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`.
     */
    textStyle?: string | null;
  }
  /**
   * Font size with unit.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentStyleFontSize {
    /**
     * Font size for the text.
     */
    size?: number | null;
    /**
     * Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`).
     */
    unit?: string | null;
  }
  /**
   * Text reference indexing into the Document.text.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor {
    /**
     * Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.
     */
    content?: string | null;
    /**
     * The text segments from the Document.text.
     */
    textSegments?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment[];
  }
  /**
   * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment {
    /**
     * TextSegment half open end UTF-8 char index in the Document.text.
     */
    endIndex?: string | null;
    /**
     * TextSegment start UTF-8 char index in the Document.text.
     */
    startIndex?: string | null;
  }
  /**
   * This message is used for text changes aka. OCR corrections.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2DocumentTextChange {
    /**
     * The text that replaces the text identified in the `text_anchor`.
     */
    changedText?: string | null;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta2DocumentProvenance[];
    /**
     * Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
  }
  /**
   * The Google Cloud Storage location where the output file will be written to.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2GcsDestination {
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input file will be read from.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2GcsSource {
    uri?: string | null;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2InputConfig {
    /**
     * Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method.
     */
    contents?: string | null;
    /**
     * The Google Cloud Storage location to read the input from. This must be a single file.
     */
    gcsSource?: Schema$GoogleCloudDocumentaiV1beta2GcsSource;
    /**
     * Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.
     */
    mimeType?: string | null;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate (starts from the top of the image).
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchProcessDocuments operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2OperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The state of the current batch processing.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2OutputConfig {
    /**
     * The Google Cloud Storage location to write the output to.
     */
    gcsDestination?: Schema$GoogleCloudDocumentaiV1beta2GcsDestination;
    /**
     * The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json
     */
    pagesPerShard?: number | null;
  }
  /**
   * Response to a single document processing request.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2ProcessDocumentResponse {
    /**
     * Information about the input file. This is the same as the corresponding input config in the request.
     */
    inputConfig?: Schema$GoogleCloudDocumentaiV1beta2InputConfig;
    /**
     * The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.
     */
    outputConfig?: Schema$GoogleCloudDocumentaiV1beta2OutputConfig;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta2Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate (starts from the top of the image).
     */
    y?: number | null;
  }
  /**
   * Encodes the detailed information of a barcode.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3Barcode {
    /**
     * Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.
     */
    format?: string | null;
    /**
     * Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.
     */
    rawValue?: string | null;
    /**
     * Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.
     */
    valueFormat?: string | null;
  }
  /**
   * Dataset documents that the batch operation will be applied to.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDatasetDocuments {
    /**
     * A filter matching the documents. Follows the same format and restriction as [google.cloud.documentai.master.ListDocumentsRequest.filter].
     */
    filter?: string | null;
    /**
     * Document identifiers.
     */
    individualDocumentIds?: Schema$GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds;
  }
  /**
   * List of individual DocumentIds.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds {
    /**
     * Required. List of Document IDs indicating where the actual documents are stored.
     */
    documentIds?: Schema$GoogleCloudDocumentaiV1beta3DocumentId[];
  }
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
    /**
     * Total number of documents that failed to be deleted in storage.
     */
    errorDocumentCount?: number | null;
    /**
     * The list of response details of each document.
     */
    individualBatchDeleteStatuses?: Schema$GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus[];
    /**
     * Total number of documents deleting from dataset.
     */
    totalDocumentCount?: number | null;
  }
  /**
   * The status of each individual document in the batch delete process.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus {
    /**
     * The document id of the document.
     */
    documentId?: Schema$GoogleCloudDocumentaiV1beta3DocumentId;
    /**
     * The status of deleting the document in storage.
     */
    status?: Schema$GoogleRpcStatus;
  }
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest {
    /**
     * Required. Dataset documents input. If given `filter`, all documents satisfying the filter will be deleted. If given documentIds, a maximum of 50 documents can be deleted in a batch. The request will be rejected if more than 50 document_ids are provided.
     */
    datasetDocuments?: Schema$GoogleCloudDocumentaiV1beta3BatchDatasetDocuments;
  }
  /**
   * Response of the delete documents operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsResponse {}
  /**
   * The common config to specify a set of documents used as input.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig {
    /**
     * The set of documents individually specified on Cloud Storage.
     */
    gcsDocuments?: Schema$GoogleCloudDocumentaiV1beta3GcsDocuments;
    /**
     * The set of documents that match the specified Cloud Storage `gcs_prefix`.
     */
    gcsPrefix?: Schema$GoogleCloudDocumentaiV1beta3GcsPrefix;
  }
  /**
   * The long-running operation metadata for BatchProcessDocuments.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchProcessMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The list of response details of each document.
     */
    individualProcessStatuses?: Schema$GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus[];
    /**
     * The state of the current batch processing.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing. For example, the error message if the operation is failed.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The status of a each individual document in the batch process.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus {
    /**
     * The name of the operation triggered by the processed document. If the human review process isn't triggered, this field will be empty. It has the same response type and metadata as the long-running operation returned by the ReviewDocument method.
     */
    humanReviewOperation?: string | null;
    /**
     * The status of human review on the processed document.
     */
    humanReviewStatus?: Schema$GoogleCloudDocumentaiV1beta3HumanReviewStatus;
    /**
     * The source of the document, same as the input_gcs_source field in the request when the batch process started.
     */
    inputGcsSource?: string | null;
    /**
     * The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty.
     */
    outputGcsDestination?: string | null;
    /**
     * The status processing the document.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Request message for BatchProcessDocuments.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequest {
    /**
     * The output configuration for the BatchProcessDocuments method.
     */
    documentOutputConfig?: Schema$GoogleCloudDocumentaiV1beta3DocumentOutputConfig;
    /**
     * The input config for each single document in the batch process.
     */
    inputConfigs?: Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig[];
    /**
     * The input documents for the BatchProcessDocuments method.
     */
    inputDocuments?: Schema$GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    /**
     * The overall output config for batch process.
     */
    outputConfig?: Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig;
    /**
     * Inference-time options for the process API
     */
    processOptions?: Schema$GoogleCloudDocumentaiV1beta3ProcessOptions;
    /**
     * Whether human review should be skipped for this request. Default to `false`.
     */
    skipHumanReview?: boolean | null;
  }
  /**
   * The message for input config in batch process.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig {
    /**
     * The Cloud Storage location as the source of the document.
     */
    gcsSource?: string | null;
    /**
     * An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) of the input. If the input is a raw document, refer to [supported file types](https://cloud.google.com/document-ai/docs/file-types) for the list of media types. If the input is a Document, the type should be `application/json`.
     */
    mimeType?: string | null;
  }
  /**
   * The output configuration in the BatchProcessDocuments method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig {
    /**
     * The output Cloud Storage directory to put the processed documents.
     */
    gcsDestination?: string | null;
  }
  /**
   * Response message for BatchProcessDocuments.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BatchProcessResponse {}
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDocumentaiV1beta3NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudDocumentaiV1beta3Vertex[];
  }
  /**
   * The common metadata for long running operations.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * A related resource to this operation.
     */
    resource?: string | null;
    /**
     * The state of the operation.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * A singleton resource under a Processor which configures a collection of documents.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3Dataset {
    /**
     * Optional. Document AI Warehouse-based dataset configuration.
     */
    documentWarehouseConfig?: Schema$GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig;
    /**
     * Optional. User-managed Cloud Storage dataset configuration. Use this configuration if the dataset documents are stored under a user-managed Cloud Storage location.
     */
    gcsManagedConfig?: Schema$GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfig;
    /**
     * Dataset resource name. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/dataset`
     */
    name?: string | null;
    /**
     * Optional. A lightweight indexing source with low latency and high reliability, but lacking advanced features like CMEK and content-based search.
     */
    spannerIndexingConfig?: Schema$GoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfig;
    /**
     * Required. State of the dataset. Ignored when updating dataset.
     */
    state?: string | null;
    /**
     * Optional. Unmanaged dataset configuration. Use this configuration if the dataset documents are managed by the document service internally (not user-managed).
     */
    unmanagedDatasetConfig?: Schema$GoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfig;
  }
  /**
   * Configuration specific to the Document AI Warehouse-based implementation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig {
    /**
     * Output only. The collection in Document AI Warehouse associated with the dataset.
     */
    collection?: string | null;
    /**
     * Output only. The schema in Document AI Warehouse associated with the dataset.
     */
    schema?: string | null;
  }
  /**
   * Configuration specific to the Cloud Storage-based implementation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfig {
    /**
     * Required. The Cloud Storage URI (a directory) where the documents belonging to the dataset must be stored.
     */
    gcsPrefix?: Schema$GoogleCloudDocumentaiV1beta3GcsPrefix;
  }
  /**
   * Dataset Schema.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DatasetSchema {
    /**
     * Optional. Schema of the dataset.
     */
    documentSchema?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchema;
    /**
     * Dataset schema resource name. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/dataset/datasetSchema`
     */
    name?: string | null;
  }
  /**
   * Configuration specific to spanner-based indexing.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfig {}
  /**
   * Configuration specific to an unmanaged dataset.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfig {}
  /**
   * The long-running operation metadata for the DeleteProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DeleteProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeleteProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * Request message for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest {}
  /**
   * Response message for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponse {}
  /**
   * The long-running operation metadata for the DisableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DisableProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * Request message for the DisableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DisableProcessorRequest {}
  /**
   * Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DisableProcessorResponse {}
  /**
   * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3Document {
    /**
     * Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.
     */
    entities?: Schema$GoogleCloudDocumentaiV1beta3DocumentEntity[];
    /**
     * Placeholder. Relationship among Document.entities.
     */
    entityRelations?: Schema$GoogleCloudDocumentaiV1beta3DocumentEntityRelation[];
    /**
     * Any error that occurred while processing this document.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml).
     */
    mimeType?: string | null;
    /**
     * Visual page layout for the Document.
     */
    pages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPage[];
    /**
     * Placeholder. Revision history of this document.
     */
    revisions?: Schema$GoogleCloudDocumentaiV1beta3DocumentRevision[];
    /**
     * Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.
     */
    shardInfo?: Schema$GoogleCloudDocumentaiV1beta3DocumentShardInfo;
    /**
     * Optional. UTF-8 encoded text in reading order from the document.
     */
    text?: string | null;
    /**
     * Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.
     */
    textChanges?: Schema$GoogleCloudDocumentaiV1beta3DocumentTextChange[];
    /**
     * Styles for the Document.text.
     */
    textStyles?: Schema$GoogleCloudDocumentaiV1beta3DocumentStyle[];
    /**
     * Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris).
     */
    uri?: string | null;
  }
  /**
   * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentEntity {
    /**
     * Optional. Confidence of detected Schema entity. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Optional. Canonical id. This will be a unique value in the entity list for this document.
     */
    id?: string | null;
    /**
     * Optional. Deprecated. Use `id` field instead.
     */
    mentionId?: string | null;
    /**
     * Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.
     */
    mentionText?: string | null;
    /**
     * Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.
     */
    normalizedValue?: Schema$GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue;
    /**
     * Optional. Represents the provenance of this entity wrt. the location on the page where it was found.
     */
    pageAnchor?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageAnchor;
    /**
     * Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
     */
    properties?: Schema$GoogleCloudDocumentaiV1beta3DocumentEntity[];
    /**
     * Optional. The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
    /**
     * Optional. Whether the entity will be redacted for de-identification purposes.
     */
    redacted?: boolean | null;
    /**
     * Optional. Provenance of the entity. Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
    /**
     * Required. Entity type from a schema e.g. `Address`.
     */
    type?: string | null;
  }
  /**
   * Parsed and normalized entity value.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue {
    /**
     * Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto
     */
    addressValue?: Schema$GoogleTypePostalAddress;
    /**
     * Boolean value. Can be used for entities with binary values, or for checkboxes.
     */
    booleanValue?: boolean | null;
    /**
     * DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto
     */
    datetimeValue?: Schema$GoogleTypeDateTime;
    /**
     * Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto
     */
    dateValue?: Schema$GoogleTypeDate;
    /**
     * Float value.
     */
    floatValue?: number | null;
    /**
     * Integer value.
     */
    integerValue?: number | null;
    /**
     * Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto
     */
    moneyValue?: Schema$GoogleTypeMoney;
    /**
     * Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.
     */
    text?: string | null;
  }
  /**
   * Relationship between Entities.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentEntityRelation {
    /**
     * Object entity id.
     */
    objectId?: string | null;
    /**
     * Relationship description.
     */
    relation?: string | null;
    /**
     * Subject entity id.
     */
    subjectId?: string | null;
  }
  /**
   * Document Identifier.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentId {
    /**
     * A document id within user-managed Cloud Storage.
     */
    gcsManagedDocId?: Schema$GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentId;
    /**
     * Points to a specific revision of the document if set.
     */
    revisionRef?: Schema$GoogleCloudDocumentaiV1beta3RevisionRef;
    /**
     * A document id within unmanaged dataset.
     */
    unmanagedDocId?: Schema$GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentId;
  }
  /**
   * Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentId {
    /**
     * Id of the document (indexed) managed by Content Warehouse.
     */
    cwDocId?: string | null;
    /**
     * Required. The Cloud Storage URI where the actual document is stored.
     */
    gcsUri?: string | null;
  }
  /**
   * Identifies a document uniquely within the scope of a dataset in unmanaged option.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentId {
    /**
     * Required. The id of the document.
     */
    docId?: string | null;
  }
  /**
   * Config that controls the output of documents. All documents will be written as a JSON file.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentOutputConfig {
    /**
     * Output config to write the results to Cloud Storage.
     */
    gcsOutputConfig?: Schema$GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig;
  }
  /**
   * The configuration used when outputting documents.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig {
    /**
     * Specifies which fields to include in the output documents. Only supports top level document and pages field so it must be in the form of `{document_field_name\}` or `pages.{page_field_name\}`.
     */
    fieldMask?: string | null;
    /**
     * The Cloud Storage uri (a directory) of the output.
     */
    gcsUri?: string | null;
    /**
     * Specifies the sharding config for the output document.
     */
    shardingConfig?: Schema$GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig;
  }
  /**
   * The sharding config for the output document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig {
    /**
     * The number of overlapping pages between consecutive shards.
     */
    pagesOverlap?: number | null;
    /**
     * The number of pages per shard.
     */
    pagesPerShard?: number | null;
  }
  /**
   * A page in a Document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPage {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageBlock[];
    /**
     * A list of detected barcodes.
     */
    detectedBarcodes?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Physical dimension of the page.
     */
    dimension?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageFormField[];
    /**
     * Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.
     */
    image?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageImage;
    /**
     * Image quality scores.
     */
    imageQualityScores?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;
    /**
     * Layout for the page.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number | null;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageParagraph[];
    /**
     * The history of this page.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
    /**
     * A list of visually detected symbols on the page.
     */
    symbols?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageSymbol[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageToken[];
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     */
    transforms?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageMatrix[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageVisualElement[];
  }
  /**
   * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageAnchor {
    /**
     * One or more references to visual page elements
     */
    pageRefs?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef[];
  }
  /**
   * Represents a weak reference to a page element within a document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef {
    /**
     * Optional. Identifies the bounding polygon of a layout element on the page.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta3BoundingPoly;
    /**
     * Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Optional. Deprecated. Use PageRef.bounding_poly instead.
     */
    layoutId?: string | null;
    /**
     * Optional. The type of the layout element that is being referenced if any.
     */
    layoutType?: string | null;
    /**
     * Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.
     */
    page?: string | null;
  }
  /**
   * A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageBlock {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for Block.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
  }
  /**
   * A detected barcode.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode {
    /**
     * Detailed barcode information of the DetectedBarcode.
     */
    barcode?: Schema$GoogleCloudDocumentaiV1beta3Barcode;
    /**
     * Layout for DetectedBarcode.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage {
    /**
     * Confidence of detected language. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`.
     */
    languageCode?: string | null;
  }
  /**
   * Dimension for the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageDimension {
    /**
     * Page height.
     */
    height?: number | null;
    /**
     * Dimension unit.
     */
    unit?: string | null;
    /**
     * Page width.
     */
    width?: number | null;
  }
  /**
   * A form field detected on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageFormField {
    /**
     * Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.
     */
    correctedKeyText?: string | null;
    /**
     * Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.
     */
    correctedValueText?: string | null;
    /**
     * Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.
     */
    fieldName?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * Layout for the FormField value.
     */
    fieldValue?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * A list of detected languages for name together with confidence.
     */
    nameDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
    /**
     * A list of detected languages for value together with confidence.
     */
    valueDetectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`
     */
    valueType?: string | null;
  }
  /**
   * Rendered image contents for this page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageImage {
    /**
     * Raw byte content of the image.
     */
    content?: string | null;
    /**
     * Height of the image in pixels.
     */
    height?: number | null;
    /**
     * Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image.
     */
    mimeType?: string | null;
    /**
     * Width of the image in pixels.
     */
    width?: number | null;
  }
  /**
   * Image quality scores for the page image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores {
    /**
     * A list of detected defects.
     */
    detectedDefects?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect[];
    /**
     * The overall quality score. Range `[0, 1]` where `1` is perfect quality.
     */
    qualityScore?: number | null;
  }
  /**
   * Image Quality Defects
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect {
    /**
     * Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists.
     */
    confidence?: number | null;
    /**
     * Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`
     */
    type?: string | null;
  }
  /**
   * Visual element describing a layout unit on a page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout {
    /**
     * The bounding polygon for the Layout.
     */
    boundingPoly?: Schema$GoogleCloudDocumentaiV1beta3BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.
     */
    confidence?: number | null;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
  }
  /**
   * A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageLine {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for Line.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
  }
  /**
   * Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageMatrix {
    /**
     * Number of columns in the matrix.
     */
    cols?: number | null;
    /**
     * The matrix data.
     */
    data?: string | null;
    /**
     * Number of rows in the matrix.
     */
    rows?: number | null;
    /**
     * This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html
     */
    type?: number | null;
  }
  /**
   * A collection of lines that a human would perceive as a paragraph.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageParagraph {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for Paragraph.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
  }
  /**
   * A detected symbol.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageSymbol {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for Symbol.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
  }
  /**
   * A table representation similar to HTML table structure.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageTable {
    /**
     * Body rows of the table.
     */
    bodyRows?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];
    /**
     * Layout for Table.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * The history of this table.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
  }
  /**
   * A cell representation inside the table.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number | null;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for TableCell.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number | null;
  }
  /**
   * A row of table cells.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow {
    /**
     * Cells that make up this row.
     */
    cells?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell[];
  }
  /**
   * A detected token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageToken {
    /**
     * Detected break at the end of a Token.
     */
    detectedBreak?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for Token.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance;
    /**
     * Text style attributes.
     */
    styleInfo?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo;
  }
  /**
   * Detected break at the end of a Token.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak {
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Font and other text style attributes.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo {
    /**
     * Color of the background.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Whether the text is bold (equivalent to font_weight is at least `700`).
     */
    bold?: boolean | null;
    /**
     * Font size in points (`1` point is `¹⁄₇₂` inches).
     */
    fontSize?: number | null;
    /**
     * Name or style of the font.
     */
    fontType?: string | null;
    /**
     * TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`.
     */
    fontWeight?: number | null;
    /**
     * Whether the text is handwritten.
     */
    handwritten?: boolean | null;
    /**
     * Whether the text is italic.
     */
    italic?: boolean | null;
    /**
     * Letter spacing in points.
     */
    letterSpacing?: number | null;
    /**
     * Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`.
     */
    pixelFontSize?: number | null;
    /**
     * Whether the text is in small caps.
     */
    smallcaps?: boolean | null;
    /**
     * Whether the text is strikethrough.
     */
    strikeout?: boolean | null;
    /**
     * Whether the text is a subscript.
     */
    subscript?: boolean | null;
    /**
     * Whether the text is a superscript.
     */
    superscript?: boolean | null;
    /**
     * Color of the text.
     */
    textColor?: Schema$GoogleTypeColor;
    /**
     * Whether the text is underlined.
     */
    underlined?: boolean | null;
  }
  /**
   * Detected non-text visual elements e.g. checkbox, signature etc. on the page.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentPageVisualElement {
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Layout for VisualElement.
     */
    layout?: Schema$GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * Type of the VisualElement.
     */
    type?: string | null;
  }
  /**
   * Structure to identify provenance relationships between annotations in different revisions.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance {
    /**
     * The Id of this operation. Needs to be unique within the scope of the revision.
     */
    id?: number | null;
    /**
     * References to the original elements that are replaced.
     */
    parents?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenanceParent[];
    /**
     * The index of the revision that produced this element.
     */
    revision?: number | null;
    /**
     * The type of provenance operation.
     */
    type?: string | null;
  }
  /**
   * The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentProvenanceParent {
    /**
     * The id of the parent provenance.
     */
    id?: number | null;
    /**
     * The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.
     */
    index?: number | null;
    /**
     * The index of the index into current revision's parent_ids list.
     */
    revision?: number | null;
  }
  /**
   * Contains past or forward revisions of this document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentRevision {
    /**
     * If the change was made by a person specify the name or id of that person.
     */
    agent?: string | null;
    /**
     * The time that the revision was created, internally generated by doc proto storage at the time of create.
     */
    createTime?: string | null;
    /**
     * Human Review information of this revision.
     */
    humanReview?: Schema$GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview;
    /**
     * Id of the revision, internally generated by doc proto storage. Unique within the context of the document.
     */
    id?: string | null;
    /**
     * The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.
     */
    parent?: number[] | null;
    /**
     * The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.
     */
    parentIds?: string[] | null;
    /**
     * If the annotation was made by processor identify the processor by its resource name.
     */
    processor?: string | null;
  }
  /**
   * Human Review information of the document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview {
    /**
     * Human review state. e.g. `requested`, `succeeded`, `rejected`.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.
     */
    stateMessage?: string | null;
  }
  /**
   * The schema defines the output of the processed document by a processor.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentSchema {
    /**
     * Description of the schema.
     */
    description?: string | null;
    /**
     * Display name to show to users.
     */
    displayName?: string | null;
    /**
     * Entity types of the schema.
     */
    entityTypes?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType[];
    /**
     * Metadata of the schema.
     */
    metadata?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
  }
  /**
   * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType {
    /**
     * The entity type that this type is derived from. For now, one and only one should be set.
     */
    baseTypes?: string[] | null;
    /**
     * User defined name for the type.
     */
    displayName?: string | null;
    /**
     * Metadata for the entity type.
     */
    entityTypeMetadata?: Schema$GoogleCloudDocumentaiV1beta3EntityTypeMetadata;
    /**
     * If specified, lists all the possible values for this entity. This should not be more than a handful of values. If the number of values is \>10 or could change frequently use the `EntityType.value_ontology` field and specify a list of all possible values in a value ontology file.
     */
    enumValues?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues;
    /**
     * Name of the type. It must be unique within the schema file and cannot be a "Common Type". The following naming conventions are used: - Use `snake_casing`. - Name matching is case-sensitive. - Maximum 64 characters. - Must start with a letter. - Allowed characters: ASCII letters `[a-z0-9_-]`. (For backward compatibility internal infrastructure and tooling can handle any ascii character.) - The `/` is sometimes used to denote a property of a type. For example `line_item/amount`. This convention is deprecated, but will still be honored for backward compatibility.
     */
    name?: string | null;
    /**
     * Description the nested structure, or composition of an entity.
     */
    properties?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty[];
  }
  /**
   * Defines the a list of enum values.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues {
    /**
     * The individual values that this enum values type can include.
     */
    values?: string[] | null;
  }
  /**
   * Defines properties that can be part of the entity type.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty {
    /**
     * The name of the property. Follows the same guidelines as the EntityType name.
     */
    name?: string | null;
    /**
     * Occurrence type limits the number of instances an entity type appears in the document.
     */
    occurrenceType?: string | null;
    /**
     * Any additional metadata about the property can be added here.
     */
    propertyMetadata?: Schema$GoogleCloudDocumentaiV1beta3PropertyMetadata;
    /**
     * A reference to the value type of the property. This type is subject to the same conventions as the `Entity.base_types` field.
     */
    valueType?: string | null;
  }
  /**
   * Metadata for global schema behavior.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata {
    /**
     * If true, on a given page, there can be multiple `document` annotations covering it.
     */
    documentAllowMultipleLabels?: boolean | null;
    /**
     * If true, a `document` entity type can be applied to subdocument (splitting). Otherwise, it can only be applied to the entire document (classification).
     */
    documentSplitter?: boolean | null;
    /**
     * If set, all the nested entities must be prefixed with the parents.
     */
    prefixedNamingOnProperties?: boolean | null;
    /**
     * If set, we will skip the naming format validation in the schema. So the string values in `DocumentSchema.EntityType.name` and `DocumentSchema.EntityType.Property.name` will not be checked.
     */
    skipNamingValidation?: boolean | null;
  }
  /**
   * For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentShardInfo {
    /**
     * Total number of shards.
     */
    shardCount?: string | null;
    /**
     * The 0-based index of this shard.
     */
    shardIndex?: string | null;
    /**
     * The index of the first character in Document.text in the overall document global text.
     */
    textOffset?: string | null;
  }
  /**
   * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentStyle {
    /**
     * Text background color.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Text color.
     */
    color?: Schema$GoogleTypeColor;
    /**
     * Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp
     */
    fontFamily?: string | null;
    /**
     * Font size.
     */
    fontSize?: Schema$GoogleCloudDocumentaiV1beta3DocumentStyleFontSize;
    /**
     * [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`.
     */
    fontWeight?: string | null;
    /**
     * Text anchor indexing into the Document.text.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
    /**
     * [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard.
     */
    textDecoration?: string | null;
    /**
     * [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`.
     */
    textStyle?: string | null;
  }
  /**
   * Font size with unit.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentStyleFontSize {
    /**
     * Font size for the text.
     */
    size?: number | null;
    /**
     * Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`).
     */
    unit?: string | null;
  }
  /**
   * Text reference indexing into the Document.text.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchor {
    /**
     * Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.
     */
    content?: string | null;
    /**
     * The text segments from the Document.text.
     */
    textSegments?: Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment[];
  }
  /**
   * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment {
    /**
     * TextSegment half open end UTF-8 char index in the Document.text.
     */
    endIndex?: string | null;
    /**
     * TextSegment start UTF-8 char index in the Document.text.
     */
    startIndex?: string | null;
  }
  /**
   * This message is used for text changes aka. OCR corrections.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3DocumentTextChange {
    /**
     * The text that replaces the text identified in the `text_anchor`.
     */
    changedText?: string | null;
    /**
     * The history of this annotation.
     */
    provenance?: Schema$GoogleCloudDocumentaiV1beta3DocumentProvenance[];
    /**
     * Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.
     */
    textAnchor?: Schema$GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
  }
  /**
   * The long-running operation metadata for the EnableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EnableProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * Request message for the EnableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EnableProcessorRequest {}
  /**
   * Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EnableProcessorResponse {}
  /**
   * Metadata about an entity type.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EntityTypeMetadata {
    /**
     * Whether the entity type should be considered inactive.
     */
    inactive?: boolean | null;
  }
  /**
   * Metadata of the EvaluateProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * Evaluates the given ProcessorVersion against the supplied documents.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest {
    /**
     * Optional. The documents used in the evaluation. If unspecified, use the processor's dataset as evaluation input.
     */
    evaluationDocuments?: Schema$GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
  }
  /**
   * Response of the EvaluateProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponse {
    /**
     * The resource name of the created evaluation.
     */
    evaluation?: string | null;
  }
  /**
   * An evaluation of a ProcessorVersion's performance.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3Evaluation {
    /**
     * Metrics for all the entities in aggregate.
     */
    allEntitiesMetrics?: Schema$GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics;
    /**
     * The time that the evaluation was created.
     */
    createTime?: string | null;
    /**
     * Counters for the documents used in the evaluation.
     */
    documentCounters?: Schema$GoogleCloudDocumentaiV1beta3EvaluationCounters;
    /**
     * Metrics across confidence levels, for different entities.
     */
    entityMetrics?: {
      [
        key: string
      ]: Schema$GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics;
    } | null;
    /**
     * The KMS key name used for encryption.
     */
    kmsKeyName?: string | null;
    /**
     * The KMS key version with which data is encrypted.
     */
    kmsKeyVersionName?: string | null;
    /**
     * The resource name of the evaluation. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processor_version\}/evaluations/{evaluation\}`
     */
    name?: string | null;
  }
  /**
   * Evaluations metrics, at a specific confidence level.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics {
    /**
     * The confidence level.
     */
    confidenceLevel?: number | null;
    /**
     * The metrics at the specific confidence level.
     */
    metrics?: Schema$GoogleCloudDocumentaiV1beta3EvaluationMetrics;
  }
  /**
   * Evaluation counters for the documents that were used.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluationCounters {
    /**
     * How many documents were used in the evaluation.
     */
    evaluatedDocumentsCount?: number | null;
    /**
     * How many documents were not included in the evaluation as Document AI failed to process them.
     */
    failedDocumentsCount?: number | null;
    /**
     * How many documents were sent for evaluation.
     */
    inputDocumentsCount?: number | null;
    /**
     * How many documents were not included in the evaluation as they didn't pass validation.
     */
    invalidDocumentsCount?: number | null;
  }
  /**
   * Evaluation metrics, either in aggregate or about a specific entity.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluationMetrics {
    /**
     * The calculated f1 score.
     */
    f1Score?: number | null;
    /**
     * The amount of false negatives.
     */
    falseNegativesCount?: number | null;
    /**
     * The amount of false positives.
     */
    falsePositivesCount?: number | null;
    /**
     * The amount of documents with a ground truth occurrence.
     */
    groundTruthDocumentCount?: number | null;
    /**
     * The amount of occurrences in ground truth documents.
     */
    groundTruthOccurrencesCount?: number | null;
    /**
     * The calculated precision.
     */
    precision?: number | null;
    /**
     * The amount of documents with a predicted occurrence.
     */
    predictedDocumentCount?: number | null;
    /**
     * The amount of occurrences in predicted documents.
     */
    predictedOccurrencesCount?: number | null;
    /**
     * The calculated recall.
     */
    recall?: number | null;
    /**
     * The amount of documents that had an occurrence of this label.
     */
    totalDocumentsCount?: number | null;
    /**
     * The amount of true positives.
     */
    truePositivesCount?: number | null;
  }
  /**
   * Metrics across multiple confidence levels.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics {
    /**
     * The calculated area under the precision recall curve (AUPRC), computed by integrating over all confidence thresholds.
     */
    auprc?: number | null;
    /**
     * The AUPRC for metrics with fuzzy matching disabled, i.e., exact matching only.
     */
    auprcExact?: number | null;
    /**
     * Metrics across confidence levels with fuzzy matching enabled.
     */
    confidenceLevelMetrics?: Schema$GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];
    /**
     * Metrics across confidence levels with only exact matching.
     */
    confidenceLevelMetricsExact?: Schema$GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[];
    /**
     * The Estimated Calibration Error (ECE) of the confidence of the predicted entities.
     */
    estimatedCalibrationError?: number | null;
    /**
     * The ECE for the predicted entities with fuzzy matching disabled, i.e., exact matching only.
     */
    estimatedCalibrationErrorExact?: number | null;
    /**
     * The metrics type for the label.
     */
    metricsType?: string | null;
  }
  /**
   * Gives a short summary of an evaluation, and links to the evaluation itself.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3EvaluationReference {
    /**
     * An aggregate of the statistics for the evaluation with fuzzy matching on.
     */
    aggregateMetrics?: Schema$GoogleCloudDocumentaiV1beta3EvaluationMetrics;
    /**
     * An aggregate of the statistics for the evaluation with fuzzy matching off.
     */
    aggregateMetricsExact?: Schema$GoogleCloudDocumentaiV1beta3EvaluationMetrics;
    /**
     * The resource name of the evaluation.
     */
    evaluation?: string | null;
    /**
     * The resource name of the Long Running Operation for the evaluation.
     */
    operation?: string | null;
  }
  /**
   * Response message for the FetchProcessorTypes method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse {
    /**
     * The list of processor types.
     */
    processorTypes?: Schema$GoogleCloudDocumentaiV1beta3ProcessorType[];
  }
  /**
   * Specifies a document stored on Cloud Storage.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3GcsDocument {
    /**
     * The Cloud Storage object uri.
     */
    gcsUri?: string | null;
    /**
     * An IANA MIME type (RFC6838) of the content.
     */
    mimeType?: string | null;
  }
  /**
   * Specifies a set of documents on Cloud Storage.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3GcsDocuments {
    /**
     * The list of documents.
     */
    documents?: Schema$GoogleCloudDocumentaiV1beta3GcsDocument[];
  }
  /**
   * Specifies all documents on Cloud Storage with a common prefix.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3GcsPrefix {
    /**
     * The URI prefix.
     */
    gcsUriPrefix?: string | null;
  }
  export interface Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse {
    document?: Schema$GoogleCloudDocumentaiV1beta3Document;
  }
  /**
   * The status of human review on a processed document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3HumanReviewStatus {
    /**
     * The name of the operation triggered by the processed document. This field is populated only when the state is `HUMAN_REVIEW_IN_PROGRESS`. It has the same response type and metadata as the long-running operation returned by ReviewDocument.
     */
    humanReviewOperation?: string | null;
    /**
     * The state of human review on the processing request.
     */
    state?: string | null;
    /**
     * A message providing more details about the human review state.
     */
    stateMessage?: string | null;
  }
  /**
   * Metadata of the import document operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
    /**
     * Validation statuses of the batch documents import config.
     */
    importConfigValidationResults?: Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResult[];
    /**
     * The list of response details of each document.
     */
    individualImportStatuses?: Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus[];
    /**
     * Total number of the documents that are qualified for importing.
     */
    totalDocumentCount?: number | null;
  }
  /**
   * The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResult {
    /**
     * The source Cloud Storage URI specified in the import config.
     */
    inputGcsSource?: string | null;
    /**
     * The validation status of import config.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * The status of each individual document in the import process.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus {
    /**
     * The source Cloud Storage URI of the document.
     */
    inputGcsSource?: string | null;
    /**
     * The document id of imported document if it was successful, otherwise empty.
     */
    outputDocumentId?: Schema$GoogleCloudDocumentaiV1beta3DocumentId;
    /**
     * The status of the importing of the document.
     */
    status?: Schema$GoogleRpcStatus;
  }
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsRequest {
    /**
     * Required. The Cloud Storage uri containing raw documents that must be imported.
     */
    batchDocumentsImportConfigs?: Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig[];
  }
  /**
   * Config for importing documents. Each batch can have its own dataset split type.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig {
    /**
     * If set, documents will be automatically split into training and test split category with the specified ratio.
     */
    autoSplitConfig?: Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfigAutoSplitConfig;
    /**
     * The common config to specify a set of documents used as input.
     */
    batchInputConfig?: Schema$GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    /**
     * Target dataset split where the documents must be stored.
     */
    datasetSplit?: string | null;
  }
  /**
   * The config for auto-split.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfigAutoSplitConfig {
    /**
     * Ratio of training dataset split.
     */
    trainingSplitRatio?: number | null;
  }
  /**
   * Response of the import document operation.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsResponse {}
  /**
   * The long-running operation metadata for the ImportProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadata {
    /**
     * The basic metadata for the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * The request message for the ImportProcessorVersion method. Requirements: - The Document AI [Service Agent](https://cloud.google.com/iam/docs/service-agents) of the destination project must have [Document AI Editor role](https://cloud.google.com/document-ai/docs/access-control/iam-roles) on the source project. The destination project is specified as part of the parent field. The source project is specified as part of the source field.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest {
    /**
     * The source processor version to import from, and can be from different environment and region than the destination processor.
     */
    externalProcessorVersionSource?: Schema$GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource;
    /**
     * The source processor version to import from. The source processor version and destination processor need to be in the same environment and region.
     */
    processorVersionSource?: string | null;
  }
  /**
   * The external source processor version.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource {
    /**
     * Required. The processor version name. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    processorVersion?: string | null;
    /**
     * Optional. The Document AI service endpoint. For example, 'https://us-documentai.googleapis.com'
     */
    serviceEndpoint?: string | null;
  }
  /**
   * The response message for the ImportProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponse {
    /**
     * The destination processor version name.
     */
    processorVersion?: string | null;
  }
  /**
   * The response from `ListEvaluations`.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse {
    /**
     * The evaluations requested.
     */
    evaluations?: Schema$GoogleCloudDocumentaiV1beta3Evaluation[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListProcessors method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse {
    /**
     * Points to the next processor, otherwise empty.
     */
    nextPageToken?: string | null;
    /**
     * The list of processors.
     */
    processors?: Schema$GoogleCloudDocumentaiV1beta3Processor[];
  }
  /**
   * Response message for the ListProcessorTypes method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse {
    /**
     * Points to the next page, otherwise empty.
     */
    nextPageToken?: string | null;
    /**
     * The processor types.
     */
    processorTypes?: Schema$GoogleCloudDocumentaiV1beta3ProcessorType[];
  }
  /**
   * Response message for the ListProcessorVersions method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse {
    /**
     * Points to the next processor, otherwise empty.
     */
    nextPageToken?: string | null;
    /**
     * The list of processors.
     */
    processorVersions?: Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate (starts from the top of the image).
     */
    y?: number | null;
  }
  /**
   * Config for Document OCR.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3OcrConfig {
    /**
     * A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.
     */
    advancedOcrOptions?: string[] | null;
    /**
     * Turn on font id model and returns font style information.
     */
    computeStyleInfo?: boolean | null;
    /**
     * Enables intelligent document quality scores after OCR. Can help with diagnosing why OCR responses are of poor quality for a given input. Adds additional latency comparable to regular OCR to the process call.
     */
    enableImageQualityScores?: boolean | null;
    /**
     * Enables special handling for PDFs with existing text information. Results in better text extraction quality in such PDF inputs.
     */
    enableNativePdfParsing?: boolean | null;
    /**
     * Includes symbol level OCR information if set to true.
     */
    enableSymbol?: boolean | null;
    /**
     * Hints for the OCR model.
     */
    hints?: Schema$GoogleCloudDocumentaiV1beta3OcrConfigHints;
  }
  /**
   * Hints for OCR Engine
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3OcrConfigHints {
    /**
     * List of BCP-47 language codes to use for OCR. In most cases, not specifying it yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting hints is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong).
     */
    languageHints?: string[] | null;
  }
  /**
   * Options for Process API
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessOptions {
    /**
     * Only applicable to `OCR_PROCESSOR`. Returns error if set on other processor types.
     */
    ocrConfig?: Schema$GoogleCloudDocumentaiV1beta3OcrConfig;
  }
  /**
   * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3Processor {
    /**
     * The time the processor was created.
     */
    createTime?: string | null;
    /**
     * The default processor version.
     */
    defaultProcessorVersion?: string | null;
    /**
     * The display name of the processor.
     */
    displayName?: string | null;
    /**
     * The [KMS key](https://cloud.google.com/security-key-management) used for encryption and decryption in CMEK scenarios.
     */
    kmsKeyName?: string | null;
    /**
     * Output only. Immutable. The resource name of the processor. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`
     */
    name?: string | null;
    /**
     * Output only. Immutable. The http endpoint that can be called to invoke processing.
     */
    processEndpoint?: string | null;
    /**
     * Output only. The processor version aliases.
     */
    processorVersionAliases?: Schema$GoogleCloudDocumentaiV1beta3ProcessorVersionAlias[];
    /**
     * Output only. The state of the processor.
     */
    state?: string | null;
    /**
     * The processor type, such as: `OCR_PROCESSOR`, `INVOICE_PROCESSOR`. To get a list of processor types, see FetchProcessorTypes.
     */
    type?: string | null;
  }
  /**
   * A processor type is responsible for performing a certain document understanding task on a certain type of document.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessorType {
    /**
     * Whether the processor type allows creation. If true, users can create a processor of this processor type. Otherwise, users need to request access.
     */
    allowCreation?: boolean | null;
    /**
     * The locations in which this processor is available.
     */
    availableLocations?: Schema$GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo[];
    /**
     * The processor category, used by UI to group processor types.
     */
    category?: string | null;
    /**
     * Launch stage of the processor type
     */
    launchStage?: string | null;
    /**
     * The resource name of the processor type. Format: `projects/{project\}/processorTypes/{processor_type\}`
     */
    name?: string | null;
    /**
     * A set of Cloud Storage URIs of sample documents for this processor.
     */
    sampleDocumentUris?: string[] | null;
    /**
     * The processor type, such as: `OCR_PROCESSOR`, `INVOICE_PROCESSOR`.
     */
    type?: string | null;
  }
  /**
   * The location information about where the processor is available.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo {
    /**
     * The location ID. For supported locations, refer to [regional and multi-regional support](/document-ai/docs/regions).
     */
    locationId?: string | null;
  }
  /**
   * A processor version is an implementation of a processor. Each processor can have multiple versions, pretrained by Google internally or uptrained by the customer. A processor can only have one default version at a time. Its document-processing behavior is defined by that version.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion {
    /**
     * The time the processor version was created.
     */
    createTime?: string | null;
    /**
     * If set, information about the eventual deprecation of this version.
     */
    deprecationInfo?: Schema$GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo;
    /**
     * The display name of the processor version.
     */
    displayName?: string | null;
    /**
     * The schema of the processor version. Describes the output.
     */
    documentSchema?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchema;
    /**
     * Output only. Denotes that this `ProcessorVersion` is managed by Google.
     */
    googleManaged?: boolean | null;
    /**
     * The KMS key name used for encryption.
     */
    kmsKeyName?: string | null;
    /**
     * The KMS key version with which data is encrypted.
     */
    kmsKeyVersionName?: string | null;
    /**
     * The most recently invoked evaluation for the processor version.
     */
    latestEvaluation?: Schema$GoogleCloudDocumentaiV1beta3EvaluationReference;
    /**
     * The resource name of the processor version. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processor_version\}`
     */
    name?: string | null;
    /**
     * The state of the processor version.
     */
    state?: string | null;
  }
  /**
   * Contains the alias and the aliased resource name of processor version.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessorVersionAlias {
    /**
     * The alias in the form of `processor_version` resource name.
     */
    alias?: string | null;
    /**
     * The resource name of aliased processor version.
     */
    processorVersion?: string | null;
  }
  /**
   * Information about the upcoming deprecation of this processor version.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo {
    /**
     * The time at which this processor version will be deprecated.
     */
    deprecationTime?: string | null;
    /**
     * If set, the processor version that will be used as a replacement.
     */
    replacementProcessorVersion?: string | null;
  }
  /**
   * Request message for the ProcessDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessRequest {
    /**
     * The document payload, the content and mime_type fields must be set.
     */
    document?: Schema$GoogleCloudDocumentaiV1beta3Document;
    /**
     * Specifies which fields to include in the ProcessResponse.document output. Only supports top-level document and pages field, so it must be in the form of `{document_field_name\}` or `pages.{page_field_name\}`.
     */
    fieldMask?: string | null;
    /**
     * A raw document on Google Cloud Storage.
     */
    gcsDocument?: Schema$GoogleCloudDocumentaiV1beta3GcsDocument;
    /**
     * An inline document proto.
     */
    inlineDocument?: Schema$GoogleCloudDocumentaiV1beta3Document;
    /**
     * Inference-time options for the process API
     */
    processOptions?: Schema$GoogleCloudDocumentaiV1beta3ProcessOptions;
    /**
     * A raw document content (bytes).
     */
    rawDocument?: Schema$GoogleCloudDocumentaiV1beta3RawDocument;
    /**
     * Whether human review should be skipped for this request. Default to `false`.
     */
    skipHumanReview?: boolean | null;
  }
  /**
   * Response message for the ProcessDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ProcessResponse {
    /**
     * The document payload, will populate fields based on the processor's behavior.
     */
    document?: Schema$GoogleCloudDocumentaiV1beta3Document;
    /**
     * The name of the operation triggered by the processed document. If the human review process isn't triggered, this field is empty. It has the same response type and metadata as the long-running operation returned by ReviewDocument.
     */
    humanReviewOperation?: string | null;
    /**
     * The status of human review on the processed document.
     */
    humanReviewStatus?: Schema$GoogleCloudDocumentaiV1beta3HumanReviewStatus;
  }
  /**
   * Metadata about a property.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3PropertyMetadata {
    /**
     * Whether the property should be considered as "inactive".
     */
    inactive?: boolean | null;
  }
  /**
   * Payload message of raw document content (bytes).
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3RawDocument {
    /**
     * Inline document content.
     */
    content?: string | null;
    /**
     * The display name of the document, it supports all Unicode characters except the following: `*`, `?`, `[`, `]`, `%`, `{`, `\}`,`'`, `\"`, `,` `~`, `=` and `:` are reserved. If not specified, a default ID will be generated.
     */
    displayName?: string | null;
    /**
     * An IANA MIME type (RFC6838) indicating the nature and format of the content.
     */
    mimeType?: string | null;
  }
  /**
   * The long-running operation metadata for the ReviewDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * The Crowd Compute question ID.
     */
    questionId?: string | null;
    /**
     * Used only when Operation.done is false.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing. For example, the error message if the operation is failed.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for the ReviewDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ReviewDocumentRequest {
    /**
     * The document that needs human review.
     */
    document?: Schema$GoogleCloudDocumentaiV1beta3Document;
    /**
     * The document schema of the human review task.
     */
    documentSchema?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchema;
    /**
     * Whether the validation should be performed on the ad-hoc review request.
     */
    enableSchemaValidation?: boolean | null;
    /**
     * An inline document proto.
     */
    inlineDocument?: Schema$GoogleCloudDocumentaiV1beta3Document;
    /**
     * The priority of the human review task.
     */
    priority?: string | null;
  }
  /**
   * Response message for the ReviewDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3ReviewDocumentResponse {
    /**
     * The Cloud Storage uri for the human reviewed document if the review is succeeded.
     */
    gcsDestination?: string | null;
    /**
     * The reason why the review is rejected by reviewer.
     */
    rejectionReason?: string | null;
    /**
     * The state of the review operation.
     */
    state?: string | null;
  }
  /**
   * The revision reference specifies which revision on the document to read.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3RevisionRef {
    /**
     * Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    latestProcessorVersion?: string | null;
    /**
     * Reads the revision by the predefined case.
     */
    revisionCase?: string | null;
    /**
     * Reads the revision given by the id.
     */
    revisionId?: string | null;
  }
  /**
   * The long-running operation metadata for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * Request message for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest {
    /**
     * Required. The resource name of child ProcessorVersion to use as default. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{version\}`
     */
    defaultProcessorVersion?: string | null;
  }
  /**
   * Response message for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponse {}
  /**
   * The metadata that represents a processor version being created.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
    /**
     * The test dataset validation information.
     */
    testDatasetValidation?: Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation;
    /**
     * The training dataset validation information.
     */
    trainingDatasetValidation?: Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation;
  }
  /**
   * The dataset validation information. This includes any and all errors with documents and the dataset.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation {
    /**
     * The total number of dataset errors.
     */
    datasetErrorCount?: number | null;
    /**
     * Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.
     */
    datasetErrors?: Schema$GoogleRpcStatus[];
    /**
     * The total number of document errors.
     */
    documentErrorCount?: number | null;
    /**
     * Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.
     */
    documentErrors?: Schema$GoogleRpcStatus[];
  }
  /**
   * Request message for the TrainProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest {
    /**
     * Optional. The processor version to use as a base for training. This processor version must be a child of `parent`. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`.
     */
    baseProcessorVersion?: string | null;
    /**
     * Options to control Custom Document Extraction (CDE) Processor.
     */
    customDocumentExtractionOptions?: Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestCustomDocumentExtractionOptions;
    /**
     * Optional. The schema the processor version will be trained with.
     */
    documentSchema?: Schema$GoogleCloudDocumentaiV1beta3DocumentSchema;
    /**
     * Optional. The input data used to train the ProcessorVersion.
     */
    inputData?: Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData;
    /**
     * Required. The processor version to be created.
     */
    processorVersion?: Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion;
  }
  /**
   * Options to control the training of the Custom Document Extraction (CDE) Processor.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestCustomDocumentExtractionOptions {
    /**
     * Training method to use for CDE training.
     */
    trainingMethod?: string | null;
  }
  /**
   * The input data used to train a new ProcessorVersion.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData {
    /**
     * The documents used for testing the trained version.
     */
    testDocuments?: Schema$GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    /**
     * The documents used for training the new version.
     */
    trainingDocuments?: Schema$GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
  }
  /**
   * The response for TrainProcessorVersion.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponse {
    /**
     * The resource name of the processor version produced by training.
     */
    processorVersion?: string | null;
  }
  /**
   * The long-running operation metadata for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * Request message for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest {}
  /**
   * Response message for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponse {}
  export interface Schema$GoogleCloudDocumentaiV1beta3UpdateDatasetOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudDocumentaiV1beta3Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate (starts from the top of the image).
     */
    y?: number | null;
  }
  /**
   * The common metadata for long running operations.
   */
  export interface Schema$GoogleCloudDocumentaiV1CommonOperationMetadata {
    /**
     * The creation time of the operation.
     */
    createTime?: string | null;
    /**
     * A related resource to this operation.
     */
    resource?: string | null;
    /**
     * The state of the operation.
     */
    state?: string | null;
    /**
     * A message providing more details about the current state of processing.
     */
    stateMessage?: string | null;
    /**
     * The last update time of the operation.
     */
    updateTime?: string | null;
  }
  /**
   * The long-running operation metadata for the DeleteProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1DeleteProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeleteProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1DeleteProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * The long-running operation metadata for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1DeployProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * Response message for the DeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1DeployProcessorVersionResponse {}
  /**
   * The long-running operation metadata for the DisableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1DisableProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future.
   */
  export interface Schema$GoogleCloudDocumentaiV1DisableProcessorResponse {}
  /**
   * The long-running operation metadata for the EnableProcessor method.
   */
  export interface Schema$GoogleCloudDocumentaiV1EnableProcessorMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future.
   */
  export interface Schema$GoogleCloudDocumentaiV1EnableProcessorResponse {}
  /**
   * Metadata of the EvaluateProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * Response of the EvaluateProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse {
    /**
     * The resource name of the created evaluation.
     */
    evaluation?: string | null;
  }
  /**
   * The status of human review on a processed document.
   */
  export interface Schema$GoogleCloudDocumentaiV1HumanReviewStatus {
    /**
     * The name of the operation triggered by the processed document. This field is populated only when the state is `HUMAN_REVIEW_IN_PROGRESS`. It has the same response type and metadata as the long-running operation returned by ReviewDocument.
     */
    humanReviewOperation?: string | null;
    /**
     * The state of human review on the processing request.
     */
    state?: string | null;
    /**
     * A message providing more details about the human review state.
     */
    stateMessage?: string | null;
  }
  /**
   * The long-running operation metadata for the ReviewDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
    /**
     * The Crowd Compute question ID.
     */
    questionId?: string | null;
  }
  /**
   * Response message for the ReviewDocument method.
   */
  export interface Schema$GoogleCloudDocumentaiV1ReviewDocumentResponse {
    /**
     * The Cloud Storage uri for the human reviewed document if the review is succeeded.
     */
    gcsDestination?: string | null;
    /**
     * The reason why the review is rejected by reviewer.
     */
    rejectionReason?: string | null;
    /**
     * The state of the review operation.
     */
    state?: string | null;
  }
  /**
   * The long-running operation metadata for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * Response message for the SetDefaultProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponse {}
  /**
   * The metadata that represents a processor version being created.
   */
  export interface Schema$GoogleCloudDocumentaiV1TrainProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
    /**
     * The test dataset validation information.
     */
    testDatasetValidation?: Schema$GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation;
    /**
     * The training dataset validation information.
     */
    trainingDatasetValidation?: Schema$GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation;
  }
  /**
   * The dataset validation information. This includes any and all errors with documents and the dataset.
   */
  export interface Schema$GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation {
    /**
     * The total number of dataset errors.
     */
    datasetErrorCount?: number | null;
    /**
     * Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.
     */
    datasetErrors?: Schema$GoogleRpcStatus[];
    /**
     * The total number of document errors.
     */
    documentErrorCount?: number | null;
    /**
     * Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.
     */
    documentErrors?: Schema$GoogleRpcStatus[];
  }
  /**
   * The response for TrainProcessorVersion.
   */
  export interface Schema$GoogleCloudDocumentaiV1TrainProcessorVersionResponse {
    /**
     * The resource name of the processor version produced by training.
     */
    processorVersion?: string | null;
  }
  /**
   * The long-running operation metadata for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1UndeployProcessorVersionMetadata {
    /**
     * The basic metadata of the long-running operation.
     */
    commonMetadata?: Schema$GoogleCloudDocumentaiV1CommonOperationMetadata;
  }
  /**
   * Response message for the UndeployProcessorVersion method.
   */
  export interface Schema$GoogleCloudDocumentaiV1UndeployProcessorVersionResponse {}
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$GoogleCloudLocationListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$GoogleCloudLocationLocation[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$GoogleCloudLocationLocation {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$GoogleTypeColor {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$GoogleTypeDateTime {
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    day?: number | null;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    minutes?: number | null;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    month?: number | null;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    nanos?: number | null;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
    /**
     * Time zone.
     */
    timeZone?: Schema$GoogleTypeTimeZone;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    utcOffset?: string | null;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    year?: number | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
   */
  export interface Schema$GoogleTypePostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
     */
    sublocality?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$GoogleTypeTimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    version?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Operations;
    processors: Resource$Projects$Locations$Processors;
    processorTypes: Resource$Projects$Locations$Processortypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.processors = new Resource$Projects$Locations$Processors(
        this.context
      );
      this.processorTypes = new Resource$Projects$Locations$Processortypes(
        this.context
      );
    }

    /**
     * Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchProcessorTypes(
      params: Params$Resource$Projects$Locations$Fetchprocessortypes,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchProcessorTypes(
      params?: Params$Resource$Projects$Locations$Fetchprocessortypes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>;
    fetchProcessorTypes(
      params: Params$Resource$Projects$Locations$Fetchprocessortypes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchProcessorTypes(
      params: Params$Resource$Projects$Locations$Fetchprocessortypes,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
    ): void;
    fetchProcessorTypes(
      params: Params$Resource$Projects$Locations$Fetchprocessortypes,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
    ): void;
    fetchProcessorTypes(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
    ): void;
    fetchProcessorTypes(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fetchprocessortypes
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fetchprocessortypes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fetchprocessortypes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+parent}:fetchProcessorTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse>(
          parameters
        );
      }
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudLocationLocation>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudLocationLocation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudLocationLocation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationLocation>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Fetchprocessortypes
    extends StandardParameters {
    /**
     * Required. The location of processor types to list. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Processors {
    context: APIRequestContext;
    dataset: Resource$Projects$Locations$Processors$Dataset;
    humanReviewConfig: Resource$Projects$Locations$Processors$Humanreviewconfig;
    processorVersions: Resource$Projects$Locations$Processors$Processorversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataset = new Resource$Projects$Locations$Processors$Dataset(
        this.context
      );
      this.humanReviewConfig =
        new Resource$Projects$Locations$Processors$Humanreviewconfig(
          this.context
        );
      this.processorVersions =
        new Resource$Projects$Locations$Processors$Processorversions(
          this.context
        );
    }

    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Batchprocess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchProcess(
      params?: Params$Resource$Projects$Locations$Processors$Batchprocess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Batchprocess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Batchprocess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Batchprocess,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Batchprocess
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Batchprocess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Batchprocess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:batchProcess').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Processors$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Processors$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3Processor>;
    create(
      params: Params$Resource$Projects$Locations$Processors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processors$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Processors$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Create
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3Processor>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+parent}/processors').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3Processor>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3Processor>(
          parameters
        );
      }
    }

    /**
     * Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Processors$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Processors$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Processors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processors$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processors$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Disables a processor
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disable(
      params: Params$Resource$Projects$Locations$Processors$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Projects$Locations$Processors$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    disable(
      params: Params$Resource$Projects$Locations$Processors$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Projects$Locations$Processors$Disable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disable(
      params: Params$Resource$Projects$Locations$Processors$Disable,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disable(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Disable
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:disable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Enables a processor
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enable(
      params: Params$Resource$Projects$Locations$Processors$Enable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enable(
      params?: Params$Resource$Projects$Locations$Processors$Enable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    enable(
      params: Params$Resource$Projects$Locations$Processors$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Projects$Locations$Processors$Enable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enable(
      params: Params$Resource$Projects$Locations$Processors$Enable,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enable(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Enable
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:enable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a processor detail.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processors$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processors$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3Processor>;
    get(
      params: Params$Resource$Projects$Locations$Processors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processors$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processors$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Get
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Processor>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3Processor>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3Processor>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3Processor>(
          parameters
        );
      }
    }

    /**
     * Lists all processors which belong to this project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processors$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processors$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$List
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+parent}/processors').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListProcessorsResponse>(
          parameters
        );
      }
    }

    /**
     * Processes a single document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    process(
      params: Params$Resource$Projects$Locations$Processors$Process,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    process(
      params?: Params$Resource$Projects$Locations$Processors$Process,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>;
    process(
      params: Params$Resource$Projects$Locations$Processors$Process,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    process(
      params: Params$Resource$Projects$Locations$Processors$Process,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
    ): void;
    process(
      params: Params$Resource$Projects$Locations$Processors$Process,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
    ): void;
    process(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
    ): void;
    process(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Process
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Process;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processors$Process;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:process').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>(
          parameters
        );
      }
    }

    /**
     * Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setDefaultProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setDefaultProcessorVersion(
      params?: Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    setDefaultProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setDefaultProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    setDefaultProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    setDefaultProcessorVersion(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    setDefaultProcessorVersion(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta3/{+processor}:setDefaultProcessorVersion'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['processor'],
        pathParams: ['processor'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates metadata associated with a dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateDataset(
      params: Params$Resource$Projects$Locations$Processors$Updatedataset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateDataset(
      params?: Params$Resource$Projects$Locations$Processors$Updatedataset,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    updateDataset(
      params: Params$Resource$Projects$Locations$Processors$Updatedataset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateDataset(
      params: Params$Resource$Projects$Locations$Processors$Updatedataset,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    updateDataset(
      params: Params$Resource$Projects$Locations$Processors$Updatedataset,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    updateDataset(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    updateDataset(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Updatedataset
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Updatedataset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Updatedataset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processors$Batchprocess
    extends StandardParameters {
    /**
     * Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`, or `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) under which to create the processor. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3Processor;
  }
  export interface Params$Resource$Projects$Locations$Processors$Delete
    extends StandardParameters {
    /**
     * Required. The processor resource name to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Disable
    extends StandardParameters {
    /**
     * Required. The processor resource name to be disabled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3DisableProcessorRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Enable
    extends StandardParameters {
    /**
     * Required. The processor resource name to be enabled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3EnableProcessorRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Get
    extends StandardParameters {
    /**
     * Required. The processor resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$List
    extends StandardParameters {
    /**
     * The maximum number of processors to return. If unspecified, at most `50` processors will be returned. The maximum value is `100`. Values above `100` will be coerced to `100`.
     */
    pageSize?: number;
    /**
     * We will return the processors sorted by creation time. The page token will point to the next processor.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Process
    extends StandardParameters {
    /**
     * Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`, or `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3ProcessRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Setdefaultprocessorversion
    extends StandardParameters {
    /**
     * Required. The resource name of the Processor to change default version.
     */
    processor?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Updatedataset
    extends StandardParameters {
    /**
     * Dataset resource name. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/dataset`
     */
    name?: string;
    /**
     * The update mask applies to the resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3Dataset;
  }

  export class Resource$Projects$Locations$Processors$Dataset {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a set of documents.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDeleteDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDeleteDocuments(
      params?: Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDeleteDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDeleteDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDeleteDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDeleteDocuments(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDeleteDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+dataset}:batchDeleteDocuments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['dataset'],
        pathParams: ['dataset'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets the `DatasetSchema` of a `Dataset`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDatasetSchema(
      params?: Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>;
    getDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
    ): void;
    getDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
    ): void;
    getDatasetSchema(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
    ): void;
    getDatasetSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>(
          parameters
        );
      }
    }

    /**
     * Returns relevant fields present in the requested document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDocument(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdocument,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDocument(
      params?: Params$Resource$Projects$Locations$Processors$Dataset$Getdocument,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>;
    getDocument(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdocument,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDocument(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdocument,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
    ): void;
    getDocument(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Getdocument,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
    ): void;
    getDocument(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
    ): void;
    getDocument(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Dataset$Getdocument
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Dataset$Getdocument;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Dataset$Getdocument;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+dataset}:getDocument').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['dataset'],
        pathParams: ['dataset'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3GetDocumentResponse>(
          parameters
        );
      }
    }

    /**
     * Import documents into a dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    importDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    importDocuments(
      params?: Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    importDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+dataset}:importDocuments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['dataset'],
        pathParams: ['dataset'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates a `DatasetSchema`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateDatasetSchema(
      params?: Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>;
    updateDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
    ): void;
    updateDatasetSchema(
      params: Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
    ): void;
    updateDatasetSchema(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
    ): void;
    updateDatasetSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3DatasetSchema>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processors$Dataset$Batchdeletedocuments
    extends StandardParameters {
    /**
     * Required. The dataset resource name. Format: projects/{project\}/locations/{location\}/processors/{processor\}/dataset
     */
    dataset?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Dataset$Getdatasetschema
    extends StandardParameters {
    /**
     * Required. The dataset schema resource name. Format: projects/{project\}/locations/{location\}/processors/{processor\}/dataset/datasetSchema
     */
    name?: string;
    /**
     * If set, only returns the visible fields of the schema.
     */
    visibleFieldsOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Processors$Dataset$Getdocument
    extends StandardParameters {
    /**
     * Required. The resource name of the dataset that the document belongs to . Format: projects/{project\}/locations/{location\}/processors/{processor\}/dataset
     */
    dataset?: string;
    /**
     * Id of the document (indexed) managed by Content Warehouse.
     */
    'documentId.gcsManagedDocId.cwDocId'?: string;
    /**
     * Required. The Cloud Storage URI where the actual document is stored.
     */
    'documentId.gcsManagedDocId.gcsUri'?: string;
    /**
     * Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    'documentId.revisionRef.latestProcessorVersion'?: string;
    /**
     * Reads the revision by the predefined case.
     */
    'documentId.revisionRef.revisionCase'?: string;
    /**
     * Reads the revision given by the id.
     */
    'documentId.revisionRef.revisionId'?: string;
    /**
     * Required. The id of the document.
     */
    'documentId.unmanagedDocId.docId'?: string;
    /**
     * Last page number (one-based index) to be returned.
     */
    'pageRange.end'?: number;
    /**
     * First page number (one-based index) to be returned.
     */
    'pageRange.start'?: number;
    /**
     * If set, only fields listed here will be returned. Otherwise, all fields will be returned by default.
     */
    readMask?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Dataset$Importdocuments
    extends StandardParameters {
    /**
     * Required. The dataset resource name. Format: projects/{project\}/locations/{location\}/processors/{processor\}/dataset
     */
    dataset?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3ImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Dataset$Updatedatasetschema
    extends StandardParameters {
    /**
     * Dataset schema resource name. Format: `projects/{project\}/locations/{location\}/processors/{processor\}/dataset/datasetSchema`
     */
    name?: string;
    /**
     * The update mask applies to the resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3DatasetSchema;
  }

  export class Resource$Projects$Locations$Processors$Humanreviewconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Send a document for Human Review. The input document should be processed by the specified processor.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reviewDocument(
      params: Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reviewDocument(
      params?: Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    reviewDocument(
      params: Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reviewDocument(
      params: Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    reviewDocument(
      params: Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    reviewDocument(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    reviewDocument(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta3/{+humanReviewConfig}:reviewDocument'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['humanReviewConfig'],
        pathParams: ['humanReviewConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processors$Humanreviewconfig$Reviewdocument
    extends StandardParameters {
    /**
     * Required. The resource name of the HumanReviewConfig that the document will be reviewed with.
     */
    humanReviewConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3ReviewDocumentRequest;
  }

  export class Resource$Projects$Locations$Processors$Processorversions {
    context: APIRequestContext;
    evaluations: Resource$Projects$Locations$Processors$Processorversions$Evaluations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.evaluations =
        new Resource$Projects$Locations$Processors$Processorversions$Evaluations(
          this.context
        );
    }

    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchProcess(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchProcess(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:batchProcess').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes the processor version, all artifacts under the processor version will be deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deploys the processor version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Deploy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deploy(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Deploy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    deploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Deploy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Deploy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    deploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Deploy,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    deploy(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    deploy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Deploy
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Deploy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Deploy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:deploy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    evaluateProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    evaluateProcessorVersion(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    evaluateProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    evaluateProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    evaluateProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    evaluateProcessorVersion(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    evaluateProcessorVersion(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta3/{+processorVersion}:evaluateProcessorVersion'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['processorVersion'],
        pathParams: ['processorVersion'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a processor version detail.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>;
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Get
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessorVersion>(
          parameters
        );
      }
    }

    /**
     * Imports a processor version from source processor version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    importProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    importProcessorVersion(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    importProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importProcessorVersion(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importProcessorVersion(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importProcessorVersion(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta3/{+parent}/processorVersions:importProcessorVersion'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists all versions of a processor.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$List
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+parent}/processorVersions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse>(
          parameters
        );
      }
    }

    /**
     * Processes a single document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    process(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Process,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    process(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Process,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>;
    process(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Process,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    process(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Process,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
    ): void;
    process(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Process,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
    ): void;
    process(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
    ): void;
    process(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Process
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Process;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Process;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:process').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessResponse>(
          parameters
        );
      }
    }

    /**
     * Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    train(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Train,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    train(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Train,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    train(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Train,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    train(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Train,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Train,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Train
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Train;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Train;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta3/{+parent}/processorVersions:train'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Undeploys the processor version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undeploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undeploy(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    undeploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undeploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    undeploy(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    undeploy(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    undeploy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}:undeploy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Batchprocess
    extends StandardParameters {
    /**
     * Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`, or `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3BatchProcessRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Delete
    extends StandardParameters {
    /**
     * Required. The processor version resource name to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Deploy
    extends StandardParameters {
    /**
     * Required. The processor version resource name to be deployed.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Evaluateprocessorversion
    extends StandardParameters {
    /**
     * Required. The resource name of the ProcessorVersion to evaluate. `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    processorVersion?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Get
    extends StandardParameters {
    /**
     * Required. The processor resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Importprocessorversion
    extends StandardParameters {
    /**
     * Required. The destination processor name to create the processor version in. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$List
    extends StandardParameters {
    /**
     * The maximum number of processor versions to return. If unspecified, at most `10` processor versions will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`.
     */
    pageSize?: number;
    /**
     * We will return the processor versions sorted by creation time. The page token will point to the next processor version.
     */
    pageToken?: string;
    /**
     * Required. The parent (project, location and processor) to list all versions. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Process
    extends StandardParameters {
    /**
     * Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`, or `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3ProcessRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Train
    extends StandardParameters {
    /**
     * Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project\}/locations/{location\}/processors/{processor\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Undeploy
    extends StandardParameters {
    /**
     * Required. The processor version resource name to be undeployed.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest;
  }

  export class Resource$Projects$Locations$Processors$Processorversions$Evaluations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a specific evaluation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3Evaluation>;
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3Evaluation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3Evaluation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3Evaluation>(
          parameters
        );
      }
    }

    /**
     * Retrieves a set of evaluations for a given processor version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+parent}/evaluations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListEvaluationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Evaluation to get. `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}/evaluations/{evaluation\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processors$Processorversions$Evaluations$List
    extends StandardParameters {
    /**
     * The standard list page size. If unspecified, at most `5` evaluations are returned. The maximum value is `100`. Values above `100` are coerced to `100`.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project\}/locations/{location\}/processors/{processor\}/processorVersions/{processorVersion\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Processortypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a processor type detail.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Processortypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Processortypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>;
    get(
      params: Params$Resource$Projects$Locations$Processortypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processortypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Processortypes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processortypes$Get
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processortypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processortypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ProcessorType>(
          parameters
        );
      }
    }

    /**
     * Lists the processor types that exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Processortypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Processortypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Processortypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processortypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Processortypes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Processortypes$List
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Processortypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Processortypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://documentai.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta3/{+parent}/processorTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Processortypes$Get
    extends StandardParameters {
    /**
     * Required. The processor type resource name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Processortypes$List
    extends StandardParameters {
    /**
     * The maximum number of processor types to return. If unspecified, at most `100` processor types will be returned. The maximum value is `500`. Values above `500` will be coerced to `500`.
     */
    pageSize?: number;
    /**
     * Used to retrieve the next page of results, empty if at the end of the list.
     */
    pageToken?: string;
    /**
     * Required. The location of processor types to list. Format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
}
