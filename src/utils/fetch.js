import { join } from 'path';

import got from 'got';
import { flatten, pipe } from 'ramda';

import { config } from '../config';

import { writeJson } from './file';
import { gamesToExport, rawEventsToGames } from './game';
import { setSchedule } from './schedule';

const { ESPN_LEAGUE_ID, ESPN_SEASON_ID } = config;

const fetch = async (url, headers) => {
  try {
    const { body: output } = await got(url, {
      headers,
      responseType: 'json',
    });

    return output;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchWithAuth = async (url, headers) => {
  const { ESPN_SESSION_COOKIE: tempCookie } = config;

  const cookie = `espn_s2=${tempCookie}; Domain=.espn.com; Path=/`;

  try {
    const output = await fetch(url, { ...headers, cookie });

    return output;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchWeekSchedule = async (weekId) => {
  const url = new URL(
    `/apis/site/v2/sports/football/nfl/scoreboard?limit=100&showAirings=true&dates=${ESPN_SEASON_ID}&seasontype=2&week=${weekId}`,
    'https://site.api.espn.com',
  );

  const { events } = await fetch(url);

  return rawEventsToGames(weekId)(events);
};

const fetchSeasonSchedule = async () => {
  const weeks = Array.from(Array(16), (_, x) => x + 1);
  const promises = weeks.map(fetchWeekSchedule);

  // eslint-disable-next-line no-undef
  const weeklySchedules = await Promise.all(promises);
  const seasonSchedule = pipe(flatten, gamesToExport)(weeklySchedules);

  const filename = join(
    __dirname,
    `../../data/${ESPN_SEASON_ID}/schedule.json`,
  );

  await writeJson(filename, seasonSchedule);
  setSchedule(seasonSchedule);

  console.log(`Wrote schedule file to ${filename}`);

  return filename;
};

const fetchSeasonPlayerGameStats = async () => {
  const MAX_RESULTS = 3200;

  const url = new URL(
    `/apis/v3/games/ffl/seasons/${ESPN_SEASON_ID}/segments/0/leagues/${ESPN_LEAGUE_ID}`,
    'https://fantasy.espn.com',
  );

  url.searchParams.append('view', 'kona_player_info');

  const filter = {
    players: {
      filterSlotIds: {
        value: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          23,
          24,
        ],
      },
      // filterIds: { value: [3728305] },
      filterRanksForScoringPeriodIds: { value: [4] },
      limit: MAX_RESULTS,
      offset: 0,
      sortName: { sortAsc: true, sortPriority: 3 },
      sortDraftRanks: {
        sortPriority: 100,
        sortAsc: true,
        value: 'STANDARD',
      },
      filterRanksForRankTypes: { value: ['PPR'] },
      filterRanksForSlotIds: { value: [0, 2, 4, 6, 17, 16] },
      filterStatsForTopScoringPeriodIds: {
        value: 4,
        additionalValue: [],
      },
    },
  };

  const headers = {
    'x-fantasy-filter': JSON.stringify(filter),
  };

  const data = await fetchWithAuth(url.href, headers);

  const filename = join(
    __dirname,
    `../../data/${ESPN_SEASON_ID.toString()}/data.json`,
  );

  await writeJson(filename, data);

  console.log(`Wrote data file to ${filename}`);

  return filename;
};

export { fetchSeasonPlayerGameStats, fetchSeasonSchedule };
