// ==Bookmarklet==
// @name GoogleSteam
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
var q = prompt("Search Steam", "");
if (q) {
    window.location = encodeURI('https://www.google.com/search?sitesearch=store.steampowered.com&q=' + q);
}
