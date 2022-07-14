const { defaults } = require('jest-config')

module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  modulePathIgnorePatterns: ['node_modules', '.jest-test-results.json'],
}
