if (getSelection().toString()) {
    open(encodeURI('https://steamdb.info/search/?a=app&type=1&category=0&q=' + getSelection().toString()));
} else {
    alert('No Text Selected!');
}