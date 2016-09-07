var gulp = require('gulp');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src(['css/main.css', 'css/slideshow.css'])
        .pipe(minify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/'))
    ;
});

gulp.task('uglify', function () {
    gulp.src(['js/maps.js', 'js/navbar.js', 'scrolling-nav.js', 'js/speakers.js'])
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/'))
    ;
});

gulp.task('default', ['minify', 'uglify'], function() {

});