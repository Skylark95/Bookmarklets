// ==Bookmarklet==
// @name RedditTableSteamSearch
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
var links = document.querySelectorAll('.commentarea table a');
for(var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.innerHTML) {
        link.href = encodeURI('http://store.steampowered.com/search/?term=' + link.innerHTML.trim());
    }
}
