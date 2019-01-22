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
    root.Winsms.ShortcodeMessage = factory(root.Winsms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShortcodeMessage model module.
   * @module model/ShortcodeMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShortcodeMessage</code>.
   * @alias module:model/ShortcodeMessage
   * @class
   * @param incomingApiMessageId {Number} The unique API message id assigned to this incoming message.
   * @param mobileNumber {String} The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
   * @param receiveTime {Number} The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.
   * @param messageText {String} The text of the incoming SMS message.
   */
  var exports = function(incomingApiMessageId, mobileNumber, receiveTime, messageText) {
    var _this = this;

    _this['incomingApiMessageId'] = incomingApiMessageId;
    _this['mobileNumber'] = mobileNumber;
    _this['receiveTime'] = receiveTime;
    _this['messageText'] = messageText;
  };

  /**
   * Constructs a <code>ShortcodeMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShortcodeMessage} obj Optional instance to populate.
   * @return {module:model/ShortcodeMessage} The populated <code>ShortcodeMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('incomingApiMessageId')) {
        obj['incomingApiMessageId'] = ApiClient.convertToType(data['incomingApiMessageId'], 'Number');
      }
      if (data.hasOwnProperty('mobileNumber')) {
        obj['mobileNumber'] = ApiClient.convertToType(data['mobileNumber'], 'String');
      }
      if (data.hasOwnProperty('receiveTime')) {
        obj['receiveTime'] = ApiClient.convertToType(data['receiveTime'], 'Number');
      }
      if (data.hasOwnProperty('messageText')) {
        obj['messageText'] = ApiClient.convertToType(data['messageText'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique API message id assigned to this incoming message.
   * @member {Number} incomingApiMessageId
   */
  exports.prototype['incomingApiMessageId'] = undefined;
  /**
   * The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
   * @member {String} mobileNumber
   */
  exports.prototype['mobileNumber'] = undefined;
  /**
   * The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.
   * @member {Number} receiveTime
   */
  exports.prototype['receiveTime'] = undefined;
  /**
   * The text of the incoming SMS message.
   * @member {String} messageText
   */
  exports.prototype['messageText'] = undefined;



  return exports;
}));


