/*
    thomasjm - Builds Observations with basic properties.
*/
class ObservationFactory {

	static build(id) {
		let observation = new Observation();
		let created = LanguageUtilities.timestamp();
		let globals = {
			"ads.browser.id": id,
			"ads.time": created,
			"ads.name": "test_ad_blocker",
			"ads.sensor.version": 1
		};
		observation.addStaticProperties(globals);
		return observation;
	}

}



