// ==Bookmarklet==
// @name GreenManGamingRedditTable
// @author Derek <derek@skylark95.com>
// ==/Bookmarklet==
var games = [],
    table = 'Name | Was | Now | Discount | Steam\n---|---|----|----|----\n',
    steamUri = function(name) {
        return 'http://store.steampowered.com/search/?term=' + encodeURIComponent(name);
    },
    calcDiscount = function(now, was) {
        if (!was || !now) {
            return '';
        }
        return Math.round((1 - (now.substr(1) / was.substr(1))) * 100) + '%';
    },
    findTitle = function($e) {
        var title = $e.attr('data-sku');
        title = title.replace(' - PC', '');
        return title.replace(/\([0-9]\)/, '');
    },
    buildUrl = function(relativeUrl) {
        return window.location.protocol + '//' + window.location.hostname + relativeUrl;
    };

$('.product-container div.inner').each(function(idx, e) {
    var $e = $(e),
        name = findTitle($e.parent()),
        url = buildUrl($e.find('a').attr('href')),
        steam = steamUri(name),
        was = $e.find('.price del').text(),
        now = $e.find('.price').text().trim(),
        discount;

    now = now.substr(now.lastIndexOf('$'));
    discount = calcDiscount(now, was);

    games.push({
        name: name,
        was: was,
        now: now,
        discount: discount,
        url: url,
        steam: steam
    });
});

$('li a.product-container').each(function(idx, e) {
    var $e = $(e),
        name = findTitle($e),
        url = buildUrl($e.attr('href')),
        steam = steamUri(name),
        was = $e.parent().find('span.notranslate').text().trim(),
        now = $e.parent().find('.curPrice') .text().trim(),
        discount = calcDiscount(now, was);

    games.push({
        name: name,
        was: was,
        now: now,
        discount: discount,
        url: url,
        steam: steam
    });
});

$.each(games, function(idx, game) {
    table += '[' + game.name + '](' + game.url +') | ' + game.was + ' | ' + game.now + ' | ' + game.discount + ' | [Search](' + game.steam + ')\n';
});
table += '[Source Code](https://github.com/Skylark95/Bookmarklets/blob/master/src/GreenManGamingRedditTable.js)';
console.log(table);
console.log(JSON.stringify(games));
