/**
 * Parse long Azure DevOps URL into short URL.
 * Example: 
 * parseShortUrl('https://contoso.visualstudio.com/DefaultCollection/_workitems/edit/12345')
 * => http://contoso.vso.io/12345
 * 
 * @param {string} url - Full Azure DevOps URL.
 */
function parseShortUrl(url) {
    var vsoRegex = /https?:\/\/(.+).visualstudio.com\/.+(?:\/|=)([0-9]+)/g;
    var matches = vsoRegex.exec(url);
    return 'https://' + matches[1] + '.vso.io/' + matches[2];
}

/**
 * Copies short Azure DevOps URL into clipboard.
 *
 * @param {string} url - URL to be parsed and saved into clipboard.
 */
function copyShortUrl(url) {
    try {
        var shortUrl = parseShortUrl(url);

        document.oncopy = function(event) {
            event.clipboardData.setData('Text', shortUrl);
            event.preventDefault();
        };
        document.execCommand('Copy');
        document.oncopy = undefined;
    } catch (e) {
        console.error('Invalid Azure DevOps URL.');
    }
}
