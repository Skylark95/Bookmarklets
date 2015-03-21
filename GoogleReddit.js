var q = prompt("Search Reddit", "");
if (q) {
    window.location = encodeURI('https://www.google.com/search?sitesearch=reddit.com&q=' + q);
}
