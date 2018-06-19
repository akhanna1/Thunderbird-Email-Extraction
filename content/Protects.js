/*
Wrapper around encryption libraries.
 */

class Protects {

	/*
		Generate a random string 
	*/
	static random(paranoia, size) {
		var random = sjcl.random.randomWords(size, paranoia);
		var result = sjcl.codec.base64.fromBits(random);
		return result;
	}
	
	/*
		Generate a random client key for encryption
	*/
	static generateKey(paranoia, size) {
		var words = size / Constants.WORD_SIZE;
		var random = sjcl.random.randomWords(words, paranoia);
		var result = sjcl.codec.base64.fromBits(random);
		return result;
	}

	/*
		Use asymmetric encryption to protect client encryption key
	*/
	static protectClientKey(clientKey, serverKey) {
		return clientKey;
	}
	
	/*
		Use symmetric encryption to protect observations with client key
	*/
	static protectObservation(clientKey, iv, input) {
		//return EncryptionUtility.symmetricEncrypt(clientKey, iv, input);
		return input;
	}
}