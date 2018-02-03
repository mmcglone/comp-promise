# comp-promise
[![Build Status](https://travis-ci.org/mmcglone/comp-promise.svg?branch=master)](https://travis-ci.org/mmcglone/comp-promise)
[![Coverage Status](https://coveralls.io/repos/mmcglone/comp-promise/badge.svg?branch=master)](https://coveralls.io/r/mmcglone/comp-promise?branch=master)
[![npm version](https://badge.fury.io/js/comp-promise.svg)](https://badge.fury.io/js/comp-promise)

A tiny Javascript library to help with promises in functional composition

## Example Usage
```javascript
const compose = require('lodash/fp/compose');
const { then } = require('comp-promise');

const fetchUser = id => {
  if (id === 123) {
    return Promise.resolve({
      id: 123,
      firstName: 'John',
	  lastName: 'Smith'
    });
  }
  return Promise.reject(new Error('No such user'));
};

const fullName = user => `${user.firstName} ${user.lastName}`;

const main = compose(
  then(fullName),
  fetchUser
);

main(123); // Returns a promise that resolves to 'John Smith'
main(456); // Returns a promise that rejects with a 'No such user' Error
```
