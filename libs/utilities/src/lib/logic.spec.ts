import { canUse } from './logic';

describe('Utilities Tests', () => {

  it('things', () => {
    expect(canUse(null)).toBeFalsy();
    expect(canUse({})).toBeFalsy();
    expect(canUse({id:1})).toBeTruthy();
    expect(canUse(undefined)).toBeFalsy();
    expect(canUse('')).toBeFalsy();
  })
});
