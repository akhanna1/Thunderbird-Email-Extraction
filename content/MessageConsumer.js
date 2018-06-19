/*
    thomasjm - This file contains the functionality for handling messages from other scripts, sent to the background script.
*/
class MessageConsumer
{
	static consume(input, sender) {
        let messageType = input.type;
        let message = input.message;
		switch (messageType) {
			case MessageType.LOG:
				console.log(message);
				break;
			case MessageType.DEBUG:
				console.debug(message);
				break;
			case MessageType.WARN:
				console.warn(message);
				break;
			case MessageType.ERROR:
				console.error(message);
				break;
			case MessageType.OBSERVATION:
				GlobalContext.instance().getObservations().record(sender, message);
				break;
			default:
				console.warn("Unknown message: " + messageType);
				break;
		}
	}

}
