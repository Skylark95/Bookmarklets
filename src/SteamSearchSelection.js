// ==Bookmarklet==
// @name SteamSearchSelection
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
if (getSelection().toString()) {
    open(encodeURI('http://store.steampowered.com/search/?term=' + getSelection().toString()));
} else {
    alert('No Text Selected!');
}
