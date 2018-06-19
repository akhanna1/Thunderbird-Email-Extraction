/*
    Represents observation objects.
*/

class Observation {
	
	constructor() {
		this.staticProperties = {};
		this.protectedProperties = {};
	}
	
	getProperties() {
		let normalProperties = {};
		let protectProperties = {};
		let properties = {
			normal: LanguageUtilities.merge(this.staticProperties, normalProperties),
			protect: LanguageUtilities.merge(this.protectedProperties, protectProperties),
		};
		return properties;
	};
	
	getStaticProperties() {
		return this.staticProperties;
	};
	
	getProtectedProperties() {
		return this.protectedProperties;
	};
	
	addStaticProperty(name, value) {
		this.staticProperties[name] = value;
	};
	
	addStaticProperties(inputs) {
		this.staticProperties = LanguageUtilities.merge(this.staticProperties, inputs);
	};
	
	addProtectedProperties(inputs) {
		for (let key in inputs) {
			if (inputs.hasOwnProperty(key)) {
				this.addProtectedProperty(key, inputs[key]);
			}
		}
	};
	
	addProtectedProperty(inputName, input) {
		if (input) {
			this.protectedProperties[inputName] = input;
		} else {
			this.addStaticProperty(inputName, Constants.PROTECTED_EMPTY_VALUE);
		}
	};
}
