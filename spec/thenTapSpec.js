const thenTap = require('../thenTap');

describe('thenTap', () => {
  describe('when passed a function promise-returning function f and a promise p that resolves to v', () => {
    it('should return a new promise that resolves to v', (done) => {
      const f = a => Promise.resolve(a + 3);
      const v = 5;
      const original = Promise.resolve(v);
      const returned = thenTap(f, original);
      returned.then((value) => {
        expect(value).toBe(v);
        expect(returned).not.toBe(original);
        done();
      });
    });
  });
  describe('when passed a function f and a promise p that rejects with reason r', () => {
    it('should return a promise that rejects with r', (done) => {
      const f = () => {};
      const r = new Error('The reason for rejection');
      const returned = thenTap(f, Promise.reject(r));
      returned.catch((reason) => {
        expect(reason).toBe(r);
        done();
      });
    });
  });
});
