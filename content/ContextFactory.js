/*
 thomasjm - Builds a context.
 */


class ContextFactory {

    /*
     Build a new context.
     */
    static build(callback) {
        StorageFacade.load(function (localStore) {
            //First load the local store from browser storage
            GlobalContext.setLocalStore(localStore);
            console.debug("Loaded from browser storage: " + localStore.toString());
            //Next, identify browser to server and update localstore
            let storedBrowserIdentifier = localStore.getBrowserIdentifier();
            let browserIdentity = new BrowserIdentity(storedBrowserIdentifier);
            console.debug("Identifying to server with identifier = " + browserIdentity.getIdentifier());
            Server.identify(browserIdentity, function (browserId, browserIdentifier, browserToken) {
                //Update localStore
                localStore.setBrowserId(browserId);
                localStore.setBrowserIdentifier(browserIdentifier);
                localStore.setBrowserToken(browserToken);
                console.debug("Browser is identified with: " + browserId + " " + browserIdentifier + " " + browserToken);
                GlobalContext.setBrowserIdentity(browserIdentity);
                //Next, update browser salt
                let browserSalt = new BrowserSalt(localStore.getBrowserSalt());
                localStore.setBrowserSalt(browserSalt.getSalt());
                GlobalContext.setBrowserSalt(browserSalt);
                console.debug("Protecting values using browser salt = " + browserSalt.getSalt());
                //Next, build observations
                let observations = new Observations(browserId, browserSalt);
				console.debug("Setting observations");
                GlobalContext.setObservations(observations);
                let clientKey = localStore.getClientKey();
                let clientKeyIdentifier = localStore.getClientKeyIdentifier();
                console.debug("Loaded keys from storage: " + clientKey + ",  " + clientKeyIdentifier);
                KeyServer.syncKeys(localStore.getBrowserToken(), clientKey, clientKeyIdentifier, function (sentKey, sentKeyIdentifier) {
                    //Update localStore
                    localStore.setClientKey(sentKey);
                    localStore.setClientKeyIdentifier(sentKeyIdentifier);
                    console.debug("Sent keys to server: " + sentKey + ",  " + sentKeyIdentifier);
                    localStore.save();
                    let clientIdKey = "clientId";
                    let clientIdValue = localStore.getClientId();
                    let emailKey = "email";
                    let emailValue = localStore.getEmail();
                    Server.sendBrowserIdentityProperties(browserToken, clientIdKey, clientIdValue, emailKey, emailValue, function() {
                        console.debug("Sent properties to server");
                        callback();
                    })
                });
            });
        });

    }

}



