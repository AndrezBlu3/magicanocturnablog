const path = require('path');

module.exports = {
  entry: ['./src/assets/scripts/index.js', './src/assets/js/theme.js'],
  output: {
    path: path.resolve(__dirname, 'src/assets/scripts'),
    filename: 'bundle.min.js'
  },
}
