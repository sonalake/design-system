import React from 'react';

import { usePaginationContext } from '../context';

export const PageSizeSelect = () => {
  const {
    pageSize,
    pageSizeOptions = [],
    onPageSizeChange,
  } = usePaginationContext();

  return (
    <div className="mr-4">
      <label htmlFor="pagination" className="text-neutral-400 hidden">
        Rows per page:
      </label>
      <select
        id="pagination"
        value={pageSize}
        onChange={(event) => onPageSizeChange?.(Number(event.target.value))}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
