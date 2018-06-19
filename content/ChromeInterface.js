/*
    thomasjm - Abstract local browser identity logic. Immutable.
	
*/

let storage = SimpleStorage.createCpsStyle("sbo");

var chrome = {
    storage: {
        local: {
            get: function(keys, callback) {
                let remaining = Object.getOwnPropertyNames(keys).length;
                console.log("Getting: " + JSON.stringify(keys) + " with length = " + remaining);
                results = {};
                for (let key in keys) {
                    storage.get(key, result => {
                        results[key] = result;
                        remaining = remaining - 1;
                        console.log("Found " + key + " = " + result + " remaining: " + remaining);
                        if (remaining <= 0) {
                            console.log("Returning: " + JSON.stringify(results));
                            callback(results);
                        }
                    })
                }
            },
            set: function(keys, callback) {
                // console.log(keys);
                console.log("Setting: " + JSON.stringify(keys));
                let remaining = Object.getOwnPropertyNames(keys).length;
                // console.log(remaining);
                for (let key in keys) {
                    let value = keys[key];
                    if (value === null || value === undefined) {
                        value = "";
                    }
                    // console.log(key+"  "+value);
                    storage.set(key, value, result => {
                        console.log("set " + key + " = " + value);
                        remaining--;
                        if (remaining <= 0) {
                            console.log("Set: " + JSON.stringify(keys));
                            callback(results);
                        }
                    })
                }
            }
        }
    }
};



