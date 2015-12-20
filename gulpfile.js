var gulp = require('gulp');
var del = require('del');
var bookmarklet = require('gulp-bookmarklet');

gulp.task('html', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet({
            format: 'html'
        }))
        .pipe(gulp.dest('html'));
});

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet())
        .pipe(gulp.dest('min.js'));
});

gulp.task('htmlsingle', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet({
            format: 'htmlsingle'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['html', 'js', 'htmlsingle']);

gulp.task('clean', function() {
    return del(['html/**/*', 'min.js/**/*', 'bookmarklets.html']);
});
