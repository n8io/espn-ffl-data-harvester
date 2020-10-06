import { join, join as pathJoin } from 'path';

import { append, filter, flatten, map, pipe, prepend, toPairs } from 'ramda';

import { config } from '../config';

import { jsonToCsv, scheduleJsonToCsv } from './csv';
import { readJson, write, writeJsonExport } from './file';
import { makeLite } from './player';
import { playerToPlayerGameStats } from './playerGameStats';
import { pointsById } from './scoring';
import { byAbbrev, byId, statMap } from './stats';

const { ESPN_SEASON_ID } = config;

const processGameStats = async (filename) => {
  const { players } = await readJson(filename);
  const toPlayerLite = makeLite(ESPN_SEASON_ID);

  const output = pipe(
    map(pipe(toPlayerLite, playerToPlayerGameStats, flatten)),
    flatten,
    filter(Boolean),
  )(players);

  await writeJsonExport(output);
  await jsonToCsv();
};

const processSeasonSchedule = (filename) => scheduleJsonToCsv(filename);

const processStatMap = () =>
  write(
    pathJoin(__dirname, '../constants/statMap.js'),
    pipe(
      toPairs,
      map(([key, value]) => {
        const { description, id } = byId(key) || byAbbrev(key);
        const points = pointsById(id);
        const pointsDescription = points ? ` (${points} point(s) per)` : '';

        return `  "${key}": ${JSON.stringify(
          value,
        )}, // ${description}${pointsDescription}`;
      }),
      prepend('const statMap = {'),
      append('};\n\nexport { statMap };\n'),
      join('\n'),
    )(statMap),
  );

export { processGameStats, processSeasonSchedule, processStatMap };
