module.exports = {
  entry: {
    background: './src/background.js',
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
};
