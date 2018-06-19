/*
    thomasjm - Represents instance of context of running application.
	
*/
class Context {
	
	setLocalStore(input) {
		this.localStore = input;
	}

	getLocalStore() {
		return this.localStore;
	}

	setObservations(input) {
		this.observations = input;
	}

	getObservations() {
		return this.observations;
	}

	setBrowserSalt(input) {
	    this.browserSalt = input;
    }

    getBrowserSalt() {
	    return this.browserSalt;
    }

    setBrowserIdentity(input) {
	    this.browserIdentity = input;
    }

    getBrowserIdentity() {
	    return this.browserIdentity;
    }
	
	
}



