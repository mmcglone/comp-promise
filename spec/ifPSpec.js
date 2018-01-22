const ifP = require('../ifP');

const c = a => a > 5;
const f = a => a + 3;

describe('ifP', () => {
  describe('when passed a condition c, function f, and promise p that resolves to v', () => {
    describe('when c(v) is true', () => {
      it('should return a promise that resolve to f(v)', () => {
        const v = 8;
        const returned = ifP(c, f, Promise.resolve(v));
        returned.then((value) => {
          expect(value).toBe(f(v));
        });
      });
    });
    describe('when c(v) is not true', () => {
      it('should return a promise that resolve to v', () => {
        const v = 4;
        const returned = ifP(c, f, Promise.resolve(v));
        returned.then((value) => {
          expect(value).toBe(v);
        });
      });
    });
    describe('when passed a condition c, function f, and promise p that rejects with r', () => {
      it('should return a promise that rejects with', () => {
        const r = new Error('Reason for rejection');
        const returned = ifP(c, f, Promise.reject(r));
        returned.catch((reason) => {
          expect(reason).toBe(r);
        });
      });
    });
  });
});
