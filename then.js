const curry = require('lodash/fp/curry');

const then = curry((f, p) => p.then(f));

module.exports = then;
