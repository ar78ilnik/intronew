'use strict';

const path = require('path');

/* подключаем плагины */
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const htmlbeautify = require('gulp-html-beautify');
const debug = require('gulp-debug');
const bs = require('browser-sync').create();
const plumber = require('gulp-plumber');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');
const del = require('del');

function clean() {
    return del('dist');
};

function pugToHtml() {
    return gulp.src('app/pages/pug/layout.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/pages/templates'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'))
        .pipe(debug({
            title: 'rename'
        }))
        .pipe(bs.stream())
};


function watch() {
    gulp.watch('app/pages/pug/**/*.pug', pugToHtml);
};

function server() {
    bs.init({
        server: 'dist'
    });
    bs.watch('app/pages/**/*.pug').on('change', bs.reload);
};

const build = gulp.series(clean, pugToHtml, gulp.parallel(watch, server));

exports.clean = clean;
exports.server = server;
exports.pugToHtml = pugToHtml;
exports.build = build;
