const curry = require('lodash/fp/curry');

const thenTap = curry((f, p) => p.then(v => f.call(this, v).then(() => v)));

module.exports = thenTap;
