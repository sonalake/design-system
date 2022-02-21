import { ColumnInstance } from 'react-table';

export const getAriaSortDirection = <Data extends object>(
  column: ColumnInstance<Data>
) => {
  if (!column.canSort) {
    return undefined;
  }

  if (column.isSorted) {
    return column.isSortedDesc ? 'descending' : 'ascending';
  }

  return 'none';
};
