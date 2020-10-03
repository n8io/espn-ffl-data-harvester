import { constants } from "../../settings/espn";

const ITEMS_PROP = "positions";
const items = prop(ITEMS_PROP, constants);
const abbrevMap = indexBy(prop("abbrev"), items);
const idMap = indexBy(prop("id"), items);
const byAbbrev = prop(__, abbrevMap);
const byId = prop(__, idMap);
const abbrev = pipe(byId, prop("abbrev"));
const id = pipe(byAbbrev, prop("id"));

export { abbrev, byAbbrev, byId, id };
