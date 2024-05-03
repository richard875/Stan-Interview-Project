/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.svg": "<rootDir>/src/__mocks__/fileMock.ts",
  },
};

module.exports = config;
