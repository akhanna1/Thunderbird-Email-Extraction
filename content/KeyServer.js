/*
Interface into key server session lifecycle and functionality
 */

class KeyServer {
	
	/*
		Called at start of application, initializes keys used throughout application and syncs with server.
        Callback(identity, key, keyId)
	*/
	static syncKeys(token, inputKey, inputKeyIdentifier, callback) {
		let key = inputKey;
		let keyIdentifier = inputKeyIdentifier;
			if (!key || !keyIdentifier) {
				console.log("Missing keys in storage, need to re-create and sync keys with server");
				//Create a random client key
				key = Protects.generateKey(Constants.RANDOM_PARANOIA, Constants.SYMMETRIC_KEY_SIZE);
				//Create a random key identifier
                keyIdentifier = Protects.random(Constants.RANDOM_PARANOIA, Constants.KEY_IDENTIFIER_SIZE);
			}
            //Upload client key materials to server
			KeyServer.sendClientKey(token, key, keyIdentifier, function (sentToken, sentKey, sentKeyIdentifier) {
				console.debug("Sent keys to server");
                callback(sentKey, sentKeyIdentifier);
			});
	}
	
	/*
		Retieve the server public key, protect 'clientKey' with public key, upload protected 'clientKey' and 'keyIdentifier' to server.
		The server associates the 'keyIdentifier' with the authentication token / browser ID (stored in 'identity').
	*/
	static sendClientKey(token, key, keyIdentifier, callback) {
		ServerAPI.getServerKey(token, function (json) {
            let serverKey = json["value"];
            let protectedKey = Protects.protectClientKey(key, serverKey);
            let keyMaterial = {
				key : protectedKey,
				keyIdentifier : keyIdentifier
			};
			ServerAPI.sendClientKey(token, keyMaterial, function (json) {
				callback(token, key, keyIdentifier);
			});
		});
	}

}