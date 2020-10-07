import { evolve, isEmpty, map, pick, pipe, toUpper } from 'ramda';

import { schedule as scheduleColumns } from '../constants/csvColumns';

import { renameKeys } from './renameKeys';

const rawCompetitorToCompetitor = pipe(
  ({ homeAway, records, score, team, winner }) => ({
    ...team,
    homeAway,
    record: records[0].summary,
    score,
    winner,
  }),
  renameKeys({
    abbreviation: 'abbrev',
    alternateColor: 'colorSecondary',
    color: 'colorPrimary',
    displayName: 'name',
    shortDisplayName: 'nameShort',
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
    'logo',
    'name',
    'nameShort',
    'record',
    'score',
  ]),
);

const rawCompetitorsToCompetitors = map(rawCompetitorToCompetitor);

const rawEventToGame = (weekId) =>
  pipe(
    ({ competitions, name, season, shortName, status }) => ({
      ...competitions[0],
      isComplete: status.type.completed,
      name,
      season: season.year,
      shortName,
      weekId,
    }),
    pick([
      'competitors',
      'date',
      'id',
      'isComplete',
      'name',
      'season',
      'shortName',
      'weekId',
    ]),
    renameKeys({
      name: 'description',
      season: 'seasonId',
    }),
    evolve({
      id: Number,
      competitors: rawCompetitorsToCompetitors,
    }),
  );

const rawEventsToGames = (weekId) => map(rawEventToGame(weekId));

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

  return pick(scheduleColumns, data);
};

const gamesToExport = map(flattenGame);

export { gamesToExport, rawEventsToGames };
