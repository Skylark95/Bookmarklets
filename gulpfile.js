var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var bookmarklet = require('./gulpBookmarklet.js');

gulp.task('default', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet({
            bookmarksFile: 'bookmarklets.html',
            single: true,
            basedir: 'html'
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('min.js'));
});

gulp.task('clean', function() {
    return del('bookmarklets/**/*');
});
