const curry = require('lodash/fp/curry');

const thenIf = curry((condition, f, p) => p.then(v => (condition(v) ? f(p) : v)));

module.exports = thenIf;
