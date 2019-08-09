const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

module.exports = {
<<<<<<< HEAD
=======
	
>>>>>>> 99332c684985e29131698a3321c4eb871f09545f
	externals: {
		paths: PATHS
	},
	
	entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
<<<<<<< HEAD
    publicPath: '/'
=======
    publicPath: './'
>>>>>>> 99332c684985e29131698a3321c4eb871f09545f
  },
  module: {
    rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}, 
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					}, 
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
					}, 
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			}, 
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					}, 
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				}
			},
    ]
	},
	plugins: [
		new MiniCssExtractPlugin({
<<<<<<< HEAD
			filename: `${PATHS.assets}css/[name].css`,
			// publicPath: '../../',
=======
			filename: `${PATHS.assets}css/[name].css`
>>>>>>> 99332c684985e29131698a3321c4eb871f09545f
		}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html'
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
			{ from: `${PATHS.src}/static`, to: '' }
		])
		
	],
  optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	},
}