import { evolve, fromPairs, map, omit, pipe, toPairs } from 'ramda';

import { renameKeys } from './renameKeys';
import { abbrev } from './stats';

const toAbbrevStat = ([key, count]) => [abbrev(Number(key)), count];

const toLite = pipe(
  renameKeys({
    appliedTotal: 'pointsGross',
    scoringPeriodId: 'weekId',
  }),
  evolve({
    externalId: Number,
    stats: pipe(toPairs, map(toAbbrevStat), fromPairs),
  }),
  omit(['proTeamId', 'statSourceId', 'statSplitTypeId']),
);

export { toLite };
