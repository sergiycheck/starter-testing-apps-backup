import { assert, expect, test, describe } from 'vitest';
import {findFirstUniqueChar} from './non-repeatable-char';


describe('case 1', function () {
  test('sample 1', function () {
   
    const str1 = 'aabbc';
    const expected = 'c';

    expect(findFirstUniqueChar(str1)).toEqual(expected);
  });

  test('sample 2', function () {
    const str1 = 'aabbcc';
    const expected = null;

    expect(findFirstUniqueChar(str1)).toEqual(expected);

  });

  test('sample 3', function () {
    const str1 = 'aabcc';
    const expected = 'b';

    expect(findFirstUniqueChar(str1)).toEqual(expected);

  });

  test('sample 4', function () {
    const str1 = 'abcabdcabcj';
    const expected = 'd';

    expect(findFirstUniqueChar(str1)).toEqual(expected);

  });
});
