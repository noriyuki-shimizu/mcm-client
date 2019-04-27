const path = require("path");

module.exports = {
    devServer: {
        port: 8888,
        disableHostCheck: true,
    },
    configureWebpack: {
        resolve: {
            alias: {
                config: path.resolve(`src/configs/${process.env.NODE_ENV}.ts`),
            },
        },
    },
};
