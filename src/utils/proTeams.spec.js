import { invertObj, keys, mergeRight, pipe } from 'ramda';

import { abbrev, id } from './proTeams';

const appendIds = (positionsMap) =>
  pipe(invertObj, mergeRight(positionMap))(positionsMap);

const positionMap = {
  ARI: 22,
  ATL: 1,
  BAL: 33,
  BUF: 2,
  CAR: 29,
  CHI: 3,
  CIN: 4,
  CLE: 5,
  DAL: 6,
  DEN: 7,
  DET: 8,
  FA: 0,
  GB: 9,
  HOU: 34,
  IND: 11,
  JAX: 30,
  KC: 12,
  LAC: 24,
  LAR: 14,
  LV: 13,
  MIA: 15,
  MIN: 16,
  NE: 17,
  NO: 18,
  NYG: 19,
  NYJ: 20,
  PHI: 21,
  PIT: 23,
  SF: 25,
  SEA: 26,
  TB: 27,
  TEN: 10,
  WSH: 28,
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
