import { describe, test, expect } from 'vitest';
import { loadUserData } from './load-user-data';

describe('loadUserDetails', () => {
  test('loads user data as expected', async () => {
    const user = await loadUserData('antfu7');

    expect(user).toMatchSnapshot();
  });

  test('sets coolness level appropriately', async () => {
    const jason = await loadUserData('jlengstorf');
    const anthony = await loadUserData('antfu7');

    expect(jason.coolness).toBe(-1);
    expect(anthony.coolness).toBe(100);
  });

  test('throws an error for nonexistent users', async () => {
    expect(async () => await loadUserData('fakeuser')).rejects.toThrowError(
      'no user found',
    );
  });
});
