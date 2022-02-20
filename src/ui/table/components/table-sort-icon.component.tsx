import React from 'react';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { ColumnInstance } from 'react-table';
import clsx from 'clsx';

export type TableSortIconProps<Data extends object> = {
  column: ColumnInstance<Data>;
};

export const TableSortIcon = <Data extends object>({
  column,
}: TableSortIconProps<Data>) => {
  const className = clsx('ml-2', {
    'text-mono-200 opacity-0 group-hover:opacity-100 transition-opacity':
      !column.isSorted,
  });

  return column.isSortedDesc ? (
    <MdArrowDownward className={className} />
  ) : (
    <MdArrowUpward className={className} />
  );
};
