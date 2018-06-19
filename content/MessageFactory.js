/*
    Creates message objects from inputs.
    Message are expected to be json-compatible and include a type field (adheres to MessageType) and message object
*/

var EXPORTED_SYMBOLS = ['MessageFactory'];
class MessageFactory
{
    
	static build(type, message) {
        let output = {
			"type" : type, 
			"message" : message
		};
		return output;
	}

	static buildIdentity(type, key, value) {
        let output = {
			"type" : type, 
			"key" : key,
			"value" : value
		};
		return output;
	}

}