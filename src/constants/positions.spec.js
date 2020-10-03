import { invertObj, keys, mergeRight, pipe } from 'ramda';

import { abbrev, id } from './positions';

const appendIds = (positionsMap) =>
  pipe(invertObj, mergeRight(positionMap))(positionsMap);

const positionMap = {
  QB: 1,
  RB: 2,
  WR: 3,
  TE: 4,
  LB: 11,
  DT: 9,
  DE: 10,
  CB: 12,
  S: 13,
  P: 7,
  K: 5,
  HC: 14,
  TQB: 15,
  'D/ST': 16,
  EDR: 17,
};

const Position = appendIds(positionMap);

describe('abbrev', () => {
  const tests = keys(Position)
    .filter((key) => isNaN(key))
    .map((abbr) => ({
      expected: abbr,
      input: Position[abbr],
    }));

  tests.forEach(({ expected, input }) => {
    test(`id: ${input} returns "${expected}"`, () => {
      expect(abbrev(input)).toEqual(expected);
    });
  });
});

describe('id', () => {
  const tests = keys(Position)
    .filter((key) => isNaN(key))
    .map((key) => ({
      expected: Position[key],
      input: key,
    }));

  tests.forEach(({ expected, input }) => {
    test(`abbrev: ${input} returns ${expected}`, () => {
      expect(id(input)).toEqual(expected);
    });
  });
});
