const catchR = require('../catchR');

const messageForUser = 'Oops, there was a problem on our end';
const f = () => messageForUser;

describe('catchR', () => {
  it('should be a function', () => {
    expect(catchR).toEqual(jasmine.any(Function));
  });
  describe('when passed a function f and promise p that rejects with reason r', () => {
    it('should return a promise that resolves to f(r)', (done) => {
      const r = new Error('Detailed internal reason for rejection');
      const returned = catchR(f, Promise.reject(r));
      returned.then((value) => {
        expect(value).toBe(messageForUser);
        done();
      });
    });
  });
  describe('when passed a function f and a promise p the resolves to value v', () => {
    it('should return a promise that resolves to v', (done) => {
      const v = 5;
      const returned = catchR(f, Promise.resolve(v));
      returned.then((value) => {
        expect(value).toBe(v);
        done();
      });
    });
  });
});
