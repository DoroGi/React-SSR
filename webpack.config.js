const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

const config = {
    name: 'Client',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@routes': path.resolve(__dirname, 'src/app/routes'),
            '@types': path.resolve(__dirname, 'types/allTypes'),
            '@state': path.resolve(__dirname, 'src/app/state'),
        }
    },
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
            'serialize-javascript',
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/assets'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }, 
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[hash:8]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
}

module.exports = config;