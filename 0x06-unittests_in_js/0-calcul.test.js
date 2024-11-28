const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down bs floating point', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point', () => {
    assert.strictEqual(calculateNumber(4.0, 4.5), 4);
  });

  it('rounding up a and b\'s floating point', () => {
    assert.strictEqual(calculateNumber(4.6, 4.5), 6);
  });

  it('rounding up a\'s floating point', () => {
    assert.strictEqual(calculateNumber(4.6, 4.0), 5);
  });

  it('rounding down a and b floating point with trailing 9s', () => {
    assert.strictEqual(calculateNumber(1.499999, 2.499999), 5);
  });
});
