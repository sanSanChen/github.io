let webpack=require('webpack');
module.exports={
	entry:{
		bundle:'./main.js'
	},
	output:{
		path:__dirname+'./src',
		filename:"[name].js"
	},
	devServer:{
		port:2221,
		inline:true
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test:/\.css$/,
				exclude:/node_modules/,
				loader:'style-loader!css-loader',
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.(jpg|png|jpeg|gif)$/,
				loader:'url-loader'
			}
		]
	},
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
}