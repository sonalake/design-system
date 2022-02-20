import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import {
  Column,
  SortingRule,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import { Pagination } from '../pagination';
import { TableBody, TableHeader, TableLoader } from './components';
import { TableProvider } from './context';
import { TablePaginationProps, TableState } from './table.model';

export type TableProps<Data extends object> = {
  columns: Column<Data>[];
  data?: Data[];
  disableSortRemove?: boolean;
  initialSortBy?: SortingRule<Data>;
  disableSortBy?: boolean;
  pageSize?: number;
  /**
   * Enable client-side sorting and pagination.
   */
  enableLocalState?: boolean;
  isLoading?: boolean;
  onChange?: (state: TableState<Data>) => void;
} & TablePaginationProps;

export const Table = <Data extends object>({
  columns,
  data = [],
  enableLocalState,
  isLoading,
  disableSortBy,
  disableSortRemove,
  initialSortBy,
  enablePagination,
  initialPageSize = 10,
  initialPageIndex = 0,
  totalCount,
  pageSizeOptions,
  onChange,
}: TableProps<Data>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    gotoPage,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    prepareRow,
    setPageSize,
    state: { sortBy, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      disableMultiSort: true,
      disableSortRemove,
      manualSortBy: !enableLocalState,
      manualPagination: !enableLocalState,
      disableSortBy,
      initialState: {
        sortBy: initialSortBy ? [initialSortBy] : [],
        pageSize: initialPageSize,
        pageIndex: initialPageIndex,
      },
    },
    useSortBy,
    usePagination
  );

  const [showLoading, showPagination] = useMemo(
    () => [isLoading, !isLoading && enablePagination],
    [isLoading, enablePagination]
  );

  const isFirstRenderRef = useRef(true);

  // https://epicreact.dev/the-latest-ref-pattern-in-react/
  const onChangeRef = useRef(onChange);
  useLayoutEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    // onChange is skipped on first render when table state has not changed yet
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
    } else {
      onChangeRef.current?.({ sortBy: sortBy[0], pageIndex, pageSize });
    }
  }, [sortBy, pageIndex, pageSize]);

  useEffect(() => {
    if (initialPageSize !== undefined && initialPageSize !== pageSize) {
      setPageSize(initialPageSize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPageSize]);

  return (
    <div className="space-y-8">
      <table
        {...getTableProps()}
        className="w-full border-separate"
        style={{ borderSpacing: '0 0.25rem' }}
      >
        <TableProvider
          headerGroups={headerGroups}
          page={page}
          rows={rows}
          isLoading={isLoading}
          enablePagination={enablePagination}
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
        >
          <TableHeader />

          <TableBody />
        </TableProvider>
      </table>

      {showLoading && <TableLoader />}

      {showPagination && (
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalCount={totalCount}
          pageSizeOptions={pageSizeOptions}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          previousPage={previousPage}
          gotoPage={gotoPage}
          onPageSizeChange={setPageSize}
        />
      )}
    </div>
  );
};
