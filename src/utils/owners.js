import { __, defaultTo, indexBy, pipe, prop } from 'ramda';

import { teams } from '../../settings/league';

const abbrevMap = indexBy(prop('abbrev'), teams);
const idMap = indexBy(prop('id'), teams);
const byAbbrev = prop(__, abbrevMap);
const byId = prop(__, idMap);
const abbrev = pipe(byId, prop('abbrev'), defaultTo(null));
const id = pipe(byAbbrev, prop('id'));

export { abbrev, byAbbrev, byId, id };
