const path				 = require('path');
const webpack			 = require('webpack');
const HtmlWebpackPlugin	 = require('html-webpack-plugin');
const ExtractTextPlugin	 = require('extract-text-webpack-plugin');
module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'js/app.jsx',
	},
	resolve: {
		alias: {
			component	: path.resolve(__dirname, 'src/component'),
			page		: path.resolve(__dirname, 'src/page')
		}
	},
	devServer: {
		port: 5257,
		historyApiFallback: {
			index: '/dist/index.html'
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		})
	]
}
