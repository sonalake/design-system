import React, { createContext, ReactNode } from 'react';
import {
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
} from 'react-table';

import { useContextFallback } from '../../../hooks';

type ReactTableProps<Data extends object> = {
  page: Row<Data>[];
  rows: Row<Data>[];
  enablePagination?: boolean;
  headerGroups: HeaderGroup<Data>[];
  isLoading?: boolean;
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<Data> | undefined
  ) => TableBodyProps;
  prepareRow: (row: Row<Data>) => void;
};

type TableState = ReactTableProps<any>;

export const TableContext = createContext<TableState | undefined>(undefined);

type TableProviderProps<Data extends object> = ReactTableProps<Data> & {
  children: ReactNode;
};

export const TableProvider = <Data extends object>({
  children,
  ...value
}: TableProviderProps<Data>) => (
  <TableContext.Provider value={value}>{children}</TableContext.Provider>
);

export const useTableContext = () => useContextFallback(TableContext);
