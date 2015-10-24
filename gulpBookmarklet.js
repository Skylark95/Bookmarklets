var through = require('through2');
var gutil = require('gulp-util');
var bookmarklet = require('bookmarklet');
var bookmarks = require('netscape-bookmarks');
var fs = require('fs');
var File = gutil.File;
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-bookmarklet';

module.exports = function(opt) {
    var opt = opt || {},
        bookmarksFile = opt.bookmarksFile,
        single = opt.single,
        basedir = opt.basedir || '',
        bookmarklets = {};

    if (basedir.length > 0 && basedir.lastIndexOf('/') === -1) {
        basedir += '/';
    }

    function generateBookmarklet(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        if (file.isBuffer()) {
            var data = bookmarklet.parseFile(file.contents.toString(enc));

            if (data.errors) {
                this.emit('error', new PluginError(PLUGIN_NAME, data.errors.join('\n')));
                return cb();
            }

            var code = bookmarklet.convert(data.code, data.options);

            if (data.options.name) {
                bookmarklets[data.options.name] = code;
            }

            if (single && data.options.name) {
                var singleBookmarklet = {};
                singleBookmarklet[data.options.name] = code;
                fs.writeFile(basedir + data.options.name + '.html', bookmarks(singleBookmarklet));
            }

            file.contents = new Buffer(code, enc);
            this.push(file);

            cb();
        }
    }

    function writeBookmarksFile() {
        if (bookmarksFile) {
            fs.writeFile(bookmarksFile, bookmarks(bookmarklets));
        }
    }

    return through.obj(generateBookmarklet)
                  .on('end', writeBookmarksFile);
};
