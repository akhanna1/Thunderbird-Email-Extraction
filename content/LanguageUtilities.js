/*
	thomasjm - Basic language utilities.
*/
class LanguageUtilities {
	
	static countSet(input, set) {
        let count = 0;
		for (let characterIndex = 0; characterIndex < input.length; characterIndex++) {
            let character = input.charAt(characterIndex);
			if (set.includes(character) == true) {
				count++;
			}
		}
		return count;
	}

	static deepFind(input, path) {
        let paths = path.split('.');
        let current = input;
        let index;

	  for (index = 0; index < paths.length; index++) {
		if (current[paths[index]] == undefined) {
		  return undefined;
		} else {
		  current = current[paths[index]];
		}
	  }
	  return current;
	}

	static merge(primary, secondary) {
        let output = {};
		if (secondary) {
			for(let item in secondary) {
				output[item] = secondary[item];
			}
		} else {
            let none = {};
		}
		if (primary) {
			for(let item in primary) {
				output[item] = primary[item];
			}
		} else {
            let none = {};
		}
		return output;
	}

	static timestamp() {
		return Date.now();
	}

	static guid() {
		return guid();
	}

	static performanceTimestamp() {
        let start = PerformanceTiming.navigationStart ;
        let now = performance.now();
		return start + now;
	}

	static guid() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

}