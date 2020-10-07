import { curry, indexBy, prop } from 'ramda';

let schedule = null;

const setSchedule = (raw) => {
  schedule = indexBy(prop('id'), raw);

  return schedule;
};

const opponent = curry((gameId, abbrev) => {
  if (!schedule) {
    return null;
  }

  const game = schedule[gameId];

  if (!game) return null;

  switch (abbrev) {
    case game.homeAbbrev:
      return game.awayAbbrev;
    case game.awayAbbrev:
      return game.homeAbbrev;
    default:
      return null;
  }
});

export { opponent, setSchedule };
