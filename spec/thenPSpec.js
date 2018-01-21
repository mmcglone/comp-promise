const thenP = require('../thenP');

describe('thenP', () => {
  describe('when passed a function f and a promise p that resolves to v', () => {
    it('should return a new promise that resolves to f(v)', (done) => {
      const f = a => a + 3;
      const v = 5;
      const returned = thenP(f, Promise.resolve(v));
      returned.then((value) => {
        expect(value).toBe(f(v));
        done();
      });
    });
  });
  describe('when passed a function f and a promise p that rejects with reason r', () => {
    it('should return a promise that rejects with r', (done) => {
      const f = () => {};
      const r = new Error('The reason for rejection');
      const returned = thenP(f, Promise.reject(r));
      returned.catch((reason) => {
        expect(reason).toBe(r);
        done();
      });
    });
  });
});
