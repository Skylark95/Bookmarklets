// ==Bookmarklet==
// @name Ninite
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
var span = document.getElementsByTagName('span'),
    result = document.getElementsByClassName('didyouknow')[0],
    apps = '<h2 style="margin-bottom:1em;">Installer includes:</h2>';
for(var i = 0; i < span.length; i++) {
    if (span[i].title) {
        apps += '<p style="margin:0;">' + span[i].title + '</p>';
    }
}
result.innerHTML = apps;
