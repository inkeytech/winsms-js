/**
 * WinSMS
 * WinSMS RESTful API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@winsms.co.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreditBalanceResponse', 'model/CreditTransferDetails', 'model/CreditTransferResponse', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreditBalanceResponse'), require('../model/CreditTransferDetails'), require('../model/CreditTransferResponse'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Winsms) {
      root.Winsms = {};
    }
    root.Winsms.CreditsApi = factory(root.Winsms.ApiClient, root.Winsms.CreditBalanceResponse, root.Winsms.CreditTransferDetails, root.Winsms.CreditTransferResponse, root.Winsms.ErrorDetails);
  }
}(this, function(ApiClient, CreditBalanceResponse, CreditTransferDetails, CreditTransferResponse, ErrorDetails) {
  'use strict';

  /**
   * Credits service.
   * @module api/CreditsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CreditsApi. 
   * @alias module:api/CreditsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCreditBalance operation.
     * @callback module:api/CreditsApi~getCreditBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreditBalanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your current WinSMS credit balance
     * Get the current remaining credit balance for the account.  ***Note*** - The credit balance is expressed as a value with a single decimal place. 
     * @param {module:api/CreditsApi~getCreditBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreditBalanceResponse}
     */
    this.getCreditBalance = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreditBalanceResponse;

      return this.apiClient.callApi(
        '/credits/balance', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferCredits operation.
     * @callback module:api/CreditsApi~transferCreditsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreditTransferResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer credits between main and sub accounts.
     * Transfer credits between accounts. - From Main account to Sub account.  - From Sub account to Main account.  - From Sub account to another Sub account.  Your WinSMS account number and sub account number/s can be obtained by logging in to the WinSMS Client Zone (www.winsms.co.za/cz) with the main account&#39;s credentials.  The main account number is on the home tab and the sub account numbers are under the sub accounts tab.  Account numbers should be submitted as integers. Do not add the &#39;W&#39; prefix. 
     * @param {module:model/CreditTransferDetails} creditTransferDetails The details of the credit transfer. Sender account number, recipient account number, and number of credits to transfer.
     * @param {module:api/CreditsApi~transferCreditsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreditTransferResponse}
     */
    this.transferCredits = function(creditTransferDetails, callback) {
      var postBody = creditTransferDetails;

      // verify the required parameter 'creditTransferDetails' is set
      if (creditTransferDetails === undefined || creditTransferDetails === null) {
        throw new Error("Missing the required parameter 'creditTransferDetails' when calling transferCredits");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APIKeyHeader'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreditTransferResponse;

      return this.apiClient.callApi(
        '/credits/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
