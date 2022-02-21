import { SortingRule } from 'react-table';

export type TableState<Data extends object> = {
  pageSize: number;
  pageIndex: number;
  sortBy?: SortingRule<Data>;
};

export type TablePaginationProps =
  | {
      enablePagination?: false;
      initialPageSize?: never;
      initialPageIndex?: never;
      totalRows?: never;
      pageSizeOptions?: never;
      onPageSizeChange?: never;
    }
  | {
      enablePagination: true;
      initialPageSize?: number;
      initialPageIndex?: number;
      totalRows?: number;
      pageSizeOptions?: number[];
    };
