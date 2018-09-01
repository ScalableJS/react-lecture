// Webpack v4
module.exports = function (env, argv) {
	const NODE_ENV = env && env.production || 'development';
	return {
		entry: {
			index: './src/index',
		},
		output: {
			publicPath: "/dist/",
			filename: '[name].js',
			library: 'global',
		},

		watch: NODE_ENV === 'development',
		mode: NODE_ENV === 'development' ? 'development' : 'production',
		module: {
			rules: [
				{
					test: /\.js$|\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react']
						}
					}
				}
			]
		}
	}
}