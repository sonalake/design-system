import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';

import { Formatting, FormattingProvider } from '../context';
import { I18n } from '../i18n';

type TestRenderConfig = {
  formatting?: Formatting;
  translations?: Record<string, string>;
};

type DefaultTestProvidersConfig = {
  children: ReactNode;
} & TestRenderConfig;

export const DefaultTestProviders = ({
  children,
  formatting,
  translations,
}: DefaultTestProvidersConfig) => (
  <FormattingProvider formatting={formatting}>
    <I18n language="en" locales={{ en: translations || {} }}>
      {children}
    </I18n>
  </FormattingProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
  config: TestRenderConfig = {}
) => render(<DefaultTestProviders {...config}>{ui}</DefaultTestProviders>);
