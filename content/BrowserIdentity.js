/*
    thomasjm - Abstract local browser identity logic. Immutable.
	
*/
class BrowserIdentity {
	
	constructor(identifier) {
		if (identifier) {
			this.identifier = identifier;
		} else {
			this.identifier = BrowserIdentity.generateIdentity();
		}
	}
	
	getIdentifier() {
		return this.identifier;
	}
	
	static generateIdentity() {
		console.warn("Generating new browser identity");
		return Protects.random(Constants.RANDOM_PARANOIA, Constants.BROWSER_IDENTIFIER_SIZE);
	}
	
}



