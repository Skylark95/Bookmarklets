if (getSelection().toString()) {
    open(encodeURI('http://store.steampowered.com/search/?term=' + getSelection().toString()));
} else {
    alert('No Text Selected!');
}