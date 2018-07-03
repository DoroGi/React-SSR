const { CheckerPlugin } = require('awesome-typescript-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpackNodeExternals = require('webpack-node-externals')
const modules = require('./webpack.modules')
const path = require('path')

const commonConf = {
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@routes': path.resolve(__dirname, 'src/app/routes'),
            '@types': path.resolve(__dirname, 'types/allTypes'),
            '@state': path.resolve(__dirname, 'src/app/state'),
        }
    },
    node: {
        fs: 'empty'
    }
 }
const targetConfigs = {
    client: {
        name: 'Client',
        entry: {
            client: ['./src/client/client.tsx'],
            vendor: [
                'axios',
                'isomorphic-style-loader',
                'react',
                'react-dom',
                'react-helmet',
                'react-redux',
                'react-router',
                'react-router-config',
                'react-router-dom',
                'redux',
                'redux-thunk',
                'serialize-javascript',
                'style-loader'
            ]
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/assets'
        }
    },
    server: {
        name: 'Server',
        target: 'node',
        entry: './src/server/index.ts',
        output: {
            filename: 'server.js',
            path: __dirname + '/build'
        },
        externals: [webpackNodeExternals()]
    }
}

const createConf = target => {
    
    const byTarget = target => targetConfigs[target] || {}
    
    return {
    ...commonConf,
    ...byTarget(target),
    plugins: [
        //new BundleAnalyzerPlugin({analyzerMode: 'static'}),
        new CheckerPlugin()
    ],
    module: { rules: modules(target) }
}}

module.exports = ['client', 'server'].map(createConf)