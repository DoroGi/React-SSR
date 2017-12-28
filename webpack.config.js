const webpackNodeExternals = require('webpack-node-externals')
const plugins = require('./webpack.plugins')
const modules = require('./webpack.modules')

const commonConf = { resolve: { extensions: [".ts", ".tsx", ".js"] } }
const envConfigs = {
    development: { devtool: 'inline-source-map' },
    production: { devtool: 'source-map' }
}
const targetConfigs = {
    client: {
        name: 'Client',
        entry: {
            client: ['./src/client/client.tsx'],
            vendor: [
                'axios',
                'react',
                'react-dom',
                'react-helmet',
                'react-redux',
                'react-router',
                'react-router-config',
                'react-router-dom',
                'redux',
                'redux-thunk',
                'serialize-javascript'
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
        entry: './src/index.ts',
        output: {
            filename: 'server.js',
            path: __dirname + '/build'
        },
        externals: [webpackNodeExternals()]
    }
}



const createConf = target => {
    
    const byEnvironment = env => envConfigs[env] || {}
    const byTarget = target => targetConfigs[target] || {}
    
    return {
    ...commonConf,
    ...byEnvironment(process.env.NODE_ENV),
    ...byTarget(target),
    plugins: plugins(process.env.NODE_ENV, target),
    module: { rules: modules(process.env.NODE_ENV, target) }
}}

module.exports = ['client', 'server'].map(createConf)