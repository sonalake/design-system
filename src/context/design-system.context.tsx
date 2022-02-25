import React, { ReactNode } from 'react';

import { I18n } from '../i18n';
import {
  DEFAULT_FORMATTING,
  Formatting,
  FormattingProvider,
} from './formatting';
import { NotificationsProvider } from './notifications';

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
    <FormattingProvider formatting={formatting}>
      <NotificationsProvider>{children}</NotificationsProvider>
    </FormattingProvider>
  </I18n>
);
