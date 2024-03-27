
const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.alasso.com/*",
	"*://*.progiez.com/*",
	"*://*.youtube.com/*",
	"*://*.xxx.com/*",
	"*://*.instagram.com/*",
    "*://*.uims.cuchd.in/*",
    "*://*.chat.openai.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
