const DefinePlugin = require('webpack/lib/DefinePlugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const webpackNodeExternals = require('webpack-node-externals')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = ['client', 'server'].map(target => {
    const plugins = []
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
        switch (env) {
            case 'analyse': 
                plugins.push(new BundleAnalyzerPlugin({analyzerMode: 'static'}))
                plugins.push(new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}))
                return {}
            case 'development':
                plugins.push(new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}))
                return { devtool: 'inline-source-map' }
            case 'production':
                plugins.push(new UglifyJSPlugin({ sourceMap: true }))
                plugins.push(new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}))
                return { devtool: 'source-map' }
            default:
                return {}
        }
    }

    const byTarget = target => {
        switch (target) {
            case 'client':
                plugins.push(new CommonsChunkPlugin({
                    name: 'vendor',
                    filename: 'vendor.js',
                    minChunks: Infinity
                }))
                return {
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
                }
            case 'server':
                return {
                    name: 'Server',
                    target: 'node',
                    entry: './src/index.ts',
                    output: {
                        filename: 'server.js',
                        path: __dirname + '/build'
                    },
                    externals: [webpackNodeExternals()]
                }
            default:
                return {}
            }
    }
    return {...commonConf, ...byEnvironment(process.env.NODE_ENV), ...byTarget(target), plugins: plugins}
})