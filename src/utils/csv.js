import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';

import { Transform } from 'json2csv';

import { config } from '../config';
import {
  schedule as scheduleColumns,
  stats as statsColumns,
} from '../constants/csvColumns';

const { ESPN_SEASON_ID } = config;

const scheduleJsonToCsv = async (inputPath) => {
  const outputPath = join(
    __dirname,
    '../../exports/',
    ESPN_SEASON_ID.toString(),
    'schedule.csv',
  );

  const opts = { fields: scheduleColumns };
  const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };

  const input = createReadStream(inputPath, { encoding: 'utf8' });
  const output = createWriteStream(outputPath, { encoding: 'utf8' });
  const json2csv = new Transform(opts, transformOpts);

  await input.pipe(json2csv).pipe(output);
};

const jsonToCsv = async () => {
  const inputPath = join(
    __dirname,
    '../../exports/',
    ESPN_SEASON_ID.toString(),
    'stats.json',
  );

  const outputPath = join(
    __dirname,
    '../../exports/',
    ESPN_SEASON_ID.toString(),
    'stats.csv',
  );
  const opts = { fields: statsColumns };
  const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };

  const input = createReadStream(inputPath, { encoding: 'utf8' });
  const output = createWriteStream(outputPath, { encoding: 'utf8' });
  const json2csv = new Transform(opts, transformOpts);

  await input.pipe(json2csv).pipe(output);
};

export { jsonToCsv, scheduleJsonToCsv };
