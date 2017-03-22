// This bunch of code checks if you're on a linkedin profile and activates the add-on

//// When a tab gets updated, check if the url belongs to linkedin and, if so, activate the add-on (chrome.pageAction.show)

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.indexOf('linkedin.com') > -1) {

		chrome.pageAction.show(tabId);

		// Add an event listener for the user clicking on the add-on and send a message
		// to the active tab saying "dude time to work"
		
		chrome.pageAction.onClicked.addListener(function(tab){
			console.log('DEBUG: pageAction clicked');
			chrome.tabs.sendMessage(tab.id, {sender: "background.js",action: "scrape"}, handleResponse);

		});

	}
});




function handleResponse(response) {
	console.log("DEBUG: Received response:" + response);
	//TODO: Implement cumulative storage in json format through chrome.system.storage API
}