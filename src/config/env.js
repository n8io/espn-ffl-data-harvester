import dotenv from 'dotenv-safe';
import { defaultTo, evolve, pick, pipe } from 'ramda';

dotenv.config();

const safeKeys = [
  'ESPN_PASSWORD',
  'ESPN_USERNAME',
  'HEADLESS',
  'LEAGUE_ID',
  'NODE_ENV',
  'SEASON_ID'
];

const env = pipe(
  pick(safeKeys),
  evolve({
    HEADLESS: defaultTo(true),
    LEAGUE_ID: Number,
    NODE_ENV: defaultTo('production'),
    SEASON_ID: Number
  })
)(process.env);

export { env };
