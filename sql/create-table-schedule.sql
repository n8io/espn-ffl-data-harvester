IF EXISTS DROP TABLE history.schedule;

CREATE TABLE history.schedule (
  awayAbbrev varchar(50) DEFAULT NULL,
  awayId integer DEFAULT NULL,
  awayScore integer DEFAULT NULL,
  broadcast varchar(50) DEFAULT NULL,
  date timestamp DEFAULT NULL,
  description varchar(50) DEFAULT NULL,
  homeAbbrev varchar(50) DEFAULT NULL,
  homeId integer DEFAULT NULL,
  homeScore integer DEFAULT NULL,
  id integer DEFAULT NULL,
  location varchar(50) DEFAULT NULL,
  seasonId integer DEFAULT NULL,
  shortName varchar(50) DEFAULT NULL,
  weekId integer DEFAULT NULL
);
