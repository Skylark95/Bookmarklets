// ==Bookmarklet==
// @name SlickDealsRemoveTrackingLinks
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
$('a[href]').each(function() {
    var url = this.href.match('&u2=.*');
    if (url && url.length > 0) {
        this.href = decodeURIComponent(url[0].substr(4));
    }
});
