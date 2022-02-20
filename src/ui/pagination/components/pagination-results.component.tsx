import React from 'react';

import { Typography } from '../../typography';
import { usePaginationContext } from '../context';

export const PaginationResults = () => {
  const { pageSize, pageIndex, totalCount = 0 } = usePaginationContext();

  const pageCount = Math.ceil(totalCount / pageSize);
  const startIndex = pageIndex * pageSize;
  const endIndex =
    pageIndex < pageCount - 1 ? startIndex + pageSize : totalCount;

  return (
    <Typography className="text-neutral-400 mr-4">{`${
      totalCount === 0 ? 0 : startIndex + 1
    }-${endIndex} of ${totalCount}`}</Typography>
  );
};
