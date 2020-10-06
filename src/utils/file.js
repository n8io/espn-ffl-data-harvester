import {
  existsSync,
  appendFile as nativeAppendFile,
  readFile as nativeReadFile,
  writeFile as nativeWriteFile,
} from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import mkdirp from 'mkdirp';
// import glob from 'glob-all';
// import { is, map, pipe, prop, propOr, sort, when } from 'ramda';
import rimraf from 'rimraf';

import { config } from '../config';

const { ESPN_SEASON_ID } = config;

const append = promisify(nativeAppendFile);
const read = promisify(nativeReadFile);
const write = promisify(nativeWriteFile);

const init = () => {
  const statsDir = join(__dirname, '../../data', ESPN_SEASON_ID.toString());

  const statExportDir = join(
    __dirname,
    '../../exports',
    ESPN_SEASON_ID.toString(),
  );

  if (existsSync(statsDir)) {
    rimraf.sync(statsDir);
  }

  if (existsSync(statExportDir)) {
    rimraf.sync(statExportDir);
  }

  mkdirp(statsDir);
  mkdirp(statExportDir);
};

const readJson = async (filename) => {
  const content = await read(filename);

  return JSON.parse(content);
};

const writeJson = (filename, obj) =>
  write(filename, JSON.stringify(obj, null, 2));

const writeJsonExport = async (obj) => {
  const exportFilename = join(
    __dirname,
    '../../exports/',
    ESPN_SEASON_ID.toString(),
    'stats.json',
  );

  await writeJson(exportFilename, obj);
};

export { append, init, read, readJson, write, writeJsonExport, writeJson };
