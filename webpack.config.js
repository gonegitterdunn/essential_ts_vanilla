module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: { filename: 'bundle.js' },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.css'] },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  devServer: {
    contentBase: './assets',
    port: 4500,
  },
};
