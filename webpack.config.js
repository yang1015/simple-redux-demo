var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

module.exports={
    entry: __dirname + "/src/app.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: '../dist/index.html', //生成的html存放路径，相对于 path
            template: './template/index.html', //html模板路径
            inject: 'body',
            hash: true,
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'] //后缀名自动补全
    }
}
