import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';

import { DesignSystemProvider, Formatting } from '../context';
import { STORYBOOK_LOCALES } from '../i18n/i18n.constant';

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
  <DesignSystemProvider
    formatting={formatting}
    language="en"
    locales={{ en: { ...STORYBOOK_LOCALES, ...translations } || {} }}
  >
    {children}
  </DesignSystemProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
  config: TestRenderConfig = {}
) => render(<DefaultTestProviders {...config}>{ui}</DefaultTestProviders>);
