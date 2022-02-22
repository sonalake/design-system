import React, { createContext, ReactNode } from 'react';

import { useContextFallback } from '../../hooks';
import { DEFAULT_FORMATTING } from './formatting.constant';
import { Formatting } from './formatting.model';

export const FormattingContext = createContext<Formatting | undefined>(
  undefined
);

type FormattingProps = { children: ReactNode; formatting?: Formatting };

export const FormattingProvider = ({
  children,
  formatting = DEFAULT_FORMATTING,
}: FormattingProps) => (
  <FormattingContext.Provider value={formatting}>
    {children}
  </FormattingContext.Provider>
);

export const useFormatting = () => useContextFallback(FormattingContext);
