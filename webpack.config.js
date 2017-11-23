const webpackNodeExternals = require('webpack-node-externals');

const babelConf = {
    test: /\.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
        ]
    }
}

module.exports = [
    {
        //Client configuration
        entry: './src/client/client.js',

        output: {
            filename: 'bundle.js',
            path: __dirname + '/public'
        },

        module: { rules: [babelConf] }
    },
    {
        //Server configuration
        target: 'node',

        entry: './src/index.js',

        output: {
            filename: 'bundle.js',
            path: __dirname + '/build'
        },

        module: { rules: [babelConf] },

        externals: [webpackNodeExternals()]
    }
]