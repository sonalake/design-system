import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Pagination } from './pagination.component';

const meta: ComponentMeta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
};

export default meta;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [pageIndex, setPageIndex] = useState(args.pageIndex);
  const pageCount = Math.ceil((args.totalRows ?? 0) / args.pageSize);

  const previousPage = () => setPageIndex(pageIndex - 1);
  const nextPage = () => setPageIndex(pageIndex + 1);

  useEffect(() => {
    setPageIndex(args.pageIndex);
  }, [args.pageIndex]);

  return (
    <Pagination
      {...args}
      pageIndex={pageIndex}
      gotoPage={setPageIndex}
      previousPage={previousPage}
      canPreviousPage={pageIndex > 0}
      nextPage={nextPage}
      canNextPage={pageIndex < pageCount - 1}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  pageIndex: 0,
  pageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
  totalRows: 1000,
};
