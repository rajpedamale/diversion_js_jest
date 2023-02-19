'use strict';

const diversion = require('./diversion');

describe('Diversion', () => {
  it('should return a number', () => {
    expect(typeof diversion(0)).toEqual('number');
  });

  it('should return 2 for a single digit number', () => {
    expect(diversion(1)).toEqual(2);
  });

  it('should return 3 for a 2 digit number', () => {
    expect(diversion(2)).toEqual(3);
  });
});
