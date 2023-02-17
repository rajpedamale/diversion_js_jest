'use strict';

const diversion = require('./diversion');

describe('Diversion', () => {
  it('should return a number', () => {
    expect(typeof diversion('')).toEqual('number');
  });
});
