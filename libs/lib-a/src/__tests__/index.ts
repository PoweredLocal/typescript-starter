import libA, { libAWorld } from '../index';

describe('lib A tests', () => {
  it('libA should be equal libA', () => {
    expect.assertions(1);
    expect(libA()).toBe('lib-a hello');
  });

  it('lib A world should be equal world', () => {
    expect.assertions(1);
    expect(libAWorld()).toBe('world');
  });
});
