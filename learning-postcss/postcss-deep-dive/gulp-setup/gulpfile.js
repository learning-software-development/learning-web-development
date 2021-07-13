const { src, dest, series } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-preset-env');
const precss = require('precss');

function cssTask() {
  let processors = [
    autoprefixer(),
    cssnext,
    precss
  ];
  return src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(dest('./out'));
}

exports.default = cssTask
