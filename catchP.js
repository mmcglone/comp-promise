const curry = require('lodash/fp/curry');

const catchP = curry((f, p) => p.catch(f));

module.exports = catchP;
