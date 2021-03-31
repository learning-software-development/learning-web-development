const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./src/*.html'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extractor(content) {
              return content.match(/[A-z0-9-:\/]+/g) || [];
            }
          },
          extentions: ['css', 'html']
        }
      ]
    }),
    autoprefixer()
  ]
}
