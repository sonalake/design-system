import '../src/style.css';
import { DefaultTestProviders } from '../src/utils';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  viewMode: 'docs',
};

export const decorators = [
  (Story) => (
    <DefaultTestProviders>
      <Story />
    </DefaultTestProviders>
  ),
];
