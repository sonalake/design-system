import React from 'react';

import { useTableContext } from '../context';
import { getAriaSortDirection } from '../table.util';
import { TableSortIcon } from './table-sort-icon.component';

export const TableHeader = () => {
  const { headerGroups } = useTableContext();

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              {...column.getHeaderProps([
                column.getSortByToggleProps(),
                {
                  className:
                    'text-left text-sm text-mono-700 font-bold px-4 py-3 select-none whitespace-nowrap group',
                },
                {
                  className: column.headerCellClassName,
                },
              ])}
              title={undefined}
              aria-sort={getAriaSortDirection(column)}
            >
              <div className="flex items-center">
                {column.render('Header')}
                {column.canSort && <TableSortIcon column={column} />}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
