import { indexBy, map, path, pick, pipe, prop, __ } from "ramda";
import espn from "../../settings/espn";
import { Bonus } from "./bonus";
import { pointsById as statPointsById } from "./scoring";

const ITEMS_PATH = "constants.statSettings.stats".split(".");

const appendScoringForStat = (stat) => {
  const { id } = stat;
  const points = statPointsById(id);

  return { ...stat, points };
};

const massage = map(
  pipe(
    appendScoringForStat,
    pick([
      "abbrev",
      "description",
      "displayOrder",
      "id",
      "points",
      "pointsScoringEligible",
    ])
  )
);

const items = pipe(path(ITEMS_PATH), massage)(espn);
const abbrevMap = indexBy(prop("abbrev"), items);
const idMap = indexBy(prop("id"), items);
const byAbbrev = prop(__, abbrevMap);
const byId = prop(__, idMap);
const pointsByAbbrev = pipe(byAbbrev, prop("points"));
const pointsById = pipe(byId, prop("points"));

const pointsByPositionStat = (positionAbbrev, statAbbrev, count) => {
  if (count === 0) return 0;

  const stat = byAbbrev(statAbbrev);

  let bonus = 0;

  if (positionAbbrev === "TE") {
    if (statAbbrev === "REC") {
      bonus = count * Bonus.TE_REC;
    } else if (statAbbrev === "REY") {
      bonus = count * Bonus.TE_REC_YDS;
    }
  }

  if (["DL", "DE", "DT"].indexOf(positionAbbrev) > -1) {
    if (statAbbrev === "TKA") {
      bonus = count * Bonus.DL_AST;
    } else if (["TK", "TKS"].indexOf(statAbbrev) > -1) {
      bonus = count * Bonus.DL_TKS;
    }
  }

  return stat.points * count + bonus;
};

export { byAbbrev, byId, pointsByAbbrev, pointsById, pointsByPositionStat };
