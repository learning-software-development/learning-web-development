// const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const precss = require('precss');

module.exports = {
  plugins: [postcssPresetEnv(), precss()]// cssnano(),
};
