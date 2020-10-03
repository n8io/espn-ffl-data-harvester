import { assoc, curry, is, keys, reduce } from 'ramda';

const renameKeys = curry((keysMap, obj) => {
  const isValidObj = is(Object, obj);
  const isFunction = is(Function, obj);

  if (!isValidObj || isFunction) {
    return obj;
  }

  return reduce(
    (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
    {},
    keys(obj),
  );
});

export { renameKeys };
