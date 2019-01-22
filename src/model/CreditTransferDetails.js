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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Winsms) {
      root.Winsms = {};
    }
    root.Winsms.CreditTransferDetails = factory(root.Winsms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreditTransferDetails model module.
   * @module model/CreditTransferDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreditTransferDetails</code>.
   * @alias module:model/CreditTransferDetails
   * @class
   * @param sendingAccountNumber {Number} The WinSMS account number of the account from which credits will be deducted.
   * @param receivingAccountNumber {Number} The WinSMS account number of the account to which credits will be added.
   * @param transferQuantity {Number} The number of credits to transfer from the sending account to the receiving account.
   */
  var exports = function(sendingAccountNumber, receivingAccountNumber, transferQuantity) {
    var _this = this;

    _this['sendingAccountNumber'] = sendingAccountNumber;
    _this['receivingAccountNumber'] = receivingAccountNumber;
    _this['transferQuantity'] = transferQuantity;
  };

  /**
   * Constructs a <code>CreditTransferDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditTransferDetails} obj Optional instance to populate.
   * @return {module:model/CreditTransferDetails} The populated <code>CreditTransferDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sendingAccountNumber')) {
        obj['sendingAccountNumber'] = ApiClient.convertToType(data['sendingAccountNumber'], 'Number');
      }
      if (data.hasOwnProperty('receivingAccountNumber')) {
        obj['receivingAccountNumber'] = ApiClient.convertToType(data['receivingAccountNumber'], 'Number');
      }
      if (data.hasOwnProperty('transferQuantity')) {
        obj['transferQuantity'] = ApiClient.convertToType(data['transferQuantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The WinSMS account number of the account from which credits will be deducted.
   * @member {Number} sendingAccountNumber
   */
  exports.prototype['sendingAccountNumber'] = undefined;
  /**
   * The WinSMS account number of the account to which credits will be added.
   * @member {Number} receivingAccountNumber
   */
  exports.prototype['receivingAccountNumber'] = undefined;
  /**
   * The number of credits to transfer from the sending account to the receiving account.
   * @member {Number} transferQuantity
   */
  exports.prototype['transferQuantity'] = undefined;



  return exports;
}));

