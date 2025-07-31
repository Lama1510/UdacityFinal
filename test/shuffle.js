// test/shuffle.js
/* global describe, it */

import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle()', () => {
  it('should shuffle array elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);

    expect(shuffled).to.be.an('array').that.has.members(arr);
    expect(shuffled.join()).to.not.equal(arr.join()); // Optional check
  });
});
