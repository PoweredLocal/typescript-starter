import libBA from './lib-a';

export const libB = (): string => {
  return 'lib-b hello';
};

export const libBWorld = (): string => {
  return 'world';
};

export { libBA };

export default libB;
