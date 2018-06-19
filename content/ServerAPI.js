/*
    Adapts requests of extension logic to server requests.
*/

const ServerRoutes = {
	
	host : "http://heinz-sparkle.heinz.cmu.edu/",
	browserIdentityRoute: "http://heinz-sparkle.heinz.cmu.edu/ads/browser",
	serverKeyRoute : "http://heinz-sparkle.heinz.cmu.edu/ads/server/key",
	browserKeyRoute : "http://heinz-sparkle.heinz.cmu.edu/ads/browser/key",
	browserObservationRoute : "http://heinz-sparkle.heinz.cmu.edu/ads/browser/observation",
	browserIdentityPropertyRoute : "http://heinz-sparkle.heinz.cmu.edu/ads/browser/properties"
	/*
	host : "https://sbo-dev-10.andrew.cmu.edu/",
	browserIdentityRoute: "https://sbo-dev-10.andrew.cmu.edu/extensions/browser",
	serverKeyRoute : "https://sbo-dev-10.andrew.cmu.edu/extensions/server/key",
	browserKeyRoute : "https://sbo-dev-10.andrew.cmu.edu/extensions/browser/key",
	browserObservationRoute : "https://sbo-dev-10.andrew.cmu.edu/extensions/browser/observation",
	browserIdentityPropertyRoute : "https://sbo-dev-10.andrew.cmu.edu/extensions/browser/properties"
	*/
	/*
    host : "https://sbo.cs.cmu.edu/",
    browserIdentityRoute: "https://sbo.cs.cmu.edu/extensions/browser",
    serverKeyRoute : "https://sbo.cs.cmu.edu/extensions/server/key",
    browserKeyRoute : "https://sbo.cs.cmu.edu/extensions/browser/key",
    browserObservationRoute : "https://sbo.cs.cmu.edu/extensions/browser/observation",
    browserIdentityPropertyRoute : "https://sbo.cs.cmu.edu/extensions/browser/properties"
	*/
};

class ServerAPI {
    
	/*
	Callback parameter is called with json parsed results of request
	*/
	static identify(credentials, callback) {
		console.debug("ServerAPI.identify: Identifying browser to server for authentication");
		let json = JSON.stringify(credentials);
		let xhr = new XMLHttpRequest();
		xhr.open("POST", ServerRoutes.browserIdentityRoute, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("ServerAPI.identify: result = " + xhr.responseText);
                let jsonResponse = JSON.parse(xhr.responseText);
				callback(jsonResponse);
			} else if(xhr.readyState == 4) {
				console.warn("ServerAPI.identify: Failed: " + JSON.stringify(xhr));
			}
		};
		xhr.send(json);
	}

	/*
		Retrieves server's public key to protect user encryption key.
	*/
	static getServerKey(token, callback) {
		console.debug("ServerAPI.getServerKey: Retrieving server's key from server");
        let xhr = new XMLHttpRequest();
		xhr.open("GET", ServerRoutes.serverKeyRoute, true);
		xhr.setRequestHeader('browser-authentication', token);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("ServerAPI.getServerKey: result = " + xhr.responseText);
                let jsonResponse = JSON.parse(xhr.responseText);
				callback(jsonResponse);
			} else if(xhr.readyState == 4) {
				console.warn("ServerAPI.getServerKey: Failed: " + xhr.status);
			} 
		};
		xhr.send();
	}

	/*
		User login token to send server the encryption key to associate with the logged in user.
	*/
	static sendClientKey(token, keyMaterial, callback) {
		console.debug("ServerAPI.sendClientKey: sending client key to server with credentials");
        let xhr = new XMLHttpRequest();
        let json = JSON.stringify(keyMaterial);
		xhr.open("POST", ServerRoutes.browserKeyRoute, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr.setRequestHeader('browser-authentication', token);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("ServerAPI.sendClientKey: result = " + xhr.responseText);
                let jsonResponse = JSON.parse(xhr.responseText);
				callback(jsonResponse);
			} else if(xhr.readyState == 4) {
				console.warn("ServerAPI.sendClientKey: Failed: " + xhr.status);
			}
		};
		xhr.send(json);
	}

	/*
		Send observations recorded by extension to server (encrypted with previously submitted key)
	*/
	static sendObservations(token, message, callback) {
        let xhr = new XMLHttpRequest();
        let json = JSON.stringify(message);
		console.debug("ServerAPI.sendObservations: Sending observations to server: " + json);
		xhr.open("POST", ServerRoutes.browserObservationRoute, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr.setRequestHeader('browser-authentication', token);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("ServerAPI.sendObservations: result = " + xhr.responseText);
                let jsonResponse = JSON.parse(xhr.responseText);
				callback(jsonResponse);
			} else if(xhr.readyState == 4) {
				console.warn("ServerAPI.sendObservations: Failed: " + xhr.status);
			}
		};
		xhr.send(json);
	}

	/*
		Send observations recorded by extension to server (encrypted with previously submitted key)
	*/
	static sendBrowserIdentityProperties(token, message, callback) {
		console.debug("ServerAPI.sendBrowserIdentityProperties: Sending browser identifying propeties to server");
        let xhr = new XMLHttpRequest();
        let json = JSON.stringify(message);
		xhr.open("POST", ServerRoutes.browserIdentityPropertyRoute, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr.setRequestHeader('browser-authentication', token);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("ServerAPI.sendBrowserIdentityProperties: result = " + xhr.responseText);
                let jsonResponse = JSON.parse(xhr.responseText);
				callback(jsonResponse);
			} else if(xhr.readyState == 4) {
				console.warn("ServerAPI.sendBrowserIdentityProperties: Failed: " + xhr.status);
			}
		};
		xhr.send(json);
	}
}