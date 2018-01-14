const DefinePlugin = require('webpack/lib/DefinePlugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const commonPlugins = [ new CheckerPlugin() ]

const envPlugins = {
    analyse: [
        new BundleAnalyzerPlugin({analyzerMode: 'static'}),
        new UglifyJSPlugin({ sourceMap: true }),
        new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ],
    development: [
        new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
    ],
    production: [
        new UglifyJSPlugin({ sourceMap: true }),
        new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ]
}

const targetPlugins = {
    client: [
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
}

module.exports = (env, target) => {
    const pluginsByEnv = envPlugins[env] || []
    const pluginsByTarget = targetPlugins[target] || []
    return [...commonPlugins, ...pluginsByEnv, ...pluginsByTarget]
}