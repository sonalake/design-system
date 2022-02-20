import React from 'react';
import { render, screen } from '@testing-library/react';

import { Pagination, PaginationOwnProps } from './pagination.component';

const props: PaginationOwnProps<any> = {
  pageIndex: 0,
  pageSize: 10,
  totalCount: 100,
  canPreviousPage: true,
  canNextPage: true,
  previousPage: () => {},
  nextPage: () => {},
  gotoPage: () => {},
};

describe('Pagination', () => {
  type PaginationTestCases = {
    description: string;
    props: PaginationOwnProps<any>;
    labels: string[];
  };

  const testCases: PaginationTestCases[] = [
    {
      description: 'display first three and last two pages',
      props: { ...props },
      labels: [
        'Prev',
        'Page 1',
        'Page 2',
        'Page 3',
        'Page 9',
        'Page 10',
        'Next',
      ],
    },
    {
      description:
        'display first two and last two pages when on the fifth page',
      props: { ...props, pageIndex: 4 },
      labels: [
        'Prev',
        'Page 1',
        'Page 2',
        'Page 4',
        'Page 5',
        'Page 6',
        'Page 9',
        'Page 10',
        'Next',
      ],
    },
    {
      description: 'displays all the last pages when four pages left',
      props: { ...props, pageIndex: 6 },
      labels: [
        'Prev',
        'Page 1',
        'Page 2',
        'Page 6',
        'Page 7',
        'Page 8',
        'Page 9',
        'Page 10',
        'Next',
      ],
    },
    {
      description: 'when pages count is not greater than 5, displays all pages',
      props: { ...props, totalCount: 50 },
      labels: [
        'Prev',
        'Page 1',
        'Page 2',
        'Page 3',
        'Page 4',
        'Page 5',
        'Next',
      ],
    },
  ];

  test('displays number of results', async () => {
    const { rerender } = render(<Pagination {...props} totalCount={0} />);

    expect(screen.getByText('0-0 of 0')).toBeInTheDocument();

    rerender(<Pagination {...props} totalCount={1000} />);

    expect(screen.getByText('1-10 of 1000')).toBeInTheDocument();

    rerender(<Pagination {...props} totalCount={undefined} />);

    expect(screen.queryByText('0-0 of 0')).not.toBeInTheDocument();
  });

  test.each(testCases)('%s', async (testCase) => {
    const { props, labels } = testCase;
    render(<Pagination {...props} />);

    expect(screen.getAllByRole('button')).toHaveLength(labels.length);

    for (const label of labels) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    }
  });
});
