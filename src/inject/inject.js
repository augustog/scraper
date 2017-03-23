
function extractData(){
	//TODO: Extract the relevant data from the profile
	// Extractors look like this:
	// e.g. var name = document.getElementById('name').innerText;
	// e.g. var name = document.getElementByXpath('//div[@class="container"]/h1[@class="name"]').innerText;
	// Xpath is a very powerful selector, full doc: https://www.w3schools.com/xml/xpath_nodes.asp
	var name = 'John Banana';
	var tagLine = 'King of Bullshit';
	//TODO: Add other fields

	//To make it more legible, I separated extraction of data (up)
	//and forming of the JSON (down). They can happen in the same block, but
	//it's easier to read like this, feel free to change.

	return {
		name: name,
		tagLine: tagLine
		//TODO: Add other fields
	}
}


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------



	}
	}, 10);
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		console.log(sender.tab ?
		"DEBUG: Message from:" + sender.tab.url :
			"DEBUG: Message from the extension");

		if (request.action == "scrape")
			sendResponse(extractData());
	});
