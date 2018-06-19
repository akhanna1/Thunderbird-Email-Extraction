/*
 thomasjm - This file contains observation functions for sensor observations.
 */

class Observations {

    constructor(browserId, browserSalt) {
        this.browserIdentity = browserId;
        this.browserSalt = browserSalt;
        this.observationCache = new ObservationCache(new ObservationSender());
    }

    // thomasjm - add page ad-blocking metrics here with current tab in 'sender'
    record(sender, inputMessage) {
        this.getTabPageBlocks(sender, total => {
            let observation = ObservationFactory.build(this.browserIdentity);
            observation.addStaticProperties(inputMessage);
            observation.addStaticProperty("abp.count", total);
            this.observationCache.add(observation.getStaticProperties());
        });
    }

    recordEvent(input) {
        let observation = ObservationFactory.build(this.browserIdentity);
        observation.addStaticProperties(input);
        this.observationCache.add(observation.getStaticProperties());
    }

    conditionallyFlush() {
        this.observationCache.conditionalOutput();
    }

    flush() {
        this.observationCache.output();
    }

    getTabPageBlocks(tab, callback) {
        chrome.runtime.sendMessage({
                type: "stats.getBlockedPerPage",
                tab: tab
            },
            blockedPage => {
                callback(blockedPage);
            });
    }
}



