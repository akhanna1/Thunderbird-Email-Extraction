/*
    thomasjm - handles logic for sending sets of observations to server.
*/

class ObservationSender {

	constructor() {
		this.received = 0;
		this.sent = 0;
	}

    incrementReceived() {
        this.received = this.received + 1;
    }

    incrementSent(value) {
        this.sent = this.sent + value;
    }
	
	output(toOutput) {
        if (toOutput && toOutput.length > 0) {
            this.incrementSent(toOutput.length);
            this.sendSet(toOutput);
        }
	}
	
	sendSet(toOutput) {
		let json = JSON.stringify(toOutput);
        let length = json.length;
		if (length  < Constants.MAX_SEND_SIZE) {
            GlobalContext.toServer(json);
		} else {
            let sets = ObservationSender.split(toOutput);
			for (let index = 0; index < sets.length; index++) {
				this.sendSet(sets[index]);
			}
		}
	}
		
	static split(toOutput) {
        let outputSize = 2;
        let outputs = [];
		outputs.push([]);
		outputs.push([]);
		for (let index = 0; index < toOutput.length; index++) {
			let set = index % outputSize;
			outputs[set].push(toOutput[index]);
		}
		return outputs;
	}
}
