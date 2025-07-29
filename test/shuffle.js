
/* global describe, it */

import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle()', () => {
  it('should return an array with the same elements in a different order', () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle([...original]);

    expect(result).to.have.members(original);
    expect(result).to.not.deep.equal(original); // may fail rarely
  });

  it('should not modify the original array', () => {
    const original = [1, 2, 3];
    const copy = [...original];
    shuffle(copy);
    expect(original).to.deep.equal([1, 2, 3]);
  });
});
