// Create context menu
chrome.contextMenus.create({
  title: "Shorten this link with vso.io",
  contexts: ["link"],
  onclick: copyShortUrl
});

// Register click listener
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  copyShortUrl(info.linkUrl);
});
