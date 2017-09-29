var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack');
var webpack_stream = require('webpack-stream');
var webpack_config = require('./webpack.config');
//var embedTemplates = require('gulp-angular-embed-templates');

gulp.task('clean', function () {
    del([
        './dist'
    ]);
});

//gulp.task('embed', function () {
//    gulp.src('./app/**/*.js')
//        .pipe(embedTemplates());
//});

gulp.task('webpack', ['clean'], function () {
    return webpack_stream(webpack_config)
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['webpack']);