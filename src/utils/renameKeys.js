import { assoc, curry, reduce } from 'ramda';

const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}),
);

export { renameKeys };
