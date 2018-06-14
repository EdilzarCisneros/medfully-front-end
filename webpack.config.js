var path = require( 'path' );

module.exports = {
	entry: './src/core/md-main.module.js',
	output: {
		filename: 'all-med-modules.js',
		path: path.resolve( __dirname, 'dist' )
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};