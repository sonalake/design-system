import React from 'react';
import { isEmpty as _isEmpty } from 'lodash';

import { usePaginationContext } from '../context';
import { PageSizeSelect } from './page-size-select.component';
import { PaginationResults } from './pagination-results.component';

export const PaginationInfo = () => {
  const { pageSizeOptions, totalCount } = usePaginationContext();

  return (
    <div className="flex">
      {totalCount !== undefined && <PaginationResults />}

      {!_isEmpty(pageSizeOptions) && <PageSizeSelect />}
    </div>
  );
};
