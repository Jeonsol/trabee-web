const fs = require('fs');
const path = require('path');
const SuperEasySpriter = require('easy-spriter').SuperEasySpriter;

const spriter = new SuperEasySpriter({
  mode: 'svg',
  entry: path.resolve(__dirname, 'sprites'),
  output: {
    sprite: 'public/img/sprite',
    scss: path.resolve(__dirname, 'scss')
  },
  options: {
    filePrefix: '_sp_',
    bgRootUrl: '~/img/sprite'
  }
});
