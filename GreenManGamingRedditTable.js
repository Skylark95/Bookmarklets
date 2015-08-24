/*
 * Green Man Gaming GameDeals Reddit Table  
 * By: Skylark95
 * http://www.skylark95.com/
 */
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
    trimIf = function(str, find) {
        if (str.lastIndexOf(find) > 0) {
            return str.substr(0, str.lastIndexOf(find));
        }
        return str;
    },
    findTitle = function($e) {
        var title = $e.attr('data-sku');
        title = trimIf(title, ' - PC');
        return trimIf(title, ' (1)');
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
table += '[Source Code](https://github.com/Skylark95/Bookmarklets/blob/master/GreenManGamingRedditTable.js)';
console.log(table);