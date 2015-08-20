/**
 * Parses long VSO URL into short VSO URL.
 *
 * @param {string} url - Long VSO URL.
 */
function parseShortUrl(url) {
  var vsoRegex = /https?:\/\/(.+).visualstudio.com\/.+(?:\/|=)([0-9]+)/g;
  var matches = vsoRegex.exec(url);
  return "http://" + matches[1] + ".vso.io/" + matches[2];
}

/**
 * Copies short VSO URL into clipboard.
 *
 * @param {string} url - URL to be parsed and saved into clipboard.
 */
function copyShortUrl(url) {
  try {
    var shortUrl = parseShortUrl(url);

    document.oncopy = function(event) {
      event.clipboardData.setData("Text", shortUrl);
      event.preventDefault();
    };
    document.execCommand("Copy");
    document.oncopy = undefined;
  }
  catch (e) {
    console.error("Invalid VSO URL.");
  }
}
