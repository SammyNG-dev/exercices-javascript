/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",   // indispensable pour Node + ESM
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  extensionsToTreatAsEsm: [], // on ne met rien, Jest détecte ESM via "type":"module"
};
