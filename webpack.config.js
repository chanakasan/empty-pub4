var path = require('path');
var webpack = require('webpack');

var config = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: './frontend/js/index.js',
};

config.output = {
  path: path.join(__dirname, 'app', 'assets', 'javascripts', 'compiled'),
  filename: 'bundle.js',
  publicPath: '/assets',
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.js', '.jsx'],
  // by default, webpack will search in `web_modules` and `node_modules`.
  modulesDirectories: ['node_modules'],
};

config.plugins = [
	// example of exposing Lodash to every module
	new webpack.ProvidePlugin({
		_: 'lodash',
	}),
];

module.exports = config;
