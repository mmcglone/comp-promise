const thenIf = require('../thenIf');

const c = a => a > 5;
const f = p => p.then(value => value + 1);

describe('thenIf', () => {
  describe('when passed a condition c, function f, and promise p that resolves to v', () => {
    describe('when c(v) is true', () => {
      it('should return a promise that resolves to f(p)', () => {
        const v = 8;
        const p = Promise.resolve(v);
        const returned = thenIf(c, f, p);
        const expected = f(p);
        returned.then((value) => {
          expected.then((value1) => {
            expect(value).toBe(value1);
          });
        });
      });
    });
    describe('when c(v) is not true', () => {
      it('should return a promise that resolve to v', () => {
        const v = 4;
        const returned = thenIf(c, f, Promise.resolve(v));
        returned.then((value) => {
          expect(value).toBe(v);
        });
      });
    });
    describe('when passed a condition c, function f, and promise p that rejects with r', () => {
      it('should return a promise that rejects with r', () => {
        const r = new Error('Reason for rejection');
        const returned = thenIf(c, f, Promise.reject(r));
        returned.catch((reason) => {
          expect(reason).toBe(r);
        });
      });
    });
  });
});
