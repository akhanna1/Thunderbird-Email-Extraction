/*
 thomasjm - Key-value store of items in memory.
 */

class LocalStore {

    constructor(items) {
        this.items = items;
    }

    getBrowserToken() {
        return this.get(GUIDs.BrowserTokenIdentifier);
    }

    setBrowserToken(input) {
        this.set(GUIDs.BrowserTokenIdentifier, input);
    }

    getBrowserSalt() {
        let temp = this.get(GUIDs.BrowserSaltIdentifier);
        if (!temp) {
            temp = this.get('browserSalt')
        }
        return temp;
    }

    setBrowserSalt(input) {
        this.set(GUIDs.BrowserSaltIdentifier, input);
        this.set('browserSalt', input);
    }

    getBrowserId() {
        return this.get(GUIDs.BrowserIdIdentifier);
    }

    setBrowserId(input) {
        this.set(GUIDs.BrowserIdIdentifier, input);
    }

    getBrowserIdentifier() {
        let temp = this.get(GUIDs.BrowserIdentifierIdentifier);
        if (!temp) {
            temp = this.get('browserIdentity')
        }
        return temp;
    }

    setBrowserIdentifier(input) {
        this.set(GUIDs.BrowserIdentifierIdentifier, input);
        this.set('browserIdentity', input);
    }

    getClientKey() {
        return this.get(GUIDs.ClientKeyIdentifier);
    }

    setClientKey(input) {
        this.set(GUIDs.ClientKeyIdentifier, input);
    }

    getClientKeyIdentifier() {
        return this.get(GUIDs.ClientKeyIdentifierIdentifier);
    }

    setClientKeyIdentifier(input) {
        this.set(GUIDs.ClientKeyIdentifierIdentifier, input);
    }

    getEmail() {
        return this.get(GUIDs.EmailIdentifier);
    }

    setEmail(input) {
        this.set(GUIDs.EmailIdentifier, input);
    }

    getClientId() {
        return this.get(GUIDs.ClientIdIdentifier);
    }

    setClientId(input) {
        this.set(GUIDs.ClientIdIdentifier, input);
    }

    set(key, value) {
        this.items[key] = value;
    }

    get(key) {
        return this.items[key];
    }

    underlying() {
        return this.items;
    }

    loadable() {
        return this.items;
    }

    saveable() {
        let toReturn = this.items;
        let output = Object.assign({}, toReturn);
        delete output['browserIdentity'];
        delete output['browserSalt'];
        return output;
    }

    save() {
        StorageFacade.save(this);
    }

    toString() {
        return JSON.stringify(this.items);
    }

    static empty() {
        let results = new LocalStore({});
        results.setBrowserToken('');
        results.setBrowserSalt('');
        results.setBrowserId('');
        results.setBrowserIdentifier('');
        results.setClientKey('');
        results.setClientKeyIdentifier('');
        results.setEmail('');
        results.setClientId('');
        results.set('browserIdentity', '');
        results.set('browserSalt', '');
        return results;
    }

}



