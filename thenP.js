const curry = require('lodash/fp/curry');

const thenP = curry((f, p) => p.then(f));

module.exports = thenP;
