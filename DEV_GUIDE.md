# SDS Development Guide

This is a guide for developers on how to contribute to the Sonalake Design System. This is meant to act as a guideline and not as a strict "must-have".

**Table of Contents**

- [Prerequisites](#prerequisites)
- [Folder and File Conventions](#folder-and-file-conventions)
- [Comments](#comments)
- [Linting](#linting)
- [Formatting](#formatting)
- [Considerations](#considerations)

## Prerequisites

Before contributing to the SDS it would be worth while to familiarise yourself with [TailwindCSS](https://tailwindcss.com/).

## Folder and File Conventions

We have a number of directories already in place to house specific parts of the design system that we want to be made available through package management.

```
- src
    - context // react context providers
    - hooks // react hooks
    - i18n // internationalisation
    - models // shared models - (types, interfaces, classes)
    - ui // react components
```

**Conventional File Naming**

_`{description}.{context}.{extension}`_

File names should be `lowercase` and `kebab-case`.

We currently have a number of contexts in use in the **SDS**:

```
foo-bar.component.tsx
foo-bar.spec.tsx
foo-bar.stories.tsx
foo-bar.context.tsx
foo-bar.utils.ts
foo-bar.model.ts
foo-bar.styles.ts
foo-bar.hook.ts
```

**Be as specific as possible with your description.**

_The description should be a representation of the UI or a piece of code in the project._

## Linting

[Es-lint](https://eslint.org) is used for linting. Eslint config can be found in `.eslintrc` file.

## Formatting

Some rules listed below are provided with comment **default value**. Presence of such comment means that the rule has the same value in **prettier** by default and is not listed in a config. It is added here for general information about code styling.

List of rules:

```
printWidth: 80  // default value
tabWidth: 2  // default value
useTabs: true  // default value
semi: true   // default value
singleQuote: true,
jsxSingleQuote: false   // default value
arrowParens: "always"  // default value
trailingComma: "es5"   // default value
bracketSpacing: true   // default value
jsxBracketSameLine: false   // default value
```

Meaning of the rules can be checked in [documentation](https://prettier.io/docs/en/options.html)

## Considerations

- No ending semicolons.
- No single line if statements.
- No nested ternary operators.
- No trailing commas.
- All types, interfaces and classes should be stored in `.model` files.
- Enums should be stored in `.enum` files.
- Separate Concerns and apply component decomposition where appropriate.
- One Component per file.
- Extract constants from component files.
- Create stories and tests for all ui components
- Keep all exports in alphabetical order
- Keep all translation keys in alphabetical order
