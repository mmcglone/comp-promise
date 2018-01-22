const curry = require('lodash/fp/curry');

const ifP = curry((condition, f, p) => p.then(v => (condition(v) ? f(v) : v)));

module.exports = ifP;
