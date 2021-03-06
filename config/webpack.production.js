const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../')
        })
    ]
});