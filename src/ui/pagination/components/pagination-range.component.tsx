import React, { useMemo } from 'react';

import { usePaginationContext } from '../context';
import { Pages } from './pages.component';
import { PaginationDots } from './pagination-dots.component';

export const PaginationRange = () => {
  const { pageIndex, pageCount, pages, gotoPage } = usePaginationContext();

  const leftIndexFocus = useMemo(() => {
    if (pageIndex === 0) {
      return 0;
    } else if (pageIndex === pageCount - 1) {
      return pageCount - 3;
    } else {
      return pageIndex - 1;
    }
  }, [pageCount, pageIndex]);

  const [showLeftDots, showRightDots] = useMemo(
    () => [pageIndex > 3, pageIndex + 2 < pageCount - 2],
    [pageIndex, pageCount]
  );

  const [leftPages, middlePages, rightPages] = useMemo(
    () => [
      pages.slice(0, Math.min(leftIndexFocus, 2)),
      pages.slice(leftIndexFocus, leftIndexFocus + 3),
      pages.slice(Math.max(leftIndexFocus + 3, pageCount - 2), pageCount),
    ],
    [leftIndexFocus, pageCount, pages]
  );

  if (pageCount > 5) {
    return (
      <>
        <Pages pageIndex={pageIndex} pages={leftPages} onPageClick={gotoPage} />

        {showLeftDots && <PaginationDots />}

        <Pages
          pageIndex={pageIndex}
          pages={middlePages}
          onPageClick={gotoPage}
        />

        {showRightDots && <PaginationDots />}

        <Pages
          pageIndex={pageIndex}
          pages={rightPages}
          onPageClick={gotoPage}
        />
      </>
    );
  }

  return <Pages pageIndex={pageIndex} pages={pages} onPageClick={gotoPage} />;
};
