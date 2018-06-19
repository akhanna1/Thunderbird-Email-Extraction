/*
 thomasjm - Command to send values
 */

class SendCommand {

    static send(context, toSend) {
        let token = context.getLocalStore().getBrowserToken();
        let key = context.getLocalStore().getClientKey();
        let keyIdentifier = context.getLocalStore().getClientKeyIdentifier();
        Server.send(token, key, keyIdentifier, toSend, function () {
            let clientIdKey = "clientId";
            let clientIdValue = context.getLocalStore().getClientId();
            let emailKey = "email";
            let emailValue = context.getLocalStore().getEmail();
            Server.sendBrowserIdentityProperties(token, clientIdKey, clientIdValue, emailKey, emailValue, function () {
                console.debug("Sent observations to server");
            })
        });
    }

    static sendIdentityProperty(context, key, value) {
        let token = context.getLocalStore().getBrowserToken();
        Server.sendBrowserIdentityProperty(token, key, value, function() {
            console.debug("Sent identity property to server");
        });
    }
}



