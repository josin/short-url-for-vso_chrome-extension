// Create context menu
chrome.contextMenus.create({
  title: "Shorten Visual Studio Online URL",
  contexts: ["link"],
  onclick: copyShortUrl
});

// Register click listener
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  copyShortUrl(info.linkUrl);
});
