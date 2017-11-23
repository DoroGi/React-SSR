const webpackNodeExternals = require('webpack-node-externals');

const babelConf = {
    rules: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
    ]
}

module.exports = [
    {
        name: "client configuration",
        entry: './src/client/client.js',

        output: {
            filename: 'bundle.js',
            path: __dirname + '/public'
        },

        module: babelConf
    },
    {
        name: "server configuration",
        target: 'node',

        entry: './src/index.js',

        output: {
            filename: 'bundle.js',
            path: __dirname + '/build'
        },

        module: babelConf,

        externals: [webpackNodeExternals()]
    }
]