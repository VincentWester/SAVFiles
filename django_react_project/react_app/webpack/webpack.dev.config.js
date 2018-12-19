var webpack = require('webpack');
var path = require('path');


var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'src/index.js')
    ],
    module: {
		rules: [
	        {
	        	test: /\.js$/,
	        	use: 'babel-loader',
	        	exclude: /node_modules/
	        },
 			{
            test: /\.less$/,
        		use: [
        		    {
                        loader: 'style-loader',
        		    },
          			{
           				loader: 'css-loader',
            			options: {
              				importLoaders: 1
            			}
          			},
          			{
            			loader: 'less-loader',
            			options: {
              				noIeCompat: true
           				}
          			}
        		]
      		}
    	]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}