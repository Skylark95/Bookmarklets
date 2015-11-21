// ==Bookmarklet==
// @name SlickDealsRemoveTrackingLinks
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
$('a[href*="&u2="]').each(function() {
    this.href = decodeURIComponent(this.href.substr(this.href.indexOf('&u2=') + 4));
});
$('#buyNowButton').before('<a name="post"></a>');
window.location.hash = 'post';
$('.readMore').click();
