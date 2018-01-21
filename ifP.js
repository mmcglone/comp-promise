const curry = require('lodash/fp/curry');

const ifP = curry((condition, f, p) => p.then(value => (condition(value) ? f(p) : p)));

module.exports = ifP;
