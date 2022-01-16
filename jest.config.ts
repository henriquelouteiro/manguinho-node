export default {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  }
}
