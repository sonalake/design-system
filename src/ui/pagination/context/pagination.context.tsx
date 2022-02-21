import React, { createContext, ReactNode, useMemo } from 'react';
import { range as _range } from 'lodash';

import { useContextFallback } from '../../../hooks';
import { PaginationProps } from '../pagination.model';

type PaginationState =
  | (PaginationProps<any> & { pageCount: number; pages: number[] })
  | undefined;

export const PaginationContext = createContext<PaginationState | undefined>(
  undefined
);

type PaginationProviderProps<Data extends object> = PaginationProps<Data> & {
  children: ReactNode;
};

export const PaginationProvider = <Data extends object>({
  children,
  pageSize,
  totalRows,
  pageSizeOptions,
  ...props
}: PaginationProviderProps<Data>) => {
  const pageCount = Math.ceil((totalRows ?? 0) / pageSize);

  const value = useMemo(
    () => ({
      pageSize,
      totalRows,
      pageCount,
      pages: totalRows !== undefined ? _range(1, pageCount + 1) : [],
      pageSizeOptions: pageSizeOptions ?? [],
      ...props,
    }),
    [pageCount, pageSize, pageSizeOptions, props, totalRows]
  );

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => useContextFallback(PaginationContext);
