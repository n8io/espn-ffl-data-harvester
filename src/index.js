import { fetchSeasonPlayerGameStats, fetchSeasonSchedule } from './utils/fetch';
import { init } from './utils/file';
import { processGameStats, processSeasonSchedule } from './utils/process';

init();

(async () => {
  const scheduleFilename = await fetchSeasonSchedule();
  const gameStatsFilename = await fetchSeasonPlayerGameStats();

  // await processStatMap();
  await processSeasonSchedule(scheduleFilename);
  await processGameStats(gameStatsFilename);
})();
