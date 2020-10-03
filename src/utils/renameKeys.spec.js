import { renameKeys } from './renameKeys';

describe('renameKeys', () => {
  test('renames props accordingly', () => {
    const input = { before: 1 };
    const expected = { after: 1 };
    const keyMap = { before: 'after' };

    expect(renameKeys(keyMap, input)).toEqual(expected);
  });

  test('does nothing if a prop does not exist', () => {
    const input = { before: 1 };
    const expected = input;
    const keyMap = { abc: 123 };

    expect(renameKeys(keyMap, input)).toEqual(expected);
  });

  test('does nothing with undefined', () =>
    expect(renameKeys({}, undefined)).toEqual(undefined));

  test('does nothing with null', () =>
    expect(renameKeys({}, null)).toEqual(null));

  test('does nothing with function', () => {
    const fn = () => {};

    expect(renameKeys({}, fn)).toEqual(fn);
  });

  test('does nothing with string', () =>
    expect(renameKeys({}, 'string')).toEqual('string'));

  test('does nothing with number', () => expect(renameKeys({}, 0)).toEqual(0));
});
