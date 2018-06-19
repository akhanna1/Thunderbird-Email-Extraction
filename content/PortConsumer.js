/*
    thomasjm - This file contains Port consumer functionality for: chrome.runtime.onConnect
*/

class PortConsumer {


    static consume(port) {
        port.onMessage.addListener(MessageConsumer.consume);
    }

}