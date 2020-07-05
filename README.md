Typescript monorepo starter
===========================

Easy way to start a Typescript project with code splitting into different NPM packages. 

#### What's in the box:

- Monorepo setup with Lerna
- Configuration for Typescript projects
- ESLint config for Typescript and Javascript
- Prettier to make code looks good
- Husky make ensure that you never commit code with errors
- Path alias support (so you can include code from `src` with absolute paths)
- Source mapping support for Node JS
- Support for testing with Jest and enforce testing styles with eslint-plugin-jest

#### Getting started:

Just clone this repo, and you are ready to go.

Beside cloning the repo you may test the packages via NPM, for example: `npx @poweredlocal/hello-world`.

#### Useful commands:

- `npm run format` - runs Prettier across all projects, and your code becomes beautiful.
- `npm run check` - runs Typescript and ESLint check of all projects.
- `npm run test` - runs tests using Jest in all projects.

Each package contains building tools. You may run it with Lerna (`lerna run **command**`) in the root dir on in the package itself.

- `npm run check` - checks the project for Typescript errors.
- `npm run build` - build the current project without dependencies.

- `npm run build-dep` - uses Lerna to build the project and all of its dependencies.
- `npm run build-dev` - this config used by an IDE and can be used for building the project with dependencies (it uses Typescript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) to resolve dependencies). 

#### Testing:

A demo of how you can set up tests for the project can be found inside `lib-a`.

#### Typescript config:

Monorepo structure of the project allows us to keep Typescript config it the single package `ts-config`, all other packages just extends
this configuration.
