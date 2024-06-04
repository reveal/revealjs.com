const pkg = require('./package.json');
const path = require('path');
const gulp = require('gulp');
const sass = require('sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const webpack = require('webpack-stream');
const through = require('through2');

// a custom pipeable step to transform Sass to CSS
function compileSass() {
  return through.obj((vinylFile, encoding, callback) => {
    const transformedFile = vinylFile.clone();

    sass.render(
      {
        data: transformedFile.contents.toString(),
        includePaths: ['css/'],
      },
      (err, result) => {
        if (err) {
          console.log(vinylFile.path);
          console.log(err.formatted);
        } else {
          transformedFile.extname = '.css';
          transformedFile.contents = result.css;
          callback(null, transformedFile);
        }
      }
    );
  });
}

gulp.task('js', () =>
  gulp
    .src(['js/main.js'])
    .pipe(
      webpack({
        mode:
          process.env.NODE_ENV === 'production' ? 'production' : 'development',
        performance: {
          hints: false,
        },
        resolve: {
          modules: ['js', 'node_modules'],
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /(node_modules)/,
            },
          ],
        },
      })
    )
    // .pipe(rename('main.js'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('css', () =>
  gulp
    .src(['css/main.scss'])
    .pipe(compileSass())
    .pipe(postcss())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('build', gulp.parallel('js', 'css'));

gulp.task('default', () => {
  gulp.watch(['js/**.*', 'js/*/**.*'], gulp.series('js'));
  gulp.watch(['css/**.*', 'css/*/**.*'], gulp.series('css'));
  gulp.parallel('js', 'css')();
});
