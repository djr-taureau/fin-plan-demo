const path = require('path');
const R = require('ramda');

exports.root = function (args) {
  const ROOT = path.resolve(__dirname, '../..');
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [ROOT].concat(args));
};