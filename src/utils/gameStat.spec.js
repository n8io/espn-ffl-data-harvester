const { toLite } = require('./gameStat');

describe('gameStat', () => {
  describe('toLite', () => {
    const rawGameStat = sampleRawGameStat();

    test('transforms a raw game stat to the lite game stat', () => {
      const expected = {
        id: 987,
        pointsGross: 73,
        seasonId: 2019,
        stats: {
          RA: 6,
          RY: 22,
          RY5: 4,
          RY10: 2,
          RY20: 1,
          RA5: 1,
          RYPA: 3.667,
          RYPG: 22,
          RECS: 3,
          REY: 14,
          REY5: 2,
          REY10: 1,
          REC: 3,
          RET: 4,
          YAC: 16,
          YPC: 4.667,
          REYPG: 14,
          KR: 28,
          KR10: 2,
          KR25: 1,
          TL: 1,
          GP: 1,
        },
        weekId: 17,
      };

      const actual = toLite(rawGameStat);

      expect(actual).toEqual(expected);
    });
  });
});

function sampleRawGameStat() {
  return {
    appliedTotal: 73,
    id: '01987',
    proTeamId: 16,
    scoringPeriodId: 17,
    seasonId: 2019,
    statSourceId: 0,
    statSplitTypeId: 1,
    stats: {
      23: 6,
      24: 22,
      27: 4,
      28: 2,
      29: 1,
      33: 1,
      39: 3.667,
      40: 22,
      41: 3,
      42: 14,
      47: 2,
      48: 1,
      53: 3,
      58: 4,
      59: 16,
      60: 4.667,
      61: 14,
      114: 28,
      116: 2,
      117: 1,
      156: 1,
      210: 1,
    },
  };
}
