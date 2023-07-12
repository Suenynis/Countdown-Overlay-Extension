chrome.tabs.onCreated.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    file: "contentScript.js",
    runAt: "document_end",
  });
});
