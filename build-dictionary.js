const path = require('path')

const baseDir = 'figmagic'
const tokenDir = 'dictionary'

const StyleDictionary = require('style-dictionary').extend({
  parsers: [
    {
      pattern: /\.json$/,
      parse: ({ contents, filePath }) => {
        try {
          const object = JSON.parse(contents)
          const pathParts = path.basename(filePath).replace('.json', '')
          const output = {}

          output[pathParts] = { ...object }

          return output
        } catch (error) {
          return error
        }
      },
    },
  ],
  source: [`./${baseDir}/${tokenDir}/**/*.json`],
  platforms: {
    js: {
      transforms: [
        'attribute/cti',
        'name/cti/camel',
        'time/seconds',
        'content/icon',
        'color/rgb',
        'size/rem',
      ],
      buildPath: './src/styles/',
      files: [
        {
          destination: 'dictionary.js',
          format: 'javascript/module',
        },
      ],
    },
  },
})

StyleDictionary.buildAllPlatforms()
