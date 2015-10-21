var through = require('through2');
var gutil = require('gulp-util');
var bookmarklet = require('bookmarklet');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-bookmarklet';

function gulpBookmarklet() {
    var stream = through.obj(function(file, enc, cb) {
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

            file.contents = new Buffer(code, enc);
            this.push(file);

            cb();
        }
    });

    return stream;
}

module.exports = gulpBookmarklet;
