const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('equal positive (alternate)', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('equal negative', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('equal negative (alternate)', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('negative and positive', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('positive and negative', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('equal positive (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('equal negative', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('equal negative (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('negative and positive', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it(' with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it(' with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal negative', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive and rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive and rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative and rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative and rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
