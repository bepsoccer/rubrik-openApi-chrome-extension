window.addEventListener('load', function load(event) {
  var rubrikImage = document.getElementById('rubrikImage');
  var v1Doc = document.getElementById('v1Doc');
  var v2Doc = document.getElementById('v2Doc');
  var internalDoc = document.getElementById('internalDoc');
  var v1Playground = document.getElementById('v1Playground');
  var v2Playground = document.getElementById('v2Playground');
  var internalPlayground = document.getElementById('internalPlayground');

  rubrikImage.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/web/bin/index.html"
      chrome.tabs.update({"url": link});
    });
  };

  v1Doc.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/docs/v1/"
      chrome.tabs.create({"url": link});
    });
  };

  v2Doc.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/docs/v2/"
      chrome.tabs.create({"url": link});
    });
  };

  internalDoc.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/docs/internal/"
      chrome.tabs.create({"url": link});
    });
  };

  v1Playground.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/docs/v1/playground/"
      chrome.tabs.create({"url": link});
    });
  };

  v2Playground.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/docs/v2/playground/"
      chrome.tabs.create({"url": link});
    });
  };

  internalPlayground.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;
      var link = "https://" + domain + "/docs/internal/playground/"
      chrome.tabs.create({"url": link});
    });
  };
});