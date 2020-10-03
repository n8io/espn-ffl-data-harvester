import { __, indexBy, map, path, pipe, prop } from "ramda";
import items from "../../settings/leagueScoring";

const idMap = indexBy(prop("statId"), items);

const byId = prop(__, idMap);

const pointsById = pipe(byId, prop("points"));

export { byId, pointsById };
