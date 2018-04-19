const path = require('path')
const postCSSConfig = require('./postcss.config')

const styleLoader = { loader: 'style-loader'}
const isomorphicStyleLoader = { loader: 'isomorphic-style-loader' }
const sassLoader = { loader: 'sass-loader' }
const cssLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]',
        sourceMap: true
    }
}

const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader',
    exclude: /node_modules/
}

const typescriptSourceMap = { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }

const commonModules = [
    typescriptLoader,
    typescriptSourceMap
]

const targetModules = {
    client: [
        {
            test: /\.css$/,
            include: path.resolve('./src/client'),
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                },
                'postcss-loader'
            ]
        }
    ],
    server: [
        {
            test: /\.css$/,
            loaders: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }
            ]
        }
    ]
}

module.exports = target => {
    const modulesByTarget = targetModules[target] || []
    return [...commonModules, ...modulesByTarget]
}