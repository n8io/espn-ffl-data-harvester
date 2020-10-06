import { __, evolve, indexBy, map, pipe, prop, toUpper } from 'ramda';

import { constants } from '../../settings/espn';

const ITEMS_PROP = 'proTeams';
const items = pipe(
  prop(ITEMS_PROP),
  map(evolve({ abbrev: toUpper })),
)(constants);
const abbrevMap = indexBy(prop('abbrev'), items);
const idMap = indexBy(prop('id'), items);
const byAbbrev = prop(__, abbrevMap);
const byId = prop(__, idMap);
const abbrev = pipe(byId, prop('abbrev'), toUpper);
const id = pipe(byAbbrev, prop('id'));

export { abbrev, byAbbrev, byId, id };
