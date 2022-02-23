import * as en from './locales/en.json';
import * as pl from './locales/pl.json';
import * as storybook from './locales/storybook.json';

export const AVAILABLE_LOCALES = {
  en: (en as any).default || en,
  pl: (pl as any).default || pl,
};

export const STORYBOOK_LOCALES = (storybook as any).default || storybook;
