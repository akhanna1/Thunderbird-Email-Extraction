/*
    Listen for web navigation completion events.
    Maybe filter out 'about:blank' for some events.

*/

if (typeof msBrowser !== 'undefined') {
    chrome = msBrowser;
}
else if (typeof browser != 'undefined') {
    chrome = browser;
}

ContentScriptLogging.log("Begin main_content.js on: " + document.URL);

// thomasjm - add page content here
let pageContext = {
	"page.timestamp": LanguageUtilities.timestamp(),
	"page.guid": LanguageUtilities.guid(),
    "page.url": document.URL
};
MessageProducer.produceObservationMessage(pageContext);


