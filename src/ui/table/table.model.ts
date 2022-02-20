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
      totalCount?: never;
      pageSizeOptions?: never;
      onPageSizeChange?: never;
    }
  | {
      enablePagination: true;
      initialPageSize?: number;
      initialPageIndex?: number;
      /**
       * *Total* rows count.
       */
      totalCount?: number;
      pageSizeOptions?: number[];
    };
