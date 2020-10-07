import { makeLite } from './player';

describe('player', () => {
  describe('makeLite', () => {
    const rawPlayer = sampleRawPlayer();

    test('transforms a raw player to the lite player', () => {
      const playerInfo = {
        firstName: 'Ameer',
        fullName: 'Ameer Abdullah',
        lastName: 'Abdullah',
        id: 2576336,
        injuryStatus: 'ACTIVE',
        isActive: true,
        isDroppable: true,
        isInjured: false,
        jersey: 31,
        owner: null,
        position: 'RB',
        proTeam: 'MIN',
        stats: [
          {
            externalId: '123',
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
          },
        ],
        waiverStatus: 'FREEAGENT',
      };

      const expected = playerInfo;
      const toLite = makeLite(2019);

      expect(toLite(rawPlayer)).toEqual(expected);
    });
  });
});

function sampleRawPlayer() {
  return {
    draftAuctionValue: 0,
    id: 2576336,
    keeperValue: 0,
    keeperValueFuture: 0,
    lineupLocked: false,
    onTeamId: 0,
    player: {
      active: true,
      defaultPositionId: 2,
      draftRanksByRankType: {
        STANDARD: {
          auctionValue: 0,
          published: false,
          rank: 1566,
          rankSourceId: 0,
          rankType: 'STANDARD',
          slotId: 0,
        },
        PPR: {
          auctionValue: 0,
          published: false,
          rank: 1566,
          rankSourceId: 0,
          rankType: 'PPR',
          slotId: 0,
        },
      },
      droppable: true,
      eligibleSlots: [2, 3, 23, 7, 20, 21],
      firstName: 'Ameer',
      fullName: 'Ameer Abdullah',
      id: 2576336,
      injured: false,
      injuryStatus: 'ACTIVE',
      jersey: '31',
      lastName: 'Abdullah',
      lastNewsDate: 1600111546000,
      lastVideoDate: 1507008264000,
      outlooks: {
        outlooksByWeek: {
          3: 'Abdullah has played on only three snaps this season as the Vikings have focused their backfield energies on the one-two punch of Dalvin Cook and Alexander Mattison. Keep the former Lion on waivers at this point.',
        },
      },
      ownership: {
        activityLevel: null,
        auctionValueAverage: 0,
        auctionValueAverageChange: 0,
        averageDraftPosition: 169.81524949479248,
        averageDraftPositionPercentChange: 0.14584912704310682,
        date: 1601730009877,
        leagueType: 0,
        percentChange: -0.0017868737658777584,
        percentOwned: 0.054181763537092385,
        percentStarted: 0.008265014776844602,
      },
      proTeamId: 16,
      rankings: {},
      seasonOutlook: '',
      stats: [
        {
          appliedTotal: 72,
          externalId: '401220304',
          id: '01401220304',
          proTeamId: 16,
          scoringPeriodId: 3,
          seasonId: 2020,
          statSourceId: 0,
          statSplitTypeId: 1,
          stats: {
            108: 1,
            109: 1,
            114: 47,
            116: 4,
            117: 1,
            156: 1,
            210: 1,
          },
        },
        {
          appliedTotal: 0,
          externalId: '401220192',
          id: '01401220192',
          proTeamId: 16,
          scoringPeriodId: 2,
          seasonId: 2020,
          statSourceId: 0,
          statSplitTypeId: 1,
          stats: {
            156: 1,
            210: 1,
          },
        },
        {
          appliedTotal: 0,
          id: '01401220300',
          proTeamId: 16,
          scoringPeriodId: 1,
          seasonId: 2020,
          statSourceId: 0,
          statSplitTypeId: 1,
          stats: {
            156: 1,
            210: 1,
          },
        },
        {
          appliedTotal: 73,
          externalId: '123',
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
        },
      ],
    },
    ratings: {
      0: {
        positionalRanking: 78,
        totalRanking: 875,
        totalRating: 72,
      },
    },
    rosterLocked: false,
    status: 'FREEAGENT',
    tradeLocked: false,
  };
}
