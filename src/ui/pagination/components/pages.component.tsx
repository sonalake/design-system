import React from 'react';

import { PaginationButton } from './pagination-button.component';

type PagesProps = {
  pages: number[];
  pageIndex: number;
  onPageClick: (page: number) => void;
};

export const Pages = ({ pages, pageIndex, onPageClick }: PagesProps) => (
  <>
    {pages.map((page) => (
      <PaginationButton
        isActive={pageIndex + 1 === page}
        key={page}
        label={`Page ${page}`}
        onClick={() => onPageClick(page - 1)}
      >
        {page}
      </PaginationButton>
    ))}
  </>
);
