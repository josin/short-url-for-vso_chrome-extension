/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        var tab = tabs[0];

        var url = tab.url;

        console.assert(typeof url == 'string', 'tab.url should be a string');

        callback(url);
    });
}

/**
 * Renders text into defined container.
 *
 * @param {string} statusText - text to be rendered.
 */
function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

// Default onload listener for popup
document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(url) {
        try {
            var vsoShortUrl = parseShortUrl(url);
            renderStatus('Azure DevOps Short URL: ' + vsoShortUrl);
        } catch (e) {
            renderStatus('Invalid Azure DevOps URL.');
        }
    });

    // Add Event Listeners to Button Click
    document.getElementById('copy').onclick = function() {
        getCurrentTabUrl(function(url) {
            copyShortUrl(url);
        });
    };
});
