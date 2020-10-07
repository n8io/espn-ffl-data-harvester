const schedule = [
  'awayAbbrev',
  'awayId',
  'awayScore',
  'date',
  'homeAbbrev',
  'homeId',
  'homeScore',
  'id',
  'isComplete',
  'description',
  'seasonId',
  'shortName',
  'weekId',
];

const stats = [
  '1PSF',
  '1PSF_PTS',
  '2PC',
  '2PC_PTS',
  '2PR',
  '2PRE',
  '2PRET',
  '2PRET_PTS',
  '2PRE_PTS',
  '2PR_PTS',
  'BLKK',
  'BLKKRTD',
  'BLKKRTD_PTS',
  'BLKK_PTS',
  'CPCT',
  'CPCT_PTS',
  'D1PSF',
  'D1PSF_PTS',
  'D2PRET',
  'D2PRET_PTS',
  'DEFRETTD',
  'DEFRETTD_PTS',
  'DPA0',
  'DPA0_PTS',
  'DPA1',
  'DPA14',
  'DPA14_PTS',
  'DPA18',
  'DPA18_PTS',
  'DPA1_PTS',
  'DPA22',
  'DPA22_PTS',
  'DPA28',
  'DPA28_PTS',
  'DPA35',
  'DPA35_PTS',
  'DPA46',
  'DPA46_PTS',
  'DPA7',
  'DPA7_PTS',
  'DPAPG',
  'DPAPG_PTS',
  'DPTSA',
  'DPTSA_PTS',
  'FF',
  'FF_PTS',
  'FG',
  'FG0',
  'FG0_PTS',
  'FG40',
  'FG40_PTS',
  'FG50',
  'FG50P',
  'FG50P_PTS',
  'FG50_PTS',
  'FG60',
  'FG60_PTS',
  'FGA',
  'FGA0',
  'FGA0_PTS',
  'FGA40',
  'FGA40_PTS',
  'FGA50',
  'FGA50P',
  'FGA50P_PTS',
  'FGA50_PTS',
  'FGA60',
  'FGA60_PTS',
  'FGA_PTS',
  'FGM',
  'FGM0',
  'FGM0_PTS',
  'FGM40',
  'FGM40_PTS',
  'FGM50',
  'FGM50P',
  'FGM50P_PTS',
  'FGM50_PTS',
  'FGM60',
  'FGM60_PTS',
  'FGM_PTS',
  'FG_PTS',
  'FR',
  'FRTD',
  'FRTD_PTS',
  'FR_PTS',
  'FTD',
  'FTD_PTS',
  'FUM',
  'FUML',
  'FUML_PTS',
  'FUM_PTS',
  'GP',
  'GP_PTS',
  'HALFSK',
  'HALFSK_PTS',
  'INC',
  'INC_PTS',
  'INT',
  'INTT',
  'INTTD',
  'INTTD_PTS',
  'INTT_PTS',
  'INT_PTS',
  'IP10',
  'IP10_PTS',
  'IP5',
  'IP5_PTS',
  'KR',
  'KR10',
  'KR10_PTS',
  'KR25',
  'KR25_PTS',
  'KRTD',
  'KRTD_PTS',
  'KR_PTS',
  'LM1',
  'LM10',
  'LM10_PTS',
  'LM15',
  'LM15_PTS',
  'LM1_PTS',
  'LM20',
  'LM20_PTS',
  'LM25',
  'LM25_PTS',
  'LM5',
  'LM5_PTS',
  'MGN',
  'MGNPG',
  'MGNPG_PTS',
  'MGN_PTS',
  'MISCTD',
  'MISCTD_PTS',
  'O1PSF',
  'O1PSF_PTS',
  'O2PRET',
  'O2PRET_PTS',
  'P300',
  'P300_PTS',
  'P400',
  'P400_PTS',
  'PA',
  'PA0',
  'PA0_PTS',
  'PA1',
  'PA14',
  'PA14_PTS',
  'PA18',
  'PA18_PTS',
  'PA1_PTS',
  'PA22',
  'PA22_PTS',
  'PA28',
  'PA28_PTS',
  'PA35',
  'PA35_PTS',
  'PA46',
  'PA46_PTS',
  'PA7',
  'PA7_PTS',
  'PAPG',
  'PAPG_PTS',
  'PAT',
  'PATA',
  'PATA_PTS',
  'PATM',
  'PATM_PTS',
  'PAT_PTS',
  'PA_PTS',
  'PC',
  'PC10',
  'PC10_PTS',
  'PC5',
  'PC5_PTS',
  'PC_PTS',
  'PD',
  'PD_PTS',
  'PFUM',
  'PFUML',
  'PFUML_PTS',
  'PFUM_PTS',
  'PPG',
  'PPG_PTS',
  'PR',
  'PR10',
  'PR10_PTS',
  'PR25',
  'PR25_PTS',
  'PRTD',
  'PRTD_PTS',
  'PR_PTS',
  'PT',
  'PT10',
  'PT10_PTS',
  'PT20',
  'PT20_PTS',
  'PTA33',
  'PTA33_PTS',
  'PTA34',
  'PTA34_PTS',
  'PTA36',
  'PTA36_PTS',
  'PTA38',
  'PTA38_PTS',
  'PTA40',
  'PTA40_PTS',
  'PTA42',
  'PTA42_PTS',
  'PTA44',
  'PTA44_PTS',
  'PTAVG',
  'PTAVG_PTS',
  'PTB',
  'PTB_PTS',
  'PTD',
  'PTD0',
  'PTD0_PTS',
  'PTD10',
  'PTD10_PTS',
  'PTD20',
  'PTD20_PTS',
  'PTD30',
  'PTD30_PTS',
  'PTD40',
  'PTD40_PTS',
  'PTD50',
  'PTD50_PTS',
  'PTD_PTS',
  'PTFC',
  'PTFC_PTS',
  'PTL',
  'PTL_PTS',
  'PTR',
  'PTRY',
  'PTRY_PTS',
  'PTR_PTS',
  'PTS',
  'PTSA',
  'PTSA_PTS',
  'PTS_PTS',
  'PTTB',
  'PTTB_PTS',
  'PTY',
  'PTY_PTS',
  'PT_PTS',
  'PY',
  'PY10',
  'PY100',
  'PY100_PTS',
  'PY10_PTS',
  'PY20',
  'PY20_PTS',
  'PY25',
  'PY25_PTS',
  'PY5',
  'PY50',
  'PY50_PTS',
  'PY5_PTS',
  'PYPG',
  'PYPG_PTS',
  'PY_PTS',
  'R100',
  'R100_PTS',
  'RA',
  'RA10',
  'RA10_PTS',
  'RA5',
  'RA5_PTS',
  'RA_PTS',
  'RE100',
  'RE100_PTS',
  'REC',
  'REC10',
  'REC10_PTS',
  'REC5',
  'REC5_PTS',
  'RECS',
  'RECS_PTS',
  'REC_PTS',
  'REFUM',
  'REFUML',
  'REFUML_PTS',
  'REFUM_PTS',
  'RET',
  'RETD',
  'RETD0',
  'RETD0_PTS',
  'RETD10',
  'RETD10_PTS',
  'RETD20',
  'RETD20_PTS',
  'RETD30',
  'RETD30_PTS',
  'RETD40',
  'RETD40_PTS',
  'RETD50',
  'RETD50_PTS',
  'RETD_PTS',
  'RET_PTS',
  'REY',
  'REY10',
  'REY100',
  'REY100_PTS',
  'REY10_PTS',
  'REY20',
  'REY200',
  'REY200_PTS',
  'REY20_PTS',
  'REY25',
  'REY25_PTS',
  'REY5',
  'REY50',
  'REY50_PTS',
  'REY5_PTS',
  'REYPG',
  'REYPG_PTS',
  'REY_PTS',
  'RFUM',
  'RFUML',
  'RFUML_PTS',
  'RFUM_PTS',
  'RRETD',
  'RRETD_PTS',
  'RTD',
  'RTD0',
  'RTD0_PTS',
  'RTD10',
  'RTD10_PTS',
  'RTD20',
  'RTD20_PTS',
  'RTD30',
  'RTD30_PTS',
  'RTD40',
  'RTD40_PTS',
  'RTD50',
  'RTD50_PTS',
  'RTD_PTS',
  'RY',
  'RY10',
  'RY100',
  'RY100_PTS',
  'RY10_PTS',
  'RY20',
  'RY200',
  'RY200_PTS',
  'RY20_PTS',
  'RY25',
  'RY25_PTS',
  'RY5',
  'RY50',
  'RY50_PTS',
  'RY5_PTS',
  'RYPA',
  'RYPA_PTS',
  'RYPG',
  'RYPG_PTS',
  'RY_PTS',
  'SF',
  'SF_PTS',
  'SK',
  'SKD',
  'SKD_PTS',
  'SK_PTS',
  'STF',
  'STF_PTS',
  'TIE',
  'TIE_PTS',
  'TK',
  'TK3',
  'TK3_PTS',
  'TK5',
  'TK5_PTS',
  'TKA',
  'TKA_PTS',
  'TKS',
  'TKS_PTS',
  'TK_PTS',
  'TL',
  'TL_PTS',
  'TRTD',
  'TRTD_PTS',
  'TT',
  'TT_PTS',
  'TW',
  'TW_PTS',
  'WINPCT',
  'WINPCT_PTS',
  'WM1',
  'WM10',
  'WM10_PTS',
  'WM15',
  'WM15_PTS',
  'WM1_PTS',
  'WM20',
  'WM20_PTS',
  'WM25',
  'WM25_PTS',
  'WM5',
  'WM5_PTS',
  'YA',
  'YA100',
  'YA100_PTS',
  'YA199',
  'YA199_PTS',
  'YA299',
  'YA299_PTS',
  'YA349',
  'YA349_PTS',
  'YA399',
  'YA399_PTS',
  'YA449',
  'YA449_PTS',
  'YA499',
  'YA499_PTS',
  'YA549',
  'YA549_PTS',
  'YA550',
  'YA550_PTS',
  'YAC',
  'YAC_PTS',
  'YAPG',
  'YAPG_PTS',
  'YA_PTS',
  'YPC',
  'YPC_PTS',
  'firstName',
  'fullName',
  'gameId',
  'id',
  'injuryStatus',
  'isActive',
  'isDroppable',
  'isInjured',
  'jersey',
  'lastName',
  'opponent',
  'owner',
  'pointAdjustments',
  'pointsGross',
  'pointsNet',
  'position',
  'proTeam',
  'seasonId',
  'waiverStatus',
  'weekId',
];

export { schedule, stats };
