const path = require('path');

module.exports = {
  root: true,
  plugins: ['prettier', '@typescript-eslint', 'import', 'jest'],
  overrides: [
    {
      files: '*.js',
      extends: ['eslint-config-airbnb/base', 'prettier']
    },
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          './services/*/tsconfig.build.json',
          './libs/*/tsconfig.build.json'
        ]
      },
      settings: {
        'import/external-module-folders': [
          './node_modules',
          './node_modules/@types'
        ],
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
            moduleDirectory: [
              'node_modules',
              'node_modules/@types',
              path.resolve(path.join(__dirname, 'node_modules')),
              path.resolve(path.join(__dirname, 'node_modules', '@types')),
              'src'
            ]
          }
        }
      },
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
        'prettier'
      ],
      rules: {
        'no-param-reassign': 'off'
      }
    }
  ]
};
