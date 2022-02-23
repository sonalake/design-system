import React from 'react';

import { Typography } from '../../typography';
import { usePaginationContext } from '../context';

export const PaginationResults = () => {
  const { pageSize, pageIndex, totalRows = 0 } = usePaginationContext();

  const pageCount = Math.ceil(totalRows / pageSize);
  const startIndex = pageIndex * pageSize;
  const endIndex =
    pageIndex < pageCount - 1 ? startIndex + pageSize : totalRows;

  return (
    <Typography
      translationKey="DESIGN_SYSTEM.PAGINATION.RESULTS"
      values={{
        from: totalRows === 0 ? 0 : startIndex + 1,
        to: endIndex,
        total: totalRows,
      }}
      className="text-neutral-400 mr-4"
    />
  );
};
