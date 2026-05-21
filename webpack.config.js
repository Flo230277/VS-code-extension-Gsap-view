// Webpack Configuration for building the React app
const path = require('path');

module.exports = {
  // Point d'entrée pour l'application React
  entry: './src/webview/App.tsx',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Transpile les fichiers TypeScript/TSX
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};