import { playerToPlayerGameStats } from './playerGameStats';

describe('playerGameStats', () => {
  describe('playerToPlayerGameStats', () => {
    const player = samplePlayerLite();

    test('transforms a lite player to player game stats', () => {
      const expected = playerGameStatExpected();

      const actual = playerToPlayerGameStats(player);

      expect(actual).toEqual(expected);
    });
  });
});

function samplePlayerLite() {
  return {
    firstName: 'George',
    fullName: 'George Kittle',
    lastName: 'Kittle',
    id: 2576336,
    injuryStatus: 'ACTIVE',
    isActive: true,
    isDroppable: true,
    isInjured: false,
    jersey: 31,
    owner: null,
    position: 'TE',
    proTeam: 'SF',
    stats: [
      {
        externalId: 401220184,
        id: '01401220184',
        pointsGross: 73,
        seasonId: 2019,
        stats: {
          SK: 1,
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
}

function playerGameStatExpected() {
  return [
    {
      '1PSF': 0,
      '1PSF_PTS': 0,
      '2PC': 0,
      '2PC_PTS': 0,
      '2PR': 0,
      '2PRE': 0,
      '2PRET': 0,
      '2PRET_PTS': 0,
      '2PRE_PTS': 0,
      '2PR_PTS': 0,
      BLKK: 0,
      BLKKRTD: 0,
      BLKKRTD_PTS: 0,
      BLKK_PTS: 0,
      CPCT: 0,
      CPCT_PTS: 0,
      D1PSF: 0,
      D1PSF_PTS: 0,
      D2PRET: 0,
      D2PRET_PTS: 0,
      DEFRETTD: 0,
      DEFRETTD_PTS: 0,
      DPA0: 0,
      DPA0_PTS: 0,
      DPA1: 0,
      DPA14: 0,
      DPA14_PTS: 0,
      DPA18: 0,
      DPA18_PTS: 0,
      DPA1_PTS: 0,
      DPA22: 0,
      DPA22_PTS: 0,
      DPA28: 0,
      DPA28_PTS: 0,
      DPA35: 0,
      DPA35_PTS: 0,
      DPA46: 0,
      DPA46_PTS: 0,
      DPA7: 0,
      DPA7_PTS: 0,
      DPAPG: 0,
      DPAPG_PTS: 0,
      DPTSA: 0,
      DPTSA_PTS: 0,
      FF: 0,
      FF_PTS: 0,
      FG: 0,
      FG0: 0,
      FG0_PTS: 0,
      FG40: 0,
      FG40_PTS: 0,
      FG50: 0,
      FG50P: 0,
      FG50P_PTS: 0,
      FG50_PTS: 0,
      FG60: 0,
      FG60_PTS: 0,
      FGA: 0,
      FGA0: 0,
      FGA0_PTS: 0,
      FGA40: 0,
      FGA40_PTS: 0,
      FGA50: 0,
      FGA50P: 0,
      FGA50P_PTS: 0,
      FGA50_PTS: 0,
      FGA60: 0,
      FGA60_PTS: 0,
      FGA_PTS: 0,
      FGM: 0,
      FGM0: 0,
      FGM0_PTS: 0,
      FGM40: 0,
      FGM40_PTS: 0,
      FGM50: 0,
      FGM50P: 0,
      FGM50P_PTS: 0,
      FGM50_PTS: 0,
      FGM60: 0,
      FGM60_PTS: 0,
      FGM_PTS: 0,
      FG_PTS: 0,
      FR: 0,
      FRTD: 0,
      FRTD_PTS: 0,
      FR_PTS: 0,
      FTD: 0,
      FTD_PTS: 0,
      FUM: 0,
      FUML: 0,
      FUML_PTS: 0,
      FUM_PTS: 0,
      GP: 1,
      GP_PTS: 0,
      HALFSK: 0,
      HALFSK_PTS: 0,
      INC: 0,
      INC_PTS: 0,
      INT: 0,
      INTT: 0,
      INTTD: 0,
      INTTD_PTS: 0,
      INTT_PTS: 0,
      INT_PTS: 0,
      IP10: 0,
      IP10_PTS: 0,
      IP5: 0,
      IP5_PTS: 0,
      KR: 28,
      KR10: 2,
      KR10_PTS: 0,
      KR25: 1,
      KR25_PTS: 0,
      KRTD: 0,
      KRTD_PTS: 0,
      KR_PTS: 28,
      LM1: 0,
      LM10: 0,
      LM10_PTS: 0,
      LM15: 0,
      LM15_PTS: 0,
      LM1_PTS: 0,
      LM20: 0,
      LM20_PTS: 0,
      LM25: 0,
      LM25_PTS: 0,
      LM5: 0,
      LM5_PTS: 0,
      MGN: 0,
      MGNPG: 0,
      MGNPG_PTS: 0,
      MGN_PTS: 0,
      MISCTD: 0,
      MISCTD_PTS: 0,
      O1PSF: 0,
      O1PSF_PTS: 0,
      O2PRET: 0,
      O2PRET_PTS: 0,
      P300: 0,
      P300_PTS: 0,
      P400: 0,
      P400_PTS: 0,
      PA: 0,
      PA0: 0,
      PA0_PTS: 0,
      PA1: 0,
      PA14: 0,
      PA14_PTS: 0,
      PA18: 0,
      PA18_PTS: 0,
      PA1_PTS: 0,
      PA22: 0,
      PA22_PTS: 0,
      PA28: 0,
      PA28_PTS: 0,
      PA35: 0,
      PA35_PTS: 0,
      PA46: 0,
      PA46_PTS: 0,
      PA7: 0,
      PA7_PTS: 0,
      PAPG: 0,
      PAPG_PTS: 0,
      PAT: 0,
      PATA: 0,
      PATA_PTS: 0,
      PATM: 0,
      PATM_PTS: 0,
      PAT_PTS: 0,
      PA_PTS: 0,
      PC: 0,
      PC10: 0,
      PC10_PTS: 0,
      PC5: 0,
      PC5_PTS: 0,
      PC_PTS: 0,
      PD: 0,
      PD_PTS: 0,
      PFUM: 0,
      PFUML: 0,
      PFUML_PTS: 0,
      PFUM_PTS: 0,
      PPG: 0,
      PPG_PTS: 0,
      PR: 0,
      PR10: 0,
      PR10_PTS: 0,
      PR25: 0,
      PR25_PTS: 0,
      PRTD: 0,
      PRTD_PTS: 0,
      PR_PTS: 0,
      PT: 0,
      PT10: 0,
      PT10_PTS: 0,
      PT20: 0,
      PT20_PTS: 0,
      PTA33: 0,
      PTA33_PTS: 0,
      PTA34: 0,
      PTA34_PTS: 0,
      PTA36: 0,
      PTA36_PTS: 0,
      PTA38: 0,
      PTA38_PTS: 0,
      PTA40: 0,
      PTA40_PTS: 0,
      PTA42: 0,
      PTA42_PTS: 0,
      PTA44: 0,
      PTA44_PTS: 0,
      PTAVG: 0,
      PTAVG_PTS: 0,
      PTB: 0,
      PTB_PTS: 0,
      PTD: 0,
      PTD0: 0,
      PTD0_PTS: 0,
      PTD10: 0,
      PTD10_PTS: 0,
      PTD20: 0,
      PTD20_PTS: 0,
      PTD30: 0,
      PTD30_PTS: 0,
      PTD40: 0,
      PTD40_PTS: 0,
      PTD50: 0,
      PTD50_PTS: 0,
      PTD_PTS: 0,
      PTFC: 0,
      PTFC_PTS: 0,
      PTL: 0,
      PTL_PTS: 0,
      PTR: 0,
      PTRY: 0,
      PTRY_PTS: 0,
      PTR_PTS: 0,
      PTS: 0,
      PTSA: 0,
      PTSA_PTS: 0,
      PTS_PTS: 0,
      PTTB: 0,
      PTTB_PTS: 0,
      PTY: 0,
      PTY_PTS: 0,
      PT_PTS: 0,
      PY: 0,
      PY10: 0,
      PY100: 0,
      PY100_PTS: 0,
      PY10_PTS: 0,
      PY20: 0,
      PY20_PTS: 0,
      PY25: 0,
      PY25_PTS: 0,
      PY5: 0,
      PY50: 0,
      PY50_PTS: 0,
      PY5_PTS: 0,
      PYPG: 0,
      PYPG_PTS: 0,
      PY_PTS: 0,
      R100: 0,
      R100_PTS: 0,
      RA: 6,
      RA10: 0,
      RA10_PTS: 0,
      RA5: 1,
      RA5_PTS: 0,
      RA_PTS: 0,
      RE100: 0,
      RE100_PTS: 0,
      REC: 3,
      REC10: 0,
      REC10_PTS: 0,
      REC5: 0,
      REC5_PTS: 0,
      RECS: 3,
      RECS_PTS: 0,
      REC_PTS: 39,
      REFUM: 0,
      REFUML: 0,
      REFUML_PTS: 0,
      REFUM_PTS: 0,
      RET: 4,
      RETD: 0,
      RETD0: 0,
      RETD0_PTS: 0,
      RETD10: 0,
      RETD10_PTS: 0,
      RETD20: 0,
      RETD20_PTS: 0,
      RETD30: 0,
      RETD30_PTS: 0,
      RETD40: 0,
      RETD40_PTS: 0,
      RETD50: 0,
      RETD50_PTS: 0,
      RETD_PTS: 0,
      RET_PTS: 0,
      REY: 14,
      REY10: 1,
      REY100: 0,
      REY100_PTS: 0,
      REY10_PTS: 0,
      REY20: 0,
      REY200: 0,
      REY200_PTS: 0,
      REY20_PTS: 0,
      REY25: 0,
      REY25_PTS: 0,
      REY5: 2,
      REY50: 0,
      REY50_PTS: 0,
      REY5_PTS: 0,
      REYPG: 14,
      REYPG_PTS: 0,
      REY_PTS: 21,
      RFUM: 0,
      RFUML: 0,
      RFUML_PTS: 0,
      RFUM_PTS: 0,
      RRETD: 0,
      RRETD_PTS: 0,
      RTD: 0,
      RTD0: 0,
      RTD0_PTS: 0,
      RTD10: 0,
      RTD10_PTS: 0,
      RTD20: 0,
      RTD20_PTS: 0,
      RTD30: 0,
      RTD30_PTS: 0,
      RTD40: 0,
      RTD40_PTS: 0,
      RTD50: 0,
      RTD50_PTS: 0,
      RTD_PTS: 0,
      RY: 22,
      RY10: 2,
      RY100: 0,
      RY100_PTS: 0,
      RY10_PTS: 0,
      RY20: 1,
      RY200: 0,
      RY200_PTS: 0,
      RY20_PTS: 0,
      RY25: 0,
      RY25_PTS: 0,
      RY5: 4,
      RY50: 0,
      RY50_PTS: 0,
      RY5_PTS: 0,
      RYPA: 3.667,
      RYPA_PTS: 0,
      RYPG: 22,
      RYPG_PTS: 0,
      RY_PTS: 22,
      SF: 0,
      SF_PTS: 0,
      SK: 1,
      SKD: 0,
      SKD_PTS: 0,
      SK_PTS: 25,
      STF: 0,
      STF_PTS: 0,
      TIE: 0,
      TIE_PTS: 0,
      TK: 0,
      TK3: 0,
      TK3_PTS: 0,
      TK5: 0,
      TK5_PTS: 0,
      TKA: 0,
      TKA_PTS: 0,
      TKS: 0,
      TKS_PTS: 0,
      TK_PTS: 0,
      TL: 1,
      TL_PTS: 0,
      TRTD: 0,
      TRTD_PTS: 0,
      TT: 0,
      TT_PTS: 0,
      TW: 0,
      TW_PTS: 0,
      WINPCT: 0,
      WINPCT_PTS: 0,
      WM1: 0,
      WM10: 0,
      WM10_PTS: 0,
      WM15: 0,
      WM15_PTS: 0,
      WM1_PTS: 0,
      WM20: 0,
      WM20_PTS: 0,
      WM25: 0,
      WM25_PTS: 0,
      WM5: 0,
      WM5_PTS: 0,
      YA: 0,
      YA100: 0,
      YA100_PTS: 0,
      YA199: 0,
      YA199_PTS: 0,
      YA299: 0,
      YA299_PTS: 0,
      YA349: 0,
      YA349_PTS: 0,
      YA399: 0,
      YA399_PTS: 0,
      YA449: 0,
      YA449_PTS: 0,
      YA499: 0,
      YA499_PTS: 0,
      YA549: 0,
      YA549_PTS: 0,
      YA550: 0,
      YA550_PTS: 0,
      YAC: 16,
      YAC_PTS: 0,
      YAPG: 0,
      YAPG_PTS: 0,
      YA_PTS: 0,
      YPC: 4.667,
      YPC_PTS: 0,
      firstName: 'George',
      fullName: 'George Kittle',
      gameId: '01401220184',
      gameIdExternal: 401220184,
      id: 2576336,
      injuryStatus: 'ACTIVE',
      isActive: true,
      isDroppable: true,
      isInjured: false,
      jersey: 31,
      lastName: 'Kittle',
      owner: null,
      pointAdjustments: 62,
      pointsGross: 73,
      pointsNet: 135,
      position: 'TE',
      proTeam: 'SF',
      seasonId: 2019,
      waiverStatus: 'FREEAGENT',
      weekId: 17,
    },
  ];
}