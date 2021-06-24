const path = require('path')
const fs = require('fs')
const baseDir = 'figmagic'
const tokenDir = 'dictionary'

const StyleDictionary = require('style-dictionary').extend({
  parsers: [
    {
      pattern: /\.json$/,
      parse: ({ contents, filePath }) => {
        try {
          const object = JSON.parse(contents)
          const output = parseTokens(object, filePath)
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

function loadConfig() {
  const file = fs.existsSync('.sdconfigrc')
    ? '.sdconfigrc'
    : fs.existsSync('sdconfig.json')
    ? 'sdconfig.json'
    : false

  if (file) {
    try {
      const rawdata = fs.readFileSync(file)
      const configData = JSON.parse(rawdata)
      return configData
    } catch (error) {
      console.log(error)
    }
  }
}

function parseTokens(object, filePath) {
  const tokenFile = path.basename(filePath).replace('.json', '')
  const configData = loadConfig() || {}
  const tokenName =
    Object.keys(configData).indexOf('tokenNames') > -1
      ? configData.tokenNames.find((i) => tokenFile === i.input).output
      : tokenFile

  const output = {}

  output[tokenName] = { ...object }

  for (const key in output[tokenName]) {
    output[tokenName][key] = {
      value: output[tokenName][key],
    }
  }
  return output
}

StyleDictionary.buildAllPlatforms()
