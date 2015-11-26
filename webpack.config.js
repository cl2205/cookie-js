module.exports = {
	entry: "./src/js/main.js",
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/assets'
	},
	devServer: {
		inline: true,
		contentBase: 'http://localhost:3000',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};