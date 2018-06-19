/*
    thomasjm - Abstract browser salt value. Should be immutable.
	
*/
class BrowserSalt {
	
	constructor(salt) {
		if (salt) {
			this.salt = salt;
		} else {
			this.salt = BrowserSalt.generateSalt();
		}
	}
	
	getSalt() { 
		return this.salt;
	}
	
	static generateSalt() {
		console.warn("Generating new browser salt");
		return Protects.random(Constants.RANDOM_PARANOIA, Constants.SALT_SIZE);
	}
	
}



