import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';

import { Formatting } from '../context';
import { DesignSystemProvider } from '../design-system.context';

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
    locales={{ en: translations || {} }}
  >
    {children}
  </DesignSystemProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
  config: TestRenderConfig = {}
) => render(<DefaultTestProviders {...config}>{ui}</DefaultTestProviders>);
