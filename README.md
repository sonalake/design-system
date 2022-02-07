# Sonalake Design System

This repository contains Sonalake Design System components library.

This project was bootstrapped with [tsdx](https://github.com/formium/tsdx). See its documentation for more details about the available scripts and build tools.

Link to online storybook: [TODO: Add Link]

## Continuous Integration

This project uses [GitHub Actions](https://github.com/features/actions) and [semantic-release](https://github.com/semantic-release/semantic-release) for fully automated version management and package publishing.

Commit messages are used to determine the type of changes in the codebase. See [semantic-release documentation](https://github.com/semantic-release/semantic-release#commit-message-format) for more infromation.

All commit messages must adhere to [Angular Commit Message Conventions](https://github.com/semantic-release/semantic-release#commit-message-format). [commitlint](https://github.com/conventional-changelog/commitlint) is used for enforcing this format as a git hook using [husky](https://github.com/typicode/husky).

The easiest way to write compatible commit messages is to use `yarn commit` instead of `git commit`. This command uses [commitizen](https://github.com/commitizen/cz-cli#using-the-command-line-tool) which is a command-line utility to create commits following the defined commit message convention.

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `**/*.stories.tsx` files.

### Scripts

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

## Styling

This project uses [tailwindcss](https://tailwindcss.com) for styling. See its documentation for more details.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.
