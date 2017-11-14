'use strict';

const expect = require('chai').expect;
const shoppu = require('../index');

describe('#hello', () => {
  it('just test', () => {
    const result = shoppu(2, 3);

    expect(5).to.equal(result);
  });
});
