import 'module-alias/register';
import 'source-map-support/register';

import libA, { libAWorld } from '@poweredlocal/lib-a';
import libB, { libBWorld, libBA } from '@poweredlocal/lib-b';

import local from './local'; // as we publish this module to NPM we can't use
// module-alias here, but you can do it in your local environment
// see: https://github.com/ilearnio/module-alias/issues/66

// eslint-disable-next-line no-console
console.log(`${libA()} ${libAWorld()}\n`);

// eslint-disable-next-line no-console
console.log(`${libB()} ${libBWorld()}\n${libBA()}\n`);

// eslint-disable-next-line no-console
console.log(local());
