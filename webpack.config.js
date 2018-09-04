 // Webpack v4
 module.exports =  {
    entry: {
      index: './src/index.js'
    },
    output: {
      publicPath: "/dist/",
      filename: 'index.js',
      library: 'global',
    },
    mode : 'development',
    watch: true,
    module: {
      rules: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0',  'react']
            }
          }
        }
      ]
    }
  }