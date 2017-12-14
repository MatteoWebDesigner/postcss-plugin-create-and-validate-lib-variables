var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sassParser = require('postcss-scss');
var sass = require('gulp-sass');

var listLibAPI = require('./listLibAPI.js');
var checkInvalidAPI = require('./checkInvalidAPI.js');

gulp.task('createRules', function () {
    return gulp
        .src('./src/lib.scss')
        .pipe(postcss([listLibAPI], { parser: sassParser }));
});

gulp.task('validate', function () {
    return gulp
        .src('./src/app.scss')
        .pipe(postcss([checkInvalidAPI], { parser: sassParser }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});