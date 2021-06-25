module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@lib(.*)$': '<rootDir>/lib$1',
    '^@models(.*)$': '<rootDir>/models$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
  },
}
