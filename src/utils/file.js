import {
  appendFile as nativeAppendFile,
  existsSync,
  mkdirSync,
  readFile as nativeReadFile,
  writeFile as nativeWriteFile,
} from "fs";
import glob from "glob-all";
import { join } from "path";
import { is, map, pipe, prop, propOr, sort, when } from "ramda";
import rimraf from "rimraf";
import { promisify } from "util";
import { env } from "../config/env";
import { findStatById, stats } from "../config/espn/statCategories";
import { scoringItems } from "../constants/statsScoring";

const { SEASON_ID } = env;

const appendFileAsync = promisify(nativeAppendFile);
const readFileAsync = promisify(nativeReadFile);
const writeFileAsync = promisify(nativeWriteFile);

const settingsDir = join("settings");
const statsDir = join("stats", SEASON_ID.toString());
const statExportDir = join("exports", SEASON_ID.toString());

if (!existsSync(settingsDir)) {
  mkdirSync(settingsDir);
}

if (existsSync(statsDir)) {
  rimraf.sync(statsDir);
}

if (existsSync(statExportDir)) {
  rimraf.sync(statExportDir);
}

mkdirSync(statsDir);
mkdirSync(statExportDir);

export const writeStatsFile = (data, lineupSlot) => {
  const filePathStats = join(
    statsDir,
    `stats.${lineupSlot.abbrev.toLowerCase()}.json`
  );

  return writeFileAsync(filePathStats, JSON.stringify(data, null, 2));
};

export const writeRawStatsFile = (data, lineupSlot) => {
  const filePathStats = join(
    statsDir,
    `stats.${lineupSlot.abbrev.toLowerCase()}.raw.json`
  );

  return writeFileAsync(filePathStats, JSON.stringify(data, null, 2));
};

export const writeSettingsFile = (data, settingsType) => {
  const filePathStats = join(settingsDir, `${settingsType.toLowerCase()}.json`);

  return writeFileAsync(filePathStats, JSON.stringify(data, null, 2));
};

export const writeStatsExportFile = async (files = []) => {
  const filePathStatsExport = join(statExportDir, `stats.csv`);
  const filePathDataDictionary = join(statExportDir, `dictionary.csv`);
  const filePathLeagueScoring = join(statExportDir, `scoring.csv`);

  const playerInfoCols = [
    "id",
    "lastName",
    "firstName",
    "team",
    "position",
    "lineupSlot",
    "active",
    "droppable",
    "points",
    "netPoints",
  ];

  const alpha = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  };

  const statCols = pipe(
    map(prop("abbrev")),
    sort(alpha)
  )(stats);

  const dictionary = pipe(
    map(({ abbrev, description, id }) => `${id},"${abbrev}","${description}"`),
    sort(alpha)
  )(stats);

  const dictionaryHeader = `id,abbrev,description`;

  await writeFileAsync(
    filePathDataDictionary,
    [dictionaryHeader, ...dictionary].join("\n")
  );

  const scoring = pipe(
    map(({ statId, points }) => ({
      ...findStatById(statId),
      points,
    })),
    sort((a, b) => {
      if (a.abbrev < b.abbrev) return -1;
      if (a.abbrev > b.abbrev) return 1;

      return 0;
    }),
    map(
      ({ id, abbrev, description, points }) =>
        `${id},"${abbrev}","${description}",${points}`
    )
  )(scoringItems);

  const scoringHeader = `id,abbrev,description,points,netPoints`;

  await writeFileAsync(
    filePathLeagueScoring,
    [scoringHeader, ...scoring].join("\n")
  );

  const header = [...playerInfoCols, ...statCols].join(",");

  const toRow = (player) => {
    const infos = pipe(
      map((col) => player[col]),
      map(when(is(String), (v) => `"${v}"`))
    )(playerInfoCols);

    const stats = pipe(
      map((stat) => propOr(null, stat, player.stats)),
      map(when(is(String), (v) => `"${v}"`))
    )(statCols);

    return [...infos, ...stats].join(",");
  };

  await writeFileAsync(filePathStatsExport, `${header}\n`);

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const contents = (await readFileAsync(file)).toString();
    const players = JSON.parse(contents);
    const data = map(toRow, players);

    await appendFileAsync(filePathStatsExport, `${data.join("\n")}\n`);
  }
};

export const playerFiles = () =>
  glob.sync([join(statsDir, "stats.*.json"), "!**/*.raw.json"]);
