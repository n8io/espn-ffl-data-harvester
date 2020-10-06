import { evolve, filter, map, pick, pipe, propEq } from 'ramda';

import { toLite as toGameStatLite } from './gameStat';
import { abbrev as toOwnerAbbrev } from './owners';
import { abbrev as toPositionAbbrev } from './positions';
import { abbrev as toProTeamAbbrev } from './proTeams';
import { renameKeys } from './renameKeys';

const toMeta = pipe(
  pick([
    'active',
    'defaultPositionId',
    'droppable',
    'firstName',
    'fullName',
    'injured',
    'injuryStatus',
    'jersey',
    'lastName',
    'proTeamId',
    'stats',
  ]),
  renameKeys({
    active: 'isActive',
    defaultPositionId: 'position',
    droppable: 'isDroppable',
    injured: 'isInjured',
    proTeamId: 'proTeam',
  }),
  evolve({
    jersey: Number,
    position: toPositionAbbrev,
    proTeam: toProTeamAbbrev,
  }),
);

const toStats = (seasonId) =>
  evolve({
    stats: pipe(filter(propEq('seasonId', seasonId)), map(toGameStatLite)),
  });

const makeLite = (seasonId) =>
  pipe(
    pick(['id', 'onTeamId', 'player', 'status']),
    renameKeys({
      onTeamId: 'owner',
      status: 'waiverStatus',
    }),
    evolve({
      player: pipe(toMeta, toStats(seasonId)),
      owner: toOwnerAbbrev,
    }),
    ({ player, ...rest }) => ({
      ...rest,
      ...player,
    }),
  );

export { makeLite };
