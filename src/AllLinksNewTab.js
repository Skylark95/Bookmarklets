// ==Bookmarklet==
// @name AllLinksNewTab
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
var e = document.getElementsByTagName('a');
for (var i = 0; i < e.length; i++) {
    e.item(i).setAttribute('target', '_blank');
}
