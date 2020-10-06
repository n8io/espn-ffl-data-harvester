import {
  ascend,
  evolve,
  identity,
  isEmpty,
  keys,
  map,
  pick,
  pipe,
  sort,
  toUpper,
} from 'ramda';

import { renameKeys } from './renameKeys';

const rawCompetitorToCompetitor = pipe(
  renameKeys({
    abbreviation: 'abbrev',
    alternateColor: 'colorSecondary',
    color: 'colorPrimary',
    displayName: 'name',
    logo: 'logoLight',
    name: 'nameShort',
  }),
  evolve({
    colorPrimary: toUpper,
    colorSecondary: toUpper,
    id: Number,
    record: (record) => {
      const [wins, losses, ties] = record.split('-').map(Number);

      return { losses, wins, ties };
    },
    score: (score) => (isEmpty(score) ? 0 : Number(score)),
  }),
  ({ homeAway, winner, ...rest }) => ({
    isHome: homeAway === 'home',
    isWinner: winner,
    ...rest,
  }),
  pick([
    'abbrev',
    'colorPrimary',
    'colorSecondary',
    'id',
    'isHome',
    'isWinner',
    'logoDark',
    'logoLight',
    'name',
    'nameShort',
    'record',
    'score',
  ]),
);

const rawCompetitorsToCompetitors = map(rawCompetitorToCompetitor);

const rawEventToGame = pipe(
  pick([
    'broadcast',
    'competitors',
    'date',
    'id',
    'location',
    'name',
    // 'odds',
    'season',
    'shortName',
    'week',
  ]),
  renameKeys({
    name: 'description',
    season: 'seasonId',
    week: 'weekId',
  }),
  evolve({
    id: Number,
    competitors: rawCompetitorsToCompetitors,
  }),
);

const rawEventsToGames = map(rawEventToGame);

const flattenGame = ({ competitors, ...rest }) => {
  const away = competitors.find((c) => !c.isHome);
  const home = competitors.find((c) => c.isHome);

  const data = {
    ...rest,
    awayAbbrev: away.abbrev,
    awayId: away.id,
    awayScore: away.score,
    homeAbbrev: home.abbrev,
    homeId: home.id,
    homeScore: home.score,
  };

  const sortedKeys = pipe(keys, sort(ascend(identity)))(data);

  return pick(sortedKeys, data);
};

const gamesToExport = map(flattenGame);

export { gamesToExport, rawEventsToGames };
