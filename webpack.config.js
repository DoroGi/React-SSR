const DefinePlugin = require('webpack/lib/DefinePlugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const webpackNodeExternals = require('webpack-node-externals')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const commonConf = {
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        },
        {
            enforce: "pre", test: /\.js$/, loader: "source-map-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}

const byEnvironment = env => {
    const envConfigs = {
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
    return envConfigs[env] || {}
}

const byTarget = target => {
    const config = {
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
                filename: 'client.js',
                path: __dirname + '/assets'
            },
            plugins: [
                new CommonsChunkPlugin({
                    name: 'vendor',
                    filename: 'vendor.[chunkhash].js',
                    minChunks: Infinity
                }),
                new webpack.NamedModulesPlugin(),
            ]
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
    return config[target] || {}
}

module.exports = ['client', 'server'].map(target => { return {...commonConf, ...byEnvironment(process.env.NODE_ENV), ...byTarget(target)}})