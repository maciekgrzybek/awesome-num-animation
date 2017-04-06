const path = require('path');
const webpack = require('webpack');


module.exports = {
	context: path.resolve(__dirname, './src/'),
	entry: {
		app: ['./app.js'],
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
        publicPath: './dist/',
		filename: '[name].bundle.js',
	},    
  	module: {
		rules: [
			{
				test: /\.js$/, // include .js files
				enforce: "pre", // preload the jshint loader
				exclude: [/node_modules/,/jquery/], // exclude any and all files in the node_modules folder
				use: [
					{
						loader: 'jshint-loader',
                        options: {
                            esversion: 6
                        }
					}
				]
			},
                        {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                include: /images/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
			{
				test: /\.html$/,
                exclude: /node_modules/,
				use: [
					{
						loader: 'raw-loader'
					}
				]
			}
		]
    }
};