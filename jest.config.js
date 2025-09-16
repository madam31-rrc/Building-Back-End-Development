module.exports = {
    preset: "ts-jest",
    testMatch: ["**/*.test.ts"],
    testEnvironment: "node",
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/server.ts",
        "!src/types/**/*.ts",
    ],
};