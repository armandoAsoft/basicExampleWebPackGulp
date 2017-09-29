var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack');
var webpack_stream = require('webpack-stream');
var webpack_config = require('./webpack.config');

gulp.task('clean', function () {
    del([
        './dist'
    ]);
});

gulp.task('webpack', ['clean'], function () {
    return webpack_stream(webpack_config)
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['webpack']);