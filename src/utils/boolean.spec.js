const { toBool } = require('./boolean');

describe('toBool', () => {
  const tests = [
    { expected: true, input: true },
    { expected: true, input: 'true' },
    { expected: true, input: 'T' },
    { expected: true, input: 'True' },
    { expected: true, input: '1' },
    { expected: true, input: 1 },

    { expected: false, input: false },
    { expected: false, input: 'false' },
    { expected: false, input: 'F' },
    { expected: false, input: 'False' },
    { expected: false, input: '0' },
    { expected: false, input: 0 },
    { expected: false, input: 'not truthy' },
    { expected: false, input: undefined },
    { expected: false, input: null },
  ];

  tests.forEach(({ expected, input, name }) => {
    test(name || `${input} === ${expected}`, () =>
      expect(toBool(input)).toEqual(expected),
    );
  });
});
