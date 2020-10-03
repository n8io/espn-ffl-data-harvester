import { byAbbrev } from './stats';
import { pointsById } from './scoring';

describe('scoring', () => {
  test('pointsById', () => {
    const { id } = byAbbrev('PTD'); // Passing TD

    expect(pointsById(id)).toEqual(30);
  });
});
