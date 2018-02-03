const main = require('../index');
const allP = require('../allP');
const catchR = require('../catchR');
const thenIf = require('../thenIf');
const then = require('../then');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('allP as its allP method', () => {
      expect(main.allP).toBe(allP);
    });
    it('catchR as its catchR method', () => {
      expect(main.catchR).toBe(catchR);
    });
    it('thenIf as its thenIf method', () => {
      expect(main.thenIf).toBe(thenIf);
    });
    it('then as its then method', () => {
      expect(main.then).toBe(then);
    });
  });
});
