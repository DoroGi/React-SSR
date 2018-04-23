const path = require('path')

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
            include: path.resolve('./src/client'),
            use: [
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