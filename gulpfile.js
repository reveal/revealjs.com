const pkg = require('./package.json')
const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const webpack = require('webpack-stream')

gulp.task('js', () => gulp.src(['js/main.js'])
    .pipe(webpack({
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        performance: {
            hints: false
        },
        resolve: {
            modules: ['js', 'node_modules']
        },
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

gulp.task('css', () => gulp.src(['css/main.scss'])
    .pipe(sass())
    .pipe(postcss())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist')))

gulp.task('build', gulp.parallel('js', 'css'))

gulp.task('watch', () => {
    gulp.watch([ 'js/*.js' ], gulp.series('js'))
    gulp.watch([ 'css/*.scss' ], gulp.series('css'))
    gulp.series('build')
})