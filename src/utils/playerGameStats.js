import {
  ascend,
  filter,
  identity,
  isEmpty,
  keys,
  map,
  pick,
  pipe,
  reduce,
  sort,
  toPairs,
} from 'ramda';

import { renameKeys } from './renameKeys';
import {
  pointsMapToPointsTotal,
  abbrevMap as statAbbrevMap,
  toPointsMap,
} from './stats';

const statCols = pipe(
  keys,
  reduce(
    (acc, key) => ({
      ...acc,
      [key]: 0,
    }),
    {},
  ),
)(statAbbrevMap);

const statPointsCols = pipe(
  keys,
  reduce(
    (acc, key) => ({
      ...acc,
      [`${key}_PTS`]: 0,
    }),
    {},
  ),
)(statCols);

const appendStatCols = map(({ stats, statsPointMap, ...rest }) => {
  const scoring = pipe(
    toPairs,
    reduce(
      (acc, [key, value]) => ({
        ...acc,
        [`${key}_PTS`]: value,
      }),
      {},
    ),
  )(statsPointMap);

  const raw = { ...rest, ...statCols, ...statPointsCols, ...stats, ...scoring };
  const sortedKeys = pipe(keys, sort(ascend(identity)))(raw);

  const output = pick(sortedKeys, raw);

  return output;
});

const playerToPlayerGameStats = pipe(({ stats, ...player }) => {
  if (!stats || stats.length === 0) return [];

  return pipe(
    map(
      pipe(
        renameKeys({
          externalId: 'gameIdExternal',
          id: 'gameId',
        }),
        ({ stats, ...rest }) => {
          if (isEmpty(stats)) return null;

          const { pointsGross } = rest;
          const statsPointMap = toPointsMap(player.position, stats);
          const pointsNet = pointsMapToPointsTotal(statsPointMap);
          const pointAdjustments = pointsNet - pointsGross;

          return {
            ...player,
            ...rest,
            pointAdjustments,
            pointsNet,
            stats,
            statsPointMap,
          };
        },
      ),
    ),
    filter(Boolean),
    appendStatCols,
  )(stats);
});

export { playerToPlayerGameStats };
