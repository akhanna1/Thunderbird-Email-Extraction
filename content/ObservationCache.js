/*
 Stores a collection of observations. Addtionally, provided with a consumer of observations (sender) that is used to empty cache on command or when cache full.
 */

class ObservationCache {

    constructor(sender) {
        this.values = [];
        this.sender = sender;
        this.maxSize = Constants.MAX_CACHE_SIZE;
    }

    add(value) {
        this.values.push(value);
        this.conditionalOutput();
    }

    flush() {
        this.values = [];
    }

    size() {
        return this.values.length;
    }

    clear() {
        let results = this.values;
        this.flush();
        return results;
    }

    conditionalOutput() {
        if (this.values.length > this.maxSize) {
            let toOutput = this.clear();
            this.sender.output(toOutput);
        }
    }

    output() {
        let toOutput = this.clear();
        this.sender.output(toOutput);
    }

}
