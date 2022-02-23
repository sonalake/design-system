import React, { ReactNode } from 'react';

import { DEFAULT_FORMATTING, Formatting, FormattingProvider } from './context';
import { I18n } from './i18n';

type DesignSystemProviderProps<Locales extends 'en'> = {
  children: ReactNode;
  language: Locales;
  locales: Record<Locales, any>;
  formatting?: Formatting;
};

export const DesignSystemProvider = <Locales extends 'en'>({
  children,
  formatting = DEFAULT_FORMATTING,
  language,
  locales,
}: DesignSystemProviderProps<Locales>) => (
  <I18n language={language} locales={locales}>
    <FormattingProvider formatting={formatting}>{children}</FormattingProvider>
  </I18n>
);
