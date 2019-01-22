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
    root.Winsms.MessageStatus = factory(root.Winsms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageStatus model module.
   * @module model/MessageStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MessageStatus</code>.
   * @alias module:model/MessageStatus
   * @class
   * @param apiMessageId {Number} The WinSMS API Message Id identifying the SMS message.
   * @param mobileNumber {String} The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
   * @param statusDelivered {Boolean} A boolean value indicating whether an SMS message was successfully delivered to the recipient's mobile number
   * @param statusErrorCode {String} If the SMS message was successfully delivered, this value will be blank. If the ***statusDelivered*** value is false, this will contain a string indicating the current status of the SMS message. Possible values- | Value | Description | Type | |-------|-------------|------| | SENT| The message has been sent to the recipient, but no delivery report has been received | Temporary | | NOTFOUND | Either an incorrect MessageID was sent in the request, or the message was sent more than 90 days previously | Permanent | | INQUEUE | Message is queued for sending | Temporary | | SENDINGFAILED | The message was not transmitted, due to e.g. an invalid destination number or insufficient credits | Permanent | | FAILED | The message was sent but could not be delivered to the recipient due to e.g. no such subscriber, subscriber's phone offline | Permanent | 
   * @param statusTime {Number} The date and time of the last status update for this message, in the format YYYYMMDDHHmm.  If the message was delivered (**statusDelivered = true**) then this is a final status time. If the message is still awaiting delivery, this time might change when updates are received. 
   * @param creditCost {Number} The number of credits deducted from your account for the SMS to this recipient.   If delivery to the recipient is unsuccessful, under certain conditions, this may be 0. 
   */
  var exports = function(apiMessageId, mobileNumber, statusDelivered, statusErrorCode, statusTime, creditCost) {
    var _this = this;

    _this['apiMessageId'] = apiMessageId;
    _this['mobileNumber'] = mobileNumber;
    _this['statusDelivered'] = statusDelivered;
    _this['statusErrorCode'] = statusErrorCode;
    _this['statusTime'] = statusTime;
    _this['creditCost'] = creditCost;
  };

  /**
   * Constructs a <code>MessageStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageStatus} obj Optional instance to populate.
   * @return {module:model/MessageStatus} The populated <code>MessageStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiMessageId')) {
        obj['apiMessageId'] = ApiClient.convertToType(data['apiMessageId'], 'Number');
      }
      if (data.hasOwnProperty('mobileNumber')) {
        obj['mobileNumber'] = ApiClient.convertToType(data['mobileNumber'], 'String');
      }
      if (data.hasOwnProperty('statusDelivered')) {
        obj['statusDelivered'] = ApiClient.convertToType(data['statusDelivered'], 'Boolean');
      }
      if (data.hasOwnProperty('statusErrorCode')) {
        obj['statusErrorCode'] = ApiClient.convertToType(data['statusErrorCode'], 'String');
      }
      if (data.hasOwnProperty('statusTime')) {
        obj['statusTime'] = ApiClient.convertToType(data['statusTime'], 'Number');
      }
      if (data.hasOwnProperty('creditCost')) {
        obj['creditCost'] = ApiClient.convertToType(data['creditCost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The WinSMS API Message Id identifying the SMS message.
   * @member {Number} apiMessageId
   */
  exports.prototype['apiMessageId'] = undefined;
  /**
   * The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
   * @member {String} mobileNumber
   */
  exports.prototype['mobileNumber'] = undefined;
  /**
   * A boolean value indicating whether an SMS message was successfully delivered to the recipient's mobile number
   * @member {Boolean} statusDelivered
   */
  exports.prototype['statusDelivered'] = undefined;
  /**
   * If the SMS message was successfully delivered, this value will be blank. If the ***statusDelivered*** value is false, this will contain a string indicating the current status of the SMS message. Possible values- | Value | Description | Type | |-------|-------------|------| | SENT| The message has been sent to the recipient, but no delivery report has been received | Temporary | | NOTFOUND | Either an incorrect MessageID was sent in the request, or the message was sent more than 90 days previously | Permanent | | INQUEUE | Message is queued for sending | Temporary | | SENDINGFAILED | The message was not transmitted, due to e.g. an invalid destination number or insufficient credits | Permanent | | FAILED | The message was sent but could not be delivered to the recipient due to e.g. no such subscriber, subscriber's phone offline | Permanent | 
   * @member {String} statusErrorCode
   */
  exports.prototype['statusErrorCode'] = undefined;
  /**
   * The date and time of the last status update for this message, in the format YYYYMMDDHHmm.  If the message was delivered (**statusDelivered = true**) then this is a final status time. If the message is still awaiting delivery, this time might change when updates are received. 
   * @member {Number} statusTime
   */
  exports.prototype['statusTime'] = undefined;
  /**
   * The number of credits deducted from your account for the SMS to this recipient.   If delivery to the recipient is unsuccessful, under certain conditions, this may be 0. 
   * @member {Number} creditCost
   */
  exports.prototype['creditCost'] = undefined;



  return exports;
}));


