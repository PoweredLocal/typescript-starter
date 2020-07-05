import libA, { libAWorld } from '@poweredlocal/lib-a';

const libBA = (): string => {
  return `libBA ${libA()} ${libAWorld()}`;
};

export default libBA;
