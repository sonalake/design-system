import React from 'react';
import clsx from 'clsx';

import { PaginationInfo, PaginationNavigation } from './components';
import { PaginationProvider } from './context';
import { PaginationProps } from './pagination.model';

export type PaginationOwnProps<Data extends object> = PaginationProps<Data> & {
  className?: string;
};

export const Pagination = <Data extends object>({
  className,
  ...props
}: PaginationOwnProps<Data>) => (
  <PaginationProvider {...props}>
    <div
      className={clsx('flex items-center justify-between w-full', className)}
    >
      <PaginationInfo />

      <PaginationNavigation />
    </div>
  </PaginationProvider>
);
