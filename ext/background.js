// background.js
//On install

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { pathPrefix: '/docs/' },
          css: ["img[src*='rubrik']"]
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { pathPrefix: '/web/bin/index.html' },
          css: ["img[src*='rubrik']"]
        })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()
      ]
    }]);
  });
});