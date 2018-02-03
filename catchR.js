const curry = require('lodash/fp/curry');

const catchR = curry((f, p) => p.catch(f));

module.exports = catchR;
