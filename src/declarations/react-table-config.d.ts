export interface CustomColumnOptions {
  headerCellClassName?: string;
}

declare module 'react-table' {
  // source:  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table

  export interface TableOptions<D extends object>
    extends UseFiltersOptions<D>,
      UseGlobalFiltersOptions<D>,
      UsePaginationOptions<D>,
      UseSortByOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface Hooks<D extends object = {}> extends UseSortByHooks<D> {}

  export interface TableInstance<D extends object = {}>
    extends UseFiltersInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseFiltersState<D>,
      UseGlobalFiltersState<D>,
      UsePaginationState<D>,
      UseSortByState<D> {}

  export interface ColumnInterface<D extends object = {}>
    extends UseFiltersColumnOptions<D>,
      UseGlobalFiltersColumnOptions<D>,
      UseSortByColumnOptions<D>,
      CustomColumnOptions {}

  export interface ColumnInstance<D extends object = {}>
    extends UseFiltersColumnProps<D>,
      UseSortByColumnProps<D> {}
}
