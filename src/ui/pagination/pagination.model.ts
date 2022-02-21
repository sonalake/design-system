import { UsePaginationInstanceProps } from 'react-table';

import { TablePaginationProps, TableState } from '../table';

type ReactTablePaginationProps<Data extends object> = Pick<
  UsePaginationInstanceProps<Data>,
  'gotoPage' | 'previousPage' | 'canPreviousPage' | 'nextPage' | 'canNextPage'
>;

export type PaginationProps<Data extends object> =
  ReactTablePaginationProps<Data> &
    Pick<TablePaginationProps, 'totalRows' | 'pageSizeOptions'> &
    Omit<TableState<Data>, 'sortBy'> & {
      onPageSizeChange?: (pageSize: number) => void;
    };
