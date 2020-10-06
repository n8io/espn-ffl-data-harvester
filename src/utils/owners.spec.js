import { invertObj, keys, mergeRight, pipe } from 'ramda';

import { abbrev, id } from './owners';

const appendIds = (ownersMap) =>
  pipe(invertObj, mergeRight(ownerMap))(ownersMap);

const ownerMap = {
  CJAY: 4,
  CLDL: 10,
  DUBS: 6,
  EBBY: 5,
  HURL: 3,
  JROD: 11,
  KURT: 7,
  MBIX: 9,
  NATE: 1,
  RCKY: 8,
  TOBY: 2,
};

const Owner = appendIds(ownerMap);

describe('abbrev', () => {
  const tests = keys(Owner)
    .filter((key) => isNaN(key))
    .map((abbr) => ({
      expected: abbr,
      input: Owner[abbr],
    }));

  tests.forEach(({ expected, input }) => {
    test(`id: ${input} returns "${expected}"`, () => {
      expect(abbrev(input)).toEqual(expected);
    });
  });
});

describe('id', () => {
  const tests = keys(Owner)
    .filter((key) => isNaN(key))
    .map((key) => ({
      expected: Owner[key],
      input: key,
    }));

  tests.forEach(({ expected, input }) => {
    test(`abbrev: ${input} returns ${expected}`, () => {
      expect(id(input)).toEqual(expected);
    });
  });
});
