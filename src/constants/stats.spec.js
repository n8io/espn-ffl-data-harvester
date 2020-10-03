import { byAbbrev, pointsByPositionStat } from './stats';

const runTests = (tests) => {
  tests.forEach(({ expected, input }) => {
    const [position, stat] = input;

    test(`(${stat}) ${
      byAbbrev(stat).description
    } for a ${position} = ${expected}`, () => {
      expect(pointsByPositionStat(...input, 1)).toEqual(expected);
    });
  });
};

describe('points are calculated correctly', () => {
  describe('for passing', () => {
    const tests = [
      { expected: 0.3, input: ['any player', 'PY'] },
      { expected: 2, input: ['any player', 'PC'] },
      { expected: 30, input: ['any player', 'PTD'] },
      { expected: 10, input: ['any player', 'PTD40'] },
      { expected: 15, input: ['any player', 'PTD50'] },
      { expected: -15, input: ['any player', 'INTT'] },
      { expected: 15, input: ['any player', '2PC'] },
      { expected: 25, input: ['any player', 'P300'] },
      { expected: 50, input: ['any player', 'P400'] },
      { expected: -10, input: ['any player', 'SKD'] },
    ];

    runTests(tests);
  });

  describe('for rushing', () => {
    const tests = [
      { expected: 1, input: ['any player', 'RY'] },
      { expected: 50, input: ['any player', 'RTD'] },
      { expected: 10, input: ['any player', 'RTD40'] },
      { expected: 15, input: ['any player', 'RTD50'] },
      { expected: 10, input: ['any player', '2PR'] },
      { expected: 25, input: ['any player', 'RY100'] },
      { expected: 50, input: ['any player', 'RY200'] },
    ];

    runTests(tests);
  });

  describe('for receiving', () => {
    const tests = [
      { expected: 1, input: ['any player', 'REY'] },
      { expected: 3, input: ['any player', 'REC'] },
      { expected: 50, input: ['any player', 'RETD'] },
      { expected: 10, input: ['any player', 'RETD40'] },
      { expected: 15, input: ['any player', 'RETD50'] },
      { expected: 2, input: ['any player', '2PRE'] },
      { expected: 40, input: ['any player', 'REY100'] },
      { expected: 50, input: ['any player', 'REY200'] },
    ];

    runTests(tests);
  });

  describe('for defense', () => {
    const tests = [
      { expected: 25, input: ['any player', 'SK'] },
      { expected: 25, input: ['any player', 'BLKK'] },
      { expected: 40, input: ['any player', 'INT'] },
      { expected: 15, input: ['any player', 'FR'] },
      { expected: 25, input: ['any player', 'FF'] },
      { expected: 50, input: ['any player', 'SF'] },
      { expected: 5, input: ['any player', 'TKA'] },
      { expected: 25, input: ['any player', 'TKS'] },
      { expected: 15, input: ['any player', 'STF'] },
      { expected: 25, input: ['any player', 'PD'] },
    ];

    runTests(tests);
  });

  describe('for punting', () => {
    const tests = [
      { expected: 10, input: ['any player', 'PT'] },
      { expected: 0.2, input: ['any player', 'PTY'] },
      { expected: 30, input: ['any player', 'PT10'] },
      { expected: 20, input: ['any player', 'PT20'] },
      { expected: -30, input: ['any player', 'PTB'] },
      { expected: -15, input: ['any player', 'PTTB'] },
      { expected: 10, input: ['any player', 'PTFC'] },
      { expected: 3, input: ['any player', 'PTA44'] },
      { expected: 2, input: ['any player', 'PTA42'] },
      { expected: 1, input: ['any player', 'PTA40'] },
    ];

    runTests(tests);
  });

  describe('for kicking', () => {
    const tests = [
      { expected: 30, input: ['any player', 'PAT'] },
      { expected: -15, input: ['any player', 'PATM'] },
      { expected: 35, input: ['any player', 'FG0'] },
      { expected: 60, input: ['any player', 'FG40'] },
      { expected: -15, input: ['any player', 'FGM0'] },
      { expected: 15, input: ['any player', 'FGM50'] },
      { expected: 85, input: ['any player', 'FG50'] },
      { expected: 85, input: ['any player', 'FG60'] },
      { expected: 15, input: ['any player', 'FGM60'] },
    ];

    runTests(tests);
  });

  describe('for miscellaneous', () => {
    const tests = [
      // Miscellaneous
      { expected: 1, input: ['any player', 'KR'] },
      { expected: 1, input: ['any player', 'PR'] },
      { expected: 75, input: ['any player', 'KRTD'] },
      { expected: 75, input: ['any player', 'PRTD'] },
      { expected: 50, input: ['any player', 'FTD'] },
      { expected: -15, input: ['any player', 'FUML'] },
      { expected: 75, input: ['any player', 'INTTD'] },
      { expected: 75, input: ['any player', 'FRTD'] },
      { expected: 75, input: ['any player', 'BLKKRTD'] },
    ];

    runTests(tests);
  });

  describe('for adjustments', () => {
    const tests = [
      { expected: 13, input: ['TE', 'REC'] },
      { expected: 1.5, input: ['TE', 'REY'] },
      { expected: 25, input: ['DL', 'TKA'] },
      { expected: 50, input: ['DL', 'TKS'] },
      { expected: 75, input: ['any player', 'D2PRET'] },
    ];

    runTests(tests);
  });
});
