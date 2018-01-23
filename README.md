# comp-promise
A tiny Javascript library to help with promises in functional composition

## Example Usage
```
const compose = require('lodash/fp/compose');
const { thenP } = require('comp-promise');

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
  thenP(fullName),
  fetchUser
);

main(123); // Returns a promise that resolves to 'John Smith'
main(456); // Returns a promise that reject with a 'No such user' Error
```
## API
## thenP
Given a function f and promise p that resolves to v, returns a promise that resolves
to f(v) upon resolution of p.

Returns a promise that rejects with reason r when p rejects with r.

## catchP
Given a function f and promise p that