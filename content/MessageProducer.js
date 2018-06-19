/*
    Produces messages for background script consumer.
*/

class MessageProducer {
    
	static produceIdentityMessage(key, value) {
        let toSend = MessageFactory.build(MessageType.IDENTITY, key, value);
        let port = chrome.runtime.connect();
		if (port != undefined) {
			port.postMessage(toSend);
		} else {
			console.warn("Undefined port encountered while sending" + toSend.type + " " + toSend.message)
		}
	}

	static produceLoggingMessage(type, message) {
        let toSend = MessageFactory.build(type, message);
        let port = chrome.runtime.connect();
		if (port != undefined) {
			port.postMessage(toSend);
		} else {
			console.warn("Undefined port encountered while sending" + toSend.type + " " + toSend.message)
		}
	}

	static produceObservationMessage(message) {
        let toSend = MessageFactory.build(MessageType.OBSERVATION, message);
        let port = chrome.runtime.connect();
		if (port != undefined) {
			port.postMessage(toSend);
		} else {
			console.warn("Undefined port encountered while sending" + toSend.type + " " + toSend.message)
		}
	}

}