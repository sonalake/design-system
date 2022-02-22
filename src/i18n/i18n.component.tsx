import React from 'react';
import { IntlProvider } from 'react-intl';

import { AVAILABLE_LOCALES } from './i18n.constant';
import { flattenMessages } from './i18n.utils';

type I18nProps<Locales extends 'en'> = {
  /**
   * language which should be used in this context
   *
   * @defaultValue en
   */
  language: Locales;
  locales: Record<Locales, any>;
  children?: React.ReactNode;
};

export const I18n = <Locales extends 'en'>({
  language,
  locales,
  children,
}: I18nProps<Locales>) => {
  const supportedLanguages = Object.keys(locales);
  const currentLocale = supportedLanguages.some((l) => l === language)
    ? language
    : ('en' as Locales);

  const mergedMessages =
    currentLocale in AVAILABLE_LOCALES
      ? {
          ...AVAILABLE_LOCALES[currentLocale],
          ...locales[currentLocale],
        }
      : locales[currentLocale];

  return (
    <IntlProvider
      locale={currentLocale}
      messages={flattenMessages(mergedMessages)}
      defaultLocale={currentLocale}
    >
      {children}
    </IntlProvider>
  );
};
