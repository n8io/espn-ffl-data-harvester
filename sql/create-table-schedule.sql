TRUNCATE TABLE history.schedule;
DROP TABLE IF EXISTS history.schedule;
CREATE TABLE history.schedule (
  awayAbbrev varchar(50) DEFAULT NULL,
  awayId integer DEFAULT NULL,
  awayScore integer DEFAULT NULL,
  date timestamp DEFAULT NULL,
  description varchar(50) DEFAULT NULL,
  homeAbbrev varchar(50) DEFAULT NULL,
  homeId integer DEFAULT NULL,
  homeScore integer DEFAULT NULL,
  id integer DEFAULT NULL,
  isComplete boolean DEFAULT false,
  seasonId integer DEFAULT NULL,
  shortName varchar(50) DEFAULT NULL,
  weekId integer DEFAULT NULL
);
