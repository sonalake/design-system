import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { usePaginationContext } from '../context';
import { PaginationButton } from './pagination-button.component';
import { PaginationRange } from './pagination-range.component';

export const PaginationNavigation = () => {
  const { previousPage, nextPage, canPreviousPage, canNextPage } =
    usePaginationContext();

  return (
    <nav className="flex items-center space-x-2" aria-label="Pagination">
      <PaginationButton
        label="Next"
        disabled={!canPreviousPage}
        onClick={previousPage}
      >
        <MdChevronLeft />
      </PaginationButton>

      <PaginationRange />

      <PaginationButton label="Prev" disabled={!canNextPage} onClick={nextPage}>
        <MdChevronRight />
      </PaginationButton>
    </nav>
  );
};
