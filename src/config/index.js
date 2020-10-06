import dotenv from 'dotenv-safe';
import { defaultTo, evolve, pick, pipe } from 'ramda';

dotenv.config();

const safeKeys = ['ESPN_LEAGUE_ID', 'ESPN_SEASON_ID', 'ESPN_SESSION_COOKIE'];

const config = pipe(
  pick(safeKeys),
  evolve({
    ESPN_LEAGUE_ID: Number,
    ESPN_SEASON_ID: Number,
    NODE_ENV: defaultTo('production'),
  }),
)(process.env);

export { config };
