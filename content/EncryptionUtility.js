/*
    thomasjm - Abstracts encrypion functionality.
*/
class EncryptionUtility
{
	static symmetricEncrypt(key, iv, plaintext) {
        let byteEncryptionKey = CryptoJS.enc.Base64.parse(key);
        let byteEncryptionIv = CryptoJS.enc.Base64.parse(iv);
        let encrypted = CryptoJS.AES.encrypt(plaintext, byteEncryptionKey, {mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: byteEncryptionIv});
        let cipher = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
		return cipher;
	}

	static symmetricDecrypt(key, cipher) {
        let decrypted = CryptoJS.AES.decrypt(cipher, key);
		return decrypted;
	}

	static asymmetricEncrypt(key, plaintext) {
        let encrypt = new JSEncrypt();
		encrypt.setPublicKey(key);
        let encrypted = encrypt.encrypt(plaintext);
		return encrypted;
	}

	static asymmetricDecrypt(key, cipher) {
        let decrypt = new JSEncrypt();
		decrypt.setPrivateKey(key);
        let plaintext = decrypt.decrypt(cipher);
		return plaintext;
	}

	static bcryptSalt(rounds) {
		return dcodeIO.bcrypt.genSaltSync(rounds);
	}

	static bcryptHash(input, salt) {
		return dcodeIO.bcrypt.hashSync(input, salt);
	}

	static bcryptHashAsync(input, salt) {
		return dcodeIO.bcrypt.hash(input, salt);
	}

}