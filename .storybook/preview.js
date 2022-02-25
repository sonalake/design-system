import '../src/style.css';
import { DefaultTestProviders } from '../src/utils';

import { addParameters } from '@storybook/client-api';

addParameters({
  actions: { argTypesRegex: '^on.*' },
  viewMode: 'docs',
});

export const decorators = [
  (Story) => (
    <DefaultTestProviders>
      <Story />
    </DefaultTestProviders>
  ),
];
