/*
    thomasjm - Represents root context of running application.
*/

var globalContext = new Context();

class GlobalContext {

	static setLocalStore(input) {
        GlobalContext.instance().setLocalStore(input)
	}

    static setObservations(input) {
        GlobalContext.instance().setObservations(input)
    }

    static setBrowserSalt(input) {
        GlobalContext.instance().setBrowserSalt(input);
    }

    static setBrowserIdentity(input) {
        GlobalContext.instance().setBrowserIdentity(input)
    }

    static send(toSend) {
        GlobalContext.instance().getObservations().recordEvent(toSend);
        GlobalContext.instance().getObservations().conditionallyFlush();
    }

    static toServer(observationJson) {
        SendCommand.send(GlobalContext.instance(), observationJson);
    }

    static sendIdentityProperty(key, value) {
        SendCommand.sendIdentityProperty(GlobalContext.instance(), key, value);
    }

	static instance() {
	    return globalContext;
	}

	static dispose() {
        GlobalContext.instance().getLocalStore().save();
        GlobalContext.instance().getObservations().flush();
    }
	
}



