/*
 Interface into data collection server session lifecycle and functionality
 */


class Server {

    /*
     Identify and authenticate with the server using the provided browser identity.
     */
    static identify(browserIdentity, callback) {
        let identity = {
            identifier: browserIdentity.getIdentifier(),
            properties: ""
        };
        //Upload the browsers identity to the server and retrieve authentication materials
        ServerAPI.identify(identity, function (json) {
            let id = json["id"];
            let identifier = json["identifier"];
            let token = json["token"];
            console.log("Browser identified with ID = " + id + " identifier = " + identifier + " token = " + token);
            //Save the browser identity for next time
            callback(id, identifier, token);
        });
    }

    /*
     Send observations to server using provided credentials and encryption material.
     */
    static send(token, key, keyId, content, callback) {
        console.debug("Successfully sent properties to the server#### 11111!");
        let compressed = LZString.compressToUTF16(content);
        let iv = Protects.generateKey(Constants.RANDOM_PARANOIA, Constants.SYMMETRIC_KEY_SIZE);
        //let protectedMessage = Protects.protectObservation(key, iv, compressed);
        let message = {
            keyId: keyId,
            iv: iv,
            value: content,
			rawHash: "",
			compressedHash: "",
			status: 0
        };
        ServerAPI.sendObservations(token, message, function (output) {
            console.debug("Successfully sent properties to the server####!");
            callback();
        });
    }

    /*
     Send browser identifying properties
     */
    static sendBrowserIdentityProperties(token, propertyName, propertyValue, secondName, secondValue, callback) {
        let properties = [];
        let payload = {
            key: propertyName,
            value: propertyValue == null ? "" : propertyValue
        };
        let identity = {
            token: token
        };
        properties.push(payload);
        let secondPayload = {
            key: secondName,
            value: secondValue == null ? "" : secondValue
        };
        properties.push(secondPayload);
        ServerAPI.sendBrowserIdentityProperties(token, properties, function (json) {
            console.debug("Successfully sent browser identity properties with results!");
            callback();
        });
    }

    /*
     Send browser identifying property
     */
    static sendBrowserIdentityProperty(token, propertyName, propertyValue, callback) {
        let properties = [];
        let payload = {
            key: propertyName,
            value: propertyValue == null ? "" : propertyValue
        };
        let identity = {
            token: token
        };	
        properties.push(payload);
        ServerAPI.sendBrowserIdentityProperties(token, properties, function (json) {
            console.debug("Successfully sent browser identity property with results!");
            callback();
        });
    }
}
