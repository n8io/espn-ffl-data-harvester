import { byAbbrev, pointsByPositionStat } from "./stats";

describe("points are calculated correctly", () => {
  const tests = [
    { expected: 30, input: ["QB", "PTD"] },
    { expected: 1, input: ["RB", "RY"] },
    { expected: 3, input: ["WR", "REC"] },
    { expected: 1, input: ["WR", "REY"] },
    { expected: 13, input: ["TE", "REC"] },
    { expected: 1.5, input: ["TE", "REY"] },
    { expected: 5, input: ["LB", "TKA"] },
    { expected: 25, input: ["LB", "TKS"] },
    { expected: 5, input: ["DB", "TKA"] },
    { expected: 25, input: ["DB", "TKS"] },
    { expected: 25, input: ["DL", "TKA"] },
    { expected: 50, input: ["DL", "TKS"] },
    { expected: 10, input: ["P", "PT"] },
    { expected: 85, input: ["K", "FG50"] },
    { expected: 85, input: ["K", "FG60"] },
    { expected: 15, input: ["K", "FGM60"] },
  ];

  tests.forEach(({ expected, input }) => {
    const [position, stat] = input;

    test(`${
      byAbbrev(stat).description
    } for a ${position} = ${expected}`, () => {
      expect(pointsByPositionStat(...input, 1)).toEqual(expected);
    });
  });
});
