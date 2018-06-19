"use strict";

//const {classes: Cc, Constructor: CC, interfaces: Ci, utils: Cu, results: Cr, manager: Cm, stack: Cs} = Components;
console.log("Hello from main_background.js");

function init_main_background(callback) {
    console.log("Initializing main_background.js");
	chrome.storage.local.get({
		"B4A97488159F4E3DA41A756DD088C747": '',
		"85C40732DB01447BBEB075982A4F23C9": ''
	}, function (items) {
        console.log("hereeeeee******");
		let enabled = true;
		if (items['B4A97488159F4E3DA41A756DD088C747']) {
			let email = items['B4A97488159F4E3DA41A756DD088C747'];
			if (email == "AF6CFCA28A4F4DE2A58ECFB1F316DDC3") {
				enabled = false;
			}
		}
		start(enabled, function() {
            console.log("Starting");
            callback();
        });
	});
}

function start(enabled, callback) {
    console.log("in the start******");
    if (enabled) {

        console.log("Extension flagged on!");

        //chrome.runtime.onConnect.addListener(PortConsumer.consume);
        
        ContextFactory.build(function () {
            console.log("Initializing modules");
            window.addEventListener("close", function (windowId) {
                console.log("Window closed, flushing appication: " + windowId);
                GlobalContext.dispose();
            }, false);
            // =====================================
            // Example of sending data to the server
          /*  let testEvent = {
                key1: "Hello World",
                timestamp: new Date()
            };
            GlobalContext.instance().getObservations().recordEvent(testEvent);
	    */
			callback();
        });
    } else {
        console.log("Extension flagged off!");
    }
};
