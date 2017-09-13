module.exports = {
  context: __dirname,
  entry: ['./client/src/index.js'],
  output: {
    path: __dirname + '/client/public/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
      // {
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         query: {
      //           name:'public/assets/images/[name].[ext]'
      //         }
      //       }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         query: {
      //           mozjpeg: {
      //             progressive: true,
      //           },
      //           gifsicle: {
      //             interlaced: true,
      //           },
      //           optipng: {
      //             optimizationLevel: 7,
      //           }
      //         }
      //       }
      //     }
      //   ]
      // }
      ]


  },
  resolve: {
    extensions: ['*','.js','json','.jsx','.css']
  }
}