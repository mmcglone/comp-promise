const compP = require('../index');
const allP = require('../allP');
const catchP = require('../catchP');
const ifP = require('../ifP');
const thenP = require('../thenP');

describe('The main module', () => {
  it('should export an object', () => {
    expect(compP).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('allP as its allP method', () => {
      expect(compP.allP).toBe(allP);
    });
    it('catchP as its catchP method', () => {
      expect(compP.catchP).toBe(catchP);
    });
    it('ifP method', () => {
      expect(compP.ifP).toBe(ifP);
    });
    it('thenP as its thenP method', () => {
      expect(compP.thenP).toBe(thenP);
    });
  });
});
