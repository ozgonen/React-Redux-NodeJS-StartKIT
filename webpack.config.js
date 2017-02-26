const   webpack = require('webpack'),
        path = require('path'),
        config = require('./config');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './public/src/index.js'
    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'react-hot!babel',
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'public', 'src'),
        publicPath: '/src',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin(
            {
                CONFIG: JSON.stringify(config)
            }
        ),
        new webpack.HotModuleReplacementPlugin()
    ]
};
