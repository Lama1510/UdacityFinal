import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shuffle } from './src/Shuffle.js'; // Adjust path as needed

describe('shuffle()', () => {
  it('should shuffle the array elements', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    const result = shuffle(copy);

    expect(result).to.have.lengthOf(original.length);
    expect(result).to.have.members(original);
    expect(result).to.not.deep.equal(original);
  });
});
