const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    devServer:{
        contentBase:'./dist'
    },
    entry: {
        index:"./src/js/main.js",
        detalle:'./src/js/detalle.js'
    },
    output:{
        path: path.resolve(__dirname, "dist/"),
        filename:'js/[name].js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/img', to:'./dist/img'}
        ])
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename : 'styles/global.css'
        }),
        new HtmlWebPackPlugin( {
            filename:'./index.html',
            chunks:['index'],
            minify:false,
            template: "./src/index.html"})
        ,new HtmlWebPackPlugin( {
            filename:'./detalle.html',
            chunks:['detalle'],
            minify:false,
            // inject: true,
            template: "./src/detalle.html",

        })
            
    ],
    module:{
        rules:[
            {
                test:/\.(css|sass|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.(jpg|png|svg)$/,
                use:{
                    loader:"file-loader",
                    options:{
                                name: '[name].[ext]',
                                outputPath:'img/',
                                publicPath:'img/'
                    }
                }
            }
            // ,{
            //     test:/\.html$/,
            //     use:{
            //         loader:"file-loader",
            //         options:{
            //             name: '[name].[ext]'
            //         }
            //     }
            //     ,exclude: path.resolve(__dirname, 'src/index.html')
            // }
        ]
    }
    
};
