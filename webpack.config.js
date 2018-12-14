const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, 'src'),

	devtool: 'source-map',
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

	entry: {
		custom: ['./app', './styles/index.scss'],		
	},

	output: {
		path: path.resolve(__dirname, 'public'),
    filename: './script/[name].bundle.js',
    // publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					process.env.NODE_ENV === 'development' ? 'style-loader' : 
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					{
						loader: 'css-loader',
						options: {
						// 	modules: true,
						// 	localIdentName: '[name]__[local]--[hash:base64:5]',
							importLoaders: 1,
						}
					},
					'sass-loader',
					
					// {
					// 	loader: 'postcss-loader',
					// 	options: {
					// 		sourceMap: true
					// 	}
					// },
					
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img/',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: { 
							extract: false,
						}
					},
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts/',
							name: '[name].[ext]',
						},
					}
				]
			}
		],
	},

	resolve: {
		extensions: ['.js', '.jsx', 'scss'],
	},

	plugins: [

		process.env.NODE_ENV === 'production' && new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),   

		// process.env.NODE_ENV === 'development' && new webpack.NamedModulesPlugin(),
		process.env.NODE_ENV === 'development' && new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title: 'Login-spa',
			template: './index.html',
    	}),

		// new SpriteLoaderPlugin(),

		// new ExtractCssChunks({
		// 	  // Options similar to the same options in webpackOptions.output
		// 	  // both options are optional
		// 	filename: "[name].css",
		// 	chunkFilename: "[id].css",
		// 	hot: true // optional as the plugin cannot automatically detect if you are using HOT, not for production use
		// })


	].filter(Boolean),

	devServer: {  
    port: 9000,
    hot: true,
		compress: true,
		// contentBase: './',
		historyApiFallback: true
  }
  
};