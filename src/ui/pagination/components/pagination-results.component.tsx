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
    <Typography className="text-neutral-400 mr-4">{`${
      totalRows === 0 ? 0 : startIndex + 1
    }-${endIndex} of ${totalRows}`}</Typography>
  );
};
