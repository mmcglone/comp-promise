const allP = require('../allP');

describe('allP', () => {
  it('should be a function', () => {
    expect(allP).toEqual(jasmine.any(Function));
  });
  describe('when passed an array of promises [p1, p2, ..., pn] that resolve to v1, v2, ..., vn', () => {
    it('should return a promise that resolves to an array [v1, v2, ..., vn]', (done) => {
      const p1 = Promise.resolve(1);
      const p2 = Promise.resolve(4);
      const p3 = Promise.resolve(10);
      const returned = allP([p1, p2, p3]);
      returned.then((values) => {
        expect(values).toEqual([1, 4, 10]);
        done();
      });
    });
  });
  describe('when passed an array of promises containing at least one which rejects', () => {
    it('should return a promise that rejects', (done) => {
      const p1 = Promise.resolve();
      const p2 = Promise.reject(new Error('Reason for rejection'));
      const p3 = Promise.resolve();
      const returned = allP([p1, p2, p3]);
      returned.catch((reason) => {
        expect(reason).toEqual(jasmine.any(Error));
        done();
      });
    });
  });
});
