/**
 * Created by roc on 26/09/2016.
 */
var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackDevServer( webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8080,'localhost');

if (module.hot) {
    module.hot.accept();
}
