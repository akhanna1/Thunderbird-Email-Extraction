/*
    thomasjm - Save and load items from storage.
*/


class StorageFacade {
	
	/*
		Load local store items from browser storage into memory. Expects a function with single parmeter for resulting LocalStore
	*/
	static load(callback) {
		let toGet  = LocalStore.empty().loadable();
		chrome.storage.local.get(toGet, function (items) {
			let loaded = new LocalStore(items);
			console.debug("Loaded LocalStore from browser storage: " + JSON.stringify(loaded));
			callback(loaded);
		});
	}
	
	static save(storage) {
		let toSave = storage.saveable();
		chrome.storage.local.set(toSave, function() {
			console.debug("Saved LocalStore to browser storage: " + JSON.stringify(toSave));
        });
	}
	
}