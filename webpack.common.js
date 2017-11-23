const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelOptions = {
  presets: ['react', 'es2015', 'stage-0'],
  sourceMaps: true,
  retainLines: true,
};

module.exports = {
  entry: {
    solver: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/dist/',
  },
  resolve: {
    modules: ['src', 'node_modules/'],
    extensions: ['.js', '.jsx', '/index.jsx', '.json', '.ts', '/index.ts', '.scss', '/index.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'eslint-loader',

            options: {
              emitWarnings: true,
            },
          },
        ],
        exclude: /node_modules/,
      }, {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              localIdentName: '[local]_[hash:base64:5]',
            },
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: ['src/design'],
            },
          }],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
  node: {
    global: true,
  },
};
