import debug from 'debug';

export const makeLog = (method) => {
  const log = debug(`espn:${method}`);

  return (message) => log(message);
};
