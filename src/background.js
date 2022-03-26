chrome.action.onClicked.addListener(function(tab) {
		chrome.windows.create({ tabId : tab.id, type: 'popup' });
});

chrome.runtime.onMessage.addListener(function(request) {
	if(request.scheme === "dark"){
		chrome.action.setIcon({
			path: { "16": "icons/icon16dark.png",
			"48": "icons/icon48dark.png",
			"96": "icons/icon96dark.png",
		   "128": "icons/icon128dark.png" }
		});
	}
});