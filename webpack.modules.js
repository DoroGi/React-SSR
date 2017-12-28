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
            test: /\.scss$/,
            use: [ styleLoader, cssLoader, sassLoader ]
        }
    ],
    server: [
        {
            test: /\.scss$/,
            use: [ isomorphicStyleLoader, cssLoader, sassLoader ]
        }
    ]
}

module.exports = (env, target) => {
    const modulesByTarget = targetModules[target] || []
    return [...commonModules, ...modulesByTarget]
}