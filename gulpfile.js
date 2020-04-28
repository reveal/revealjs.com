const pkg = require('./package.json')
const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const minify = require('gulp-clean-css')
const postcss = require('gulp-postcss')
const webpack = require('webpack-stream')

gulp.task('js', () => gulp.src(['js/main.js'])
    .pipe(webpack({
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules)/
                }
            ]
        }
    }))
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./dist')))

gulp.task('css-dev', () => gulp.src(['css/main.scss'])
    .pipe(sass())
    .pipe(postcss())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist')))

gulp.task('css-production', () => gulp.src(['dist/main.css'])
    .pipe(minify())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist')))

gulp.task('css', gulp.series('css-dev', 'css-production'))

gulp.task('default', () => {
    gulp.parallel('js', 'css')()
    gulp.watch([ 'js/**/*.js' ], gulp.series('js'))
    gulp.watch([ 'css/**.scss' ], gulp.series('css'))
})