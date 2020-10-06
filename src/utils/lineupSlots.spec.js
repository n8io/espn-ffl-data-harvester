import { invertObj, keys, mergeRight, pipe } from 'ramda';

import { abbrev, id } from './lineupSlots';

const appendIds = (positionsMap) =>
  pipe(invertObj, mergeRight(positionMap))(positionsMap);

const positionMap = {
  QB: 0,
  RB: 2,
  WR: 4,
  TE: 6,
  LB: 10,
  DT: 8,
  DE: 9,
  DL: 11,
  DB: 14,
  CB: 12,
  S: 13,
  P: 18,
  K: 17,
  BE: 20,
  IR: 21,
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
