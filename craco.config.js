const sassResourcesLoader = require("craco-sass-resources-loader")
const CracoAlias = require("craco-alias")

module.exports = {
    mode: "development",
    output: {
        path: __dirname,
    },
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: "./src/styles/global.scss",
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.extend.json",
            },
        },
    ],
}
