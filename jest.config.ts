import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",

  testEnvironment: "node",

  roots: ["<rootDir>/tests"],

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  setupFilesAfterEnv: [
    "<rootDir>/tests/setup.ts"
  ],

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json"
    }
  }
};

export default config;