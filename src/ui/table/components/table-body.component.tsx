import React from 'react';

import { useTableContext } from '../context';

export const TableBody = () => {
  const {
    isLoading,
    enablePagination,
    page,
    rows,
    getTableBodyProps,
    prepareRow,
  } = useTableContext();

  const dataSrc = enablePagination ? page : rows;

  return (
    <tbody {...getTableBodyProps()}>
      {!isLoading &&
        dataSrc.map((row) => {
          prepareRow(row);

          return (
            <tr
              {...row.getRowProps()}
              className="bg-white hover:bg-mono-5 transition-colors"
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="p-4 first:rounded-l last:rounded-r"
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
    </tbody>
  );
};
