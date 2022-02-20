import React from 'react';
import { Column } from 'react-table';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Table } from './table.component';
import { User } from './table.stories';

const columns: Column<Pick<User, 'firstName' | 'lastName'>>[] = [
  {
    Header: 'First name',
    accessor: 'firstName',
  },
  {
    Header: 'Last name',
    accessor: 'lastName',
    disableSortBy: true,
  },
];

const data = [
  {
    firstName: 'John',
    lastName: 'Doe',
  },
];

describe('Table', () => {
  test('does not call onChange after the initial render', async () => {
    const onChange = jest.fn();
    render(<Table columns={columns} data={data} onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
  });

  test('calls onChange if the internal state of the table has been changed', async () => {
    const onChange = jest.fn();
    render(<Table columns={columns} data={data} onChange={onChange} />);

    userEvent.click(screen.getByRole('columnheader', { name: 'First name' }));

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        sortBy: { id: 'firstName', desc: false },
      })
    );
  });

  test('allows the user to sort data by clicking on the column headers', async () => {
    render(<Table columns={columns} data={data} />);

    userEvent.click(screen.getByRole('columnheader', { name: 'First name' }));

    expect(
      screen.getByRole('columnheader', { name: 'First name' })
    ).toHaveAttribute('aria-sort', 'ascending');

    userEvent.click(screen.getByRole('columnheader', { name: 'First name' }));

    expect(
      screen.getByRole('columnheader', { name: 'First name' })
    ).toHaveAttribute('aria-sort', 'descending');
  });

  test('uses initialSortBy for the initially sorted column', async () => {
    render(
      <Table
        columns={columns}
        data={data}
        initialSortBy={{ id: 'firstName', desc: true }}
      />
    );

    expect(
      screen.getByRole('columnheader', { name: 'First name' })
    ).toHaveAttribute('aria-sort', 'descending');
  });

  test('shows pagination controls if pagination is enabled', async () => {
    render(
      <Table
        columns={columns}
        data={data}
        enablePagination
        pageSize={10}
        totalCount={12}
        pageSizeOptions={[5, 10, 15]}
      />
    );

    expect(
      screen.getByRole('navigation', { name: 'Pagination' })
    ).toBeInTheDocument();
  });

  test('does not show pagination controls if pagination is not enabled', async () => {
    render(<Table columns={columns} data={data} />);

    expect(
      screen.queryByRole('navigation', { name: 'Pagination' })
    ).not.toBeInTheDocument();
  });

  test('does not show pagination controls if table is in loading state', async () => {
    render(
      <Table
        columns={columns}
        data={data}
        enablePagination
        pageSize={10}
        totalCount={12}
        isLoading={true}
      />
    );

    expect(
      screen.queryByRole('navigation', { name: 'Pagination' })
    ).not.toBeInTheDocument();
  });
});
