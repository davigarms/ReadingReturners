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
          const tokenFile = path.basename(filePath).replace('.json', '')
          const tokenTypes = [
            { type: 'borderWidths', name: 'borderWidth' },
            { type: 'colors', name: 'color' },
            { type: 'delays', name: 'delay' },
            { type: 'durations', name: 'duration' },
            { type: 'easings', name: 'easing' },
            { type: 'fontFamilies', name: 'fontFamily' },
            { type: 'fontSizes', name: 'fontSize' },
            { type: 'fontWeights', name: 'fontWeight' },
            { type: 'letterSpacings', name: 'letterSpacing' },
            { type: 'lineHeights', name: 'lineHeight' },
            { type: 'mediaQueries', name: 'breakPoint' },
            { type: 'opacities', name: 'opacity' },
            { type: 'radii', name: 'radius' },
            { type: 'shadows', name: 'shadow' },
            { type: 'spacing', name: 'spacing' },
            { type: 'zIndices', name: 'zIndex' },
          ]
          const output = {}

          const tokenName = tokenTypes.find((i) => tokenFile === i.type).name

          output[tokenName] = { ...object }

          for (const key in output[tokenName]) {
            output[tokenName][key] = {
              value: output[tokenName][key],
            }
          }

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
        'name/cti/constant',
        'time/seconds',
        'content/icon',
        'color/rgb',
        'size/rem',
      ],
      buildPath: './src/styles/',
      files: [
        {
          destination: 'dictionary.js',
          format: 'javascript/es6',
        },
      ],
    },
    css: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/rgb',
        'size/rem',
      ],
      buildPath: './src/styles/',
      files: [
        {
          destination: 'dictionary.css',
          format: 'css/variables',
        },
      ],
    },
  },
})

StyleDictionary.buildAllPlatforms()
