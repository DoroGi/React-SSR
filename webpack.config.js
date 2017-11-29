const DefinePlugin = require('webpack/lib/DefinePlugin')
const webpackNodeExternals = require('webpack-node-externals')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const commonConf = {
  module: {
    rules: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]
  }
}

const byEnvironment = env => {
    const config = {
        development: {
            devtool: 'inline-source-map',
            plugins: [ new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})]
        },
        production: {
            devtool: 'source-map',
            plugins: [
                new UglifyJSPlugin({ sourceMap: true }),
                new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
            ]
        }
    }
    return config[env] || {}
}

const byTarget = target => {
    const config = {
        client: {
            entry: './src/client/client.js',
            output: {
                filename: 'bundle.js',
                path: __dirname + '/public'
            }
        },
        server: {
            target: 'node',
            entry: './src/index.js',
            output: {
                filename: 'bundle.js',
                path: __dirname + '/build'
            },
            externals: [webpackNodeExternals()]
        }
    }
    return config[target] || {}
}

module.exports = ['client', 'server'].map(target => { return {...commonConf, ...byEnvironment(process.env.NODE_ENV), ...byTarget(target)}})