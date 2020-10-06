const statMap = {
  0: 'PA', // Each Pass Attempted
  1: 'PC', // Each Pass Completed (2 point(s) per)
  2: 'INC', // Each Incomplete Pass
  3: 'PY', // Passing Yards (0.3 point(s) per)
  4: 'PTD', // TD Pass (30 point(s) per)
  5: 'PY5', // Every 5 passing yards
  6: 'PY10', // Every 10 passing yards
  7: 'PY20', // Every 20 passing yards
  8: 'PY25', // Every 25 passing yards
  9: 'PY50', // Every 50 passing yards
  10: 'PY100', // Every 100 passing yards
  11: 'PC5', // Every 5 pass completions
  12: 'PC10', // Every 10 pass completions
  13: 'IP5', // Every 5 pass incompletions
  14: 'IP10', // Every 10 pass incompletions
  15: 'PTD40', // 40+ yard TD pass bonus (10 point(s) per)
  16: 'PTD50', // 50+ yard TD pass bonus (15 point(s) per)
  17: 'P300', // 300-399 yard passing game (25 point(s) per)
  18: 'P400', // 400+ yard passing game (50 point(s) per)
  19: '2PC', // 2pt Passing Conversion (15 point(s) per)
  20: 'INTT', // Interceptions Thrown (-15 point(s) per)
  21: 'CPCT', // Passing Completion Pct
  22: 'PYPG', // Passing Yards Per Game
  23: 'RA', // Rushing Attempts
  24: 'RY', // Rushing Yards (1 point(s) per)
  25: 'RTD', // TD Rush (50 point(s) per)
  26: '2PR', // 2pt Rushing Conversion (10 point(s) per)
  27: 'RY5', // Every 5 rushing yards
  28: 'RY10', // Every 10 rushing yards
  29: 'RY20', // Every 20 rushing yards
  30: 'RY25', // Every 25 rushing yards
  31: 'RY50', // Every 50 rushing yards
  32: 'R100', // Every 100 rushing yards
  33: 'RA5', // Every 5 rush attempts
  34: 'RA10', // Every 10 rush attempts
  35: 'RTD40', // 40+ yard TD rush bonus (10 point(s) per)
  36: 'RTD50', // 50+ yard TD rush bonus (15 point(s) per)
  37: 'RY100', // 100-199 yard rushing game (25 point(s) per)
  38: 'RY200', // 200+ yard rushing game (50 point(s) per)
  39: 'RYPA', // Rushing Yards Per Attempt
  40: 'RYPG', // Rushing Yards Per Game
  41: 'RECS', // Receptions
  42: 'REY', // Receiving Yards (1 point(s) per)
  43: 'RETD', // TD Reception (50 point(s) per)
  44: '2PRE', // 2pt Receiving Conversion (2 point(s) per)
  45: 'RETD40', // 40+ yard TD rec bonus (10 point(s) per)
  46: 'RETD50', // 50+ yard TD rec bonus (15 point(s) per)
  47: 'REY5', // Every 5 receiving yards
  48: 'REY10', // Every 10 receiving yards
  49: 'REY20', // Every 20 receiving yards
  50: 'REY25', // Every 25 receiving yards
  51: 'REY50', // Every 50 receiving yards
  52: 'RE100', // Every 100 receiving yards
  53: 'REC', // Each reception (3 point(s) per)
  54: 'REC5', // Every 5 receptions
  55: 'REC10', // Every 10 receptions
  56: 'REY100', // 100-199 yard receiving game (40 point(s) per)
  57: 'REY200', // 200+ yard receiving game (50 point(s) per)
  58: 'RET', // Receiving Target
  59: 'YAC', // Receiving Yards After Catch
  60: 'YPC', // Receiving Yards Per Catch
  61: 'REYPG', // Receiving Yards Per Game
  62: 'PTL', // Total 2pt Conversions
  63: 'FTD', // Fumble Recovered for TD (50 point(s) per)
  64: 'SKD', // Sacked (-10 point(s) per)
  65: 'PFUM', // Passing Fumbles
  66: 'RFUM', // Rushing Fumbles
  67: 'REFUM', // Receiving Fumbles
  68: 'FUM', // Total Fumbles
  69: 'PFUML', // Passing Fumbles Lost
  70: 'RFUML', // Rushing Fumbles Lost
  71: 'REFUML', // Receiving Fumbles Lost
  72: 'FUML', // Total Fumbles Lost (-15 point(s) per)
  73: 'TT', // Total Turnovers
  74: 'FG50P', // FG Made (50+ yards)
  75: 'FGA50P', // FG Attempted (50+ yards)
  76: 'FGM50P', // FG Missed (50+ yards)
  77: 'FG40', // FG Made (40-49 yards) (60 point(s) per)
  78: 'FGA40', // FG Attempted (40-49 yards)
  79: 'FGM40', // FG Missed (40-49 yards)
  80: 'FG0', // FG Made (0-39 yards) (35 point(s) per)
  81: 'FGA0', // FG Attempted (0-39 yards)
  82: 'FGM0', // FG Missed (0-39 yards) (-15 point(s) per)
  83: 'FG', // Total FG Made
  84: 'FGA', // Total FG Attempted
  85: 'FGM', // Total FG Missed
  86: 'PAT', // Each PAT Made (30 point(s) per)
  87: 'PATA', // Each PAT Attempted
  88: 'PATM', // Each PAT Missed (-15 point(s) per)
  89: 'PA0', // 0 points allowed
  90: 'PA1', // 1-6 points allowed
  91: 'PA7', // 7-13 points allowed
  92: 'PA14', // 14-17 points allowed
  93: 'BLKKRTD', // Blocked Punt or FG return for TD (75 point(s) per)
  94: 'DEFRETTD', // Fumble or INT Return for TD
  95: 'INT', // Each Interception (40 point(s) per)
  96: 'FR', // Each Fumble Recovered (15 point(s) per)
  97: 'BLKK', // Blocked Punt, PAT or FG (25 point(s) per)
  98: 'SF', // Each Safety (50 point(s) per)
  99: 'SK', // Each Sack (25 point(s) per)
  100: 'HALFSK', // 1/2 Sack
  101: 'KRTD', // Kickoff Return TD (75 point(s) per)
  102: 'PRTD', // Punt Return TD (75 point(s) per)
  103: 'INTTD', // Interception Return TD (75 point(s) per)
  104: 'FRTD', // Fumble Return TD (75 point(s) per)
  105: 'TRTD', // Total Return TD
  106: 'FF', // Each Fumble Forced (25 point(s) per)
  107: 'TKA', // Assisted Tackles (5 point(s) per)
  108: 'TKS', // Solo Tackles (25 point(s) per)
  109: 'TK', // Total Tackles
  110: 'TK3', // Every 3 Total Tackles
  111: 'TK5', // Every 5 Total Tackles
  112: 'STF', // Stuffs (15 point(s) per)
  113: 'PD', // Passes Defensed (25 point(s) per)
  114: 'KR', // Kickoff Return Yards (1 point(s) per)
  115: 'PR', // Punt Return Yards (1 point(s) per)
  116: 'KR10', // Every 10 kickoff return yards
  117: 'KR25', // Every 25 kickoff return yards
  118: 'PR10', // Every 10 punt return yards
  119: 'PR25', // Every 25 punt return yards
  120: 'PTSA', // Points Allowed
  121: 'PA18', // 18-21 points allowed
  122: 'PA22', // 22-27 points allowed
  123: 'PA28', // 28-34 points allowed
  124: 'PA35', // 35-45 points allowed
  125: 'PA46', // 46+ points allowed
  126: 'PAPG', // Points Allowed Per Game
  127: 'YA', // Yards Allowed
  128: 'YA100', // Less than 100 total yards allowed
  129: 'YA199', // 100-199 total yards allowed
  130: 'YA299', // 200-299 total yards allowed
  131: 'YA349', // 300-349 total yards allowed
  132: 'YA399', // 350-399 total yards allowed
  133: 'YA449', // 400-449 total yards allowed
  134: 'YA499', // 450-499 total yards allowed
  135: 'YA549', // 500-549 total yards allowed
  136: 'YA550', // 550+ total yards allowed
  137: 'YAPG', // Yards Allowed Per Game
  138: 'PT', // Net Punts (10 point(s) per)
  139: 'PTY', // Punt Yards (0.2 point(s) per)
  140: 'PT10', // Punts Inside the 10 (30 point(s) per)
  141: 'PT20', // Punts Inside the 20 (20 point(s) per)
  142: 'PTB', // Blocked Punts (-30 point(s) per)
  143: 'PTR', // Punts Returned
  144: 'PTRY', // Punt Return Yards
  145: 'PTTB', // Touchbacks (-15 point(s) per)
  146: 'PTFC', // Fair Catches (10 point(s) per)
  147: 'PTAVG', // Punt Average
  148: 'PTA44', // Punt Average 44.0+ (3 point(s) per)
  149: 'PTA42', // Punt Average 42.0-43.9 (2 point(s) per)
  150: 'PTA40', // Punt Average 40.0-41.9 (1 point(s) per)
  151: 'PTA38', // Punt Average 38.0-39.9
  152: 'PTA36', // Punt Average 36.0-37.9
  153: 'PTA34', // Punt Average 34.0-35.9
  154: 'PTA33', // Punt Average 33.9 or less
  155: 'TW', // Team Win
  156: 'TL', // Team Loss
  157: 'TIE', // Team Tie
  158: 'PTS', // Points Scored
  159: 'PPG', // Points Scored Per Game
  160: 'MGN', // Margin of Victory
  161: 'WM25', // 25+ point Win Margin
  162: 'WM20', // 20-24 point Win Margin
  163: 'WM15', // 15-19 point Win Margin
  164: 'WM10', // 10-14 point Win Margin
  165: 'WM5', // 5-9 point Win Margin
  166: 'WM1', // 1-4 point Win Margin
  167: 'LM1', // 1-4 point Loss Margin
  168: 'LM5', // 5-9 point Loss Margin
  169: 'LM10', // 10-14 point Loss Margin
  170: 'LM15', // 15-19 point Loss Margin
  171: 'LM20', // 20-24 point Loss Margin
  172: 'LM25', // 25+ point Loss Margin
  173: 'MGNPG', // Margin of Victory Per Game
  174: 'WINPCT', // Winning Pct
  175: 'PTD0', // 0-9 yd TD pass bonus
  176: 'PTD10', // 10-19 yd TD pass bonus
  177: 'PTD20', // 20-29 yd TD pass bonus
  178: 'PTD30', // 30-39 yd TD pass bonus
  179: 'RTD0', // 0-9 yd TD rush bonus
  180: 'RTD10', // 10-19 yd TD rush bonus
  181: 'RTD20', // 20-29 yd TD rush bonus
  182: 'RTD30', // 30-39 yd TD rush bonus
  183: 'RETD0', // 0-9 yd TD rec bonus
  184: 'RETD10', // 10-19 yd TD rec bonus
  185: 'RETD20', // 20-29 yd TD rec bonus
  186: 'RETD30', // 30-39 yd TD rec bonus
  187: 'DPTSA', // D/ST Points Allowed
  188: 'DPA0', // D/ST 0 points allowed
  189: 'DPA1', // D/ST 1-6 points allowed
  190: 'DPA7', // D/ST 7-13 points allowed
  191: 'DPA14', // D/ST 14-17 points allowed
  192: 'DPA18', // D/ST 18-21 points allowed
  193: 'DPA22', // D/ST 22-27 points allowed
  194: 'DPA28', // D/ST 28-34 points allowed
  195: 'DPA35', // D/ST 35-45 points allowed
  196: 'DPA46', // D/ST 46+ points allowed
  197: 'DPAPG', // D/ST Points Allowed Per Game
  198: 'FG50', // FG Made (50-59 yards) (85 point(s) per)
  199: 'FGA50', // FG Attempted (50-59 yards)
  200: 'FGM50', // FG Missed (50-59 yards) (15 point(s) per)
  201: 'FG60', // FG Made (60+ yards) (85 point(s) per)
  202: 'FGA60', // FG Attempted (60+ yards)
  203: 'FGM60', // FG Missed (60+ yards) (15 point(s) per)
  204: 'O2PRET', // Offensive 2pt Return
  205: 'D2PRET', // Defensive 2pt Return
  206: '2PRET', // 2pt Return
  207: 'O1PSF', // Offensive 1pt Safety
  208: 'D1PSF', // Defensive 1pt Safety
  209: '1PSF', // 1pt Safety
  210: 'GP', // Games Played
  10000: 'MISCTD', // TD Misc
  10001: 'RRETD', // Total Rushing and Receiving TD
  '1PSF': 209, // 1pt Safety
  '2PC': 19, // 2pt Passing Conversion (15 point(s) per)
  '2PR': 26, // 2pt Rushing Conversion (10 point(s) per)
  '2PRE': 44, // 2pt Receiving Conversion (2 point(s) per)
  '2PRET': 206, // 2pt Return
  BLKK: 97, // Blocked Punt, PAT or FG (25 point(s) per)
  BLKKRTD: 93, // Blocked Punt or FG return for TD (75 point(s) per)
  CPCT: 21, // Passing Completion Pct
  D1PSF: 208, // Defensive 1pt Safety
  D2PRET: 205, // Defensive 2pt Return
  DEFRETTD: 94, // Fumble or INT Return for TD
  DPA0: 188, // D/ST 0 points allowed
  DPA1: 189, // D/ST 1-6 points allowed
  DPA14: 191, // D/ST 14-17 points allowed
  DPA18: 192, // D/ST 18-21 points allowed
  DPA22: 193, // D/ST 22-27 points allowed
  DPA28: 194, // D/ST 28-34 points allowed
  DPA35: 195, // D/ST 35-45 points allowed
  DPA46: 196, // D/ST 46+ points allowed
  DPA7: 190, // D/ST 7-13 points allowed
  DPAPG: 197, // D/ST Points Allowed Per Game
  DPTSA: 187, // D/ST Points Allowed
  FF: 106, // Each Fumble Forced (25 point(s) per)
  FG: 83, // Total FG Made
  FG0: 80, // FG Made (0-39 yards) (35 point(s) per)
  FG40: 77, // FG Made (40-49 yards) (60 point(s) per)
  FG50: 198, // FG Made (50-59 yards) (85 point(s) per)
  FG50P: 74, // FG Made (50+ yards)
  FG60: 201, // FG Made (60+ yards) (85 point(s) per)
  FGA: 84, // Total FG Attempted
  FGA0: 81, // FG Attempted (0-39 yards)
  FGA40: 78, // FG Attempted (40-49 yards)
  FGA50: 199, // FG Attempted (50-59 yards)
  FGA50P: 75, // FG Attempted (50+ yards)
  FGA60: 202, // FG Attempted (60+ yards)
  FGM: 85, // Total FG Missed
  FGM0: 82, // FG Missed (0-39 yards) (-15 point(s) per)
  FGM40: 79, // FG Missed (40-49 yards)
  FGM50: 200, // FG Missed (50-59 yards) (15 point(s) per)
  FGM50P: 76, // FG Missed (50+ yards)
  FGM60: 203, // FG Missed (60+ yards) (15 point(s) per)
  FR: 96, // Each Fumble Recovered (15 point(s) per)
  FRTD: 104, // Fumble Return TD (75 point(s) per)
  FTD: 63, // Fumble Recovered for TD (50 point(s) per)
  FUM: 68, // Total Fumbles
  FUML: 72, // Total Fumbles Lost (-15 point(s) per)
  GP: 210, // Games Played
  HALFSK: 100, // 1/2 Sack
  INC: 2, // Each Incomplete Pass
  INT: 95, // Each Interception (40 point(s) per)
  INTT: 20, // Interceptions Thrown (-15 point(s) per)
  INTTD: 103, // Interception Return TD (75 point(s) per)
  IP10: 14, // Every 10 pass incompletions
  IP5: 13, // Every 5 pass incompletions
  KR: 114, // Kickoff Return Yards (1 point(s) per)
  KR10: 116, // Every 10 kickoff return yards
  KR25: 117, // Every 25 kickoff return yards
  KRTD: 101, // Kickoff Return TD (75 point(s) per)
  LM1: 167, // 1-4 point Loss Margin
  LM10: 169, // 10-14 point Loss Margin
  LM15: 170, // 15-19 point Loss Margin
  LM20: 171, // 20-24 point Loss Margin
  LM25: 172, // 25+ point Loss Margin
  LM5: 168, // 5-9 point Loss Margin
  MGN: 160, // Margin of Victory
  MGNPG: 173, // Margin of Victory Per Game
  MISCTD: 10000, // TD Misc
  O1PSF: 207, // Offensive 1pt Safety
  O2PRET: 204, // Offensive 2pt Return
  P300: 17, // 300-399 yard passing game (25 point(s) per)
  P400: 18, // 400+ yard passing game (50 point(s) per)
  PA: 0, // Each Pass Attempted
  PA0: 89, // 0 points allowed
  PA1: 90, // 1-6 points allowed
  PA14: 92, // 14-17 points allowed
  PA18: 121, // 18-21 points allowed
  PA22: 122, // 22-27 points allowed
  PA28: 123, // 28-34 points allowed
  PA35: 124, // 35-45 points allowed
  PA46: 125, // 46+ points allowed
  PA7: 91, // 7-13 points allowed
  PAPG: 126, // Points Allowed Per Game
  PAT: 86, // Each PAT Made (30 point(s) per)
  PATA: 87, // Each PAT Attempted
  PATM: 88, // Each PAT Missed (-15 point(s) per)
  PC: 1, // Each Pass Completed (2 point(s) per)
  PC10: 12, // Every 10 pass completions
  PC5: 11, // Every 5 pass completions
  PD: 113, // Passes Defensed (25 point(s) per)
  PFUM: 65, // Passing Fumbles
  PFUML: 69, // Passing Fumbles Lost
  PPG: 159, // Points Scored Per Game
  PR: 115, // Punt Return Yards (1 point(s) per)
  PR10: 118, // Every 10 punt return yards
  PR25: 119, // Every 25 punt return yards
  PRTD: 102, // Punt Return TD (75 point(s) per)
  PT: 138, // Net Punts (10 point(s) per)
  PT10: 140, // Punts Inside the 10 (30 point(s) per)
  PT20: 141, // Punts Inside the 20 (20 point(s) per)
  PTA33: 154, // Punt Average 33.9 or less
  PTA34: 153, // Punt Average 34.0-35.9
  PTA36: 152, // Punt Average 36.0-37.9
  PTA38: 151, // Punt Average 38.0-39.9
  PTA40: 150, // Punt Average 40.0-41.9 (1 point(s) per)
  PTA42: 149, // Punt Average 42.0-43.9 (2 point(s) per)
  PTA44: 148, // Punt Average 44.0+ (3 point(s) per)
  PTAVG: 147, // Punt Average
  PTB: 142, // Blocked Punts (-30 point(s) per)
  PTD: 4, // TD Pass (30 point(s) per)
  PTD0: 175, // 0-9 yd TD pass bonus
  PTD10: 176, // 10-19 yd TD pass bonus
  PTD20: 177, // 20-29 yd TD pass bonus
  PTD30: 178, // 30-39 yd TD pass bonus
  PTD40: 15, // 40+ yard TD pass bonus (10 point(s) per)
  PTD50: 16, // 50+ yard TD pass bonus (15 point(s) per)
  PTFC: 146, // Fair Catches (10 point(s) per)
  PTL: 62, // Total 2pt Conversions
  PTR: 143, // Punts Returned
  PTRY: 144, // Punt Return Yards
  PTS: 158, // Points Scored
  PTSA: 120, // Points Allowed
  PTTB: 145, // Touchbacks (-15 point(s) per)
  PTY: 139, // Punt Yards (0.2 point(s) per)
  PY: 3, // Passing Yards (0.3 point(s) per)
  PY10: 6, // Every 10 passing yards
  PY100: 10, // Every 100 passing yards
  PY20: 7, // Every 20 passing yards
  PY25: 8, // Every 25 passing yards
  PY5: 5, // Every 5 passing yards
  PY50: 9, // Every 50 passing yards
  PYPG: 22, // Passing Yards Per Game
  R100: 32, // Every 100 rushing yards
  RA: 23, // Rushing Attempts
  RA10: 34, // Every 10 rush attempts
  RA5: 33, // Every 5 rush attempts
  RE100: 52, // Every 100 receiving yards
  REC: 53, // Each reception (3 point(s) per)
  REC10: 55, // Every 10 receptions
  REC5: 54, // Every 5 receptions
  RECS: 41, // Receptions
  REFUM: 67, // Receiving Fumbles
  REFUML: 71, // Receiving Fumbles Lost
  RET: 58, // Receiving Target
  RETD: 43, // TD Reception (50 point(s) per)
  RETD0: 183, // 0-9 yd TD rec bonus
  RETD10: 184, // 10-19 yd TD rec bonus
  RETD20: 185, // 20-29 yd TD rec bonus
  RETD30: 186, // 30-39 yd TD rec bonus
  RETD40: 45, // 40+ yard TD rec bonus (10 point(s) per)
  RETD50: 46, // 50+ yard TD rec bonus (15 point(s) per)
  REY: 42, // Receiving Yards (1 point(s) per)
  REY10: 48, // Every 10 receiving yards
  REY100: 56, // 100-199 yard receiving game (40 point(s) per)
  REY20: 49, // Every 20 receiving yards
  REY200: 57, // 200+ yard receiving game (50 point(s) per)
  REY25: 50, // Every 25 receiving yards
  REY5: 47, // Every 5 receiving yards
  REY50: 51, // Every 50 receiving yards
  REYPG: 61, // Receiving Yards Per Game
  RFUM: 66, // Rushing Fumbles
  RFUML: 70, // Rushing Fumbles Lost
  RRETD: 10001, // Total Rushing and Receiving TD
  RTD: 25, // TD Rush (50 point(s) per)
  RTD0: 179, // 0-9 yd TD rush bonus
  RTD10: 180, // 10-19 yd TD rush bonus
  RTD20: 181, // 20-29 yd TD rush bonus
  RTD30: 182, // 30-39 yd TD rush bonus
  RTD40: 35, // 40+ yard TD rush bonus (10 point(s) per)
  RTD50: 36, // 50+ yard TD rush bonus (15 point(s) per)
  RY: 24, // Rushing Yards (1 point(s) per)
  RY10: 28, // Every 10 rushing yards
  RY100: 37, // 100-199 yard rushing game (25 point(s) per)
  RY20: 29, // Every 20 rushing yards
  RY200: 38, // 200+ yard rushing game (50 point(s) per)
  RY25: 30, // Every 25 rushing yards
  RY5: 27, // Every 5 rushing yards
  RY50: 31, // Every 50 rushing yards
  RYPA: 39, // Rushing Yards Per Attempt
  RYPG: 40, // Rushing Yards Per Game
  SF: 98, // Each Safety (50 point(s) per)
  SK: 99, // Each Sack (25 point(s) per)
  SKD: 64, // Sacked (-10 point(s) per)
  STF: 112, // Stuffs (15 point(s) per)
  TIE: 157, // Team Tie
  TK: 109, // Total Tackles
  TK3: 110, // Every 3 Total Tackles
  TK5: 111, // Every 5 Total Tackles
  TKA: 107, // Assisted Tackles (5 point(s) per)
  TKS: 108, // Solo Tackles (25 point(s) per)
  TL: 156, // Team Loss
  TRTD: 105, // Total Return TD
  TT: 73, // Total Turnovers
  TW: 155, // Team Win
  WINPCT: 174, // Winning Pct
  WM1: 166, // 1-4 point Win Margin
  WM10: 164, // 10-14 point Win Margin
  WM15: 163, // 15-19 point Win Margin
  WM20: 162, // 20-24 point Win Margin
  WM25: 161, // 25+ point Win Margin
  WM5: 165, // 5-9 point Win Margin
  YA: 127, // Yards Allowed
  YA100: 128, // Less than 100 total yards allowed
  YA199: 129, // 100-199 total yards allowed
  YA299: 130, // 200-299 total yards allowed
  YA349: 131, // 300-349 total yards allowed
  YA399: 132, // 350-399 total yards allowed
  YA449: 133, // 400-449 total yards allowed
  YA499: 134, // 450-499 total yards allowed
  YA549: 135, // 500-549 total yards allowed
  YA550: 136, // 550+ total yards allowed
  YAC: 59, // Receiving Yards After Catch
  YAPG: 137, // Yards Allowed Per Game
  YPC: 60, // Receiving Yards Per Catch
};

export { statMap };
