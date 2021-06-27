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
  const files = ['.sdconfigrc', 'sdconfig.json']
  const validFiles = files.filter((file) => fs.existsSync(file))

  if (validFiles.length > 0) {
    try {
      const rawdata = fs.readFileSync(validFiles[0])
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
  const token = (token) => token.input === tokenFile

  const tokenName =
    Object.keys(configData).indexOf('tokenNames') > -1
      ? configData.tokenNames.find(token)
        ? configData.tokenNames.find(token).output || tokenFile
        : tokenFile
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
