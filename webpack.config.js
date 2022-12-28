const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GlobEntries = require('webpack-glob-entries');
const Dotenv = require('dotenv-webpack');

const dotEnvPath = process.env.NODE_ENV ? `.env_${process.env.NODE_ENV}` : '.env';

module.exports = {
  mode: 'production',
  entry: GlobEntries('./src/**/*test.ts'), // Generates multiple entry for each test
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
  // Generate map files for compiled scripts
  devtool: 'source-map',
  stats: {
    colors: true,
  },
  plugins: [
    new Dotenv({ path: dotEnvPath }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    // Don't minimize, as it's not used in the browser
    minimize: false,
  },
};
