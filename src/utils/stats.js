import {
  __,
  curry,
  defaultTo,
  indexBy,
  keys,
  map,
  path,
  pick,
  pipe,
  prop,
  reduce,
  sum,
  toUpper,
  values,
} from 'ramda';

import espn from '../../settings/espn';
import { Bonus } from '../constants/bonus';

import { pointsById as statPointsById } from './scoring';

const ITEMS_PATH = 'constants.statSettings.stats'.split('.');

const appendScoringForStat = (stat) => {
  const { id } = stat;
  const points = statPointsById(id);

  return { ...stat, points };
};

const massage = map(
  pipe(
    appendScoringForStat,
    pick([
      'abbrev',
      'description',
      'displayOrder',
      'id',
      'points',
      'pointsScoringEligible',
    ]),
  ),
);

const items = pipe(path(ITEMS_PATH), massage)(espn);
const abbrevMap = indexBy(prop('abbrev'), items);
const idMap = indexBy(prop('id'), items);
const byAbbrev = prop(__, abbrevMap);
const byId = prop(__, idMap);
const abbrev = pipe(byId, prop('abbrev'));
const pointsByAbbrev = pipe(byAbbrev, prop('points'), defaultTo(0));
const pointsById = pipe(byId, prop('points'), defaultTo(0));

const pointsByPositionStat = (positionAbbrev, statAbbrev, count) => {
  if (!count) return 0;

  const abbrev = pipe(defaultTo(''), toUpper)(statAbbrev);
  let points = pointsByAbbrev(abbrev);
  let bonus = 0;

  if (positionAbbrev === 'TE') {
    if (abbrev === 'REC') {
      bonus = count * Bonus.TE_REC;
    } else if (abbrev === 'REY') {
      bonus = count * Bonus.TE_REC_YDS;
    }
  }

  if (['DL', 'DE', 'DT'].indexOf(positionAbbrev) > -1) {
    if (abbrev === 'TKA') {
      bonus = count * Bonus.DL_AST;
    } else if (abbrev === 'TKS') {
      bonus = count * Bonus.DL_TKS;
    }
  }

  if (abbrev === 'D2PRET') {
    points = 0;
    bonus = count * Bonus.D2PT_RET;
  }

  return points * count + bonus;
};

const statMap = pipe(
  keys,
  reduce(
    (acc, key) => ({
      ...acc,
      [abbrevMap[key].id]: key,
      [key]: abbrevMap[key].id,
    }),
    {},
  ),
)(abbrevMap);

const toPointsMap = curry((positionAbbrev, stats) =>
  pipe(
    keys,
    reduce(
      (acc, statAbbrev) => ({
        ...acc,
        [statAbbrev]: pointsByPositionStat(
          positionAbbrev,
          statAbbrev,
          stats[statAbbrev],
        ),
      }),
      {},
    ),
  )(stats),
);

const pointsMapToPointsTotal = pipe(values, sum);

export {
  abbrev,
  abbrevMap,
  byAbbrev,
  byId,
  pointsByAbbrev,
  pointsById,
  pointsByPositionStat,
  pointsMapToPointsTotal,
  statMap,
  toPointsMap,
};
