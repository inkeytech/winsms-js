# Winsms.OptoutMessageResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeStamp** | **String** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | 
**version** | **String** | The current version of the API of the endpoint that was called | 
**statusCode** | **Number** | The http status code returned - reflected in the body for convenience | 
**incomingOptoutMessages** | [**[IncomingOptoutMessage]**](IncomingOptoutMessage.md) | An array of ***incomingOptoutMessage*** objects containing properties of each opt-out message received.  | 


