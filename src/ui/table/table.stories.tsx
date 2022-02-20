import React from 'react';
import { Column, SortingRule } from 'react-table';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { range as _range } from 'lodash';

import { Table } from './table.component';

const meta: ComponentMeta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-screen-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const initialSortBy: SortingRule<User> = { id: 'createdTimestamp', desc: true };

const pageSize = 10;

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

const users: User[] = _range(0, 100).map((id) => ({
  id: String(id),
  firstName: `John_${id}`,
  lastName: `Doe_${id}`,
  email: `john_${id}_doe_${id}@email.com`,
}));

const columns: Column<User>[] = [
  {
    Header: 'First name',
    accessor: 'firstName',
  },
  {
    Header: 'Last name',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    accessor: 'email',
    Cell: ({ cell: { value: email } }) => (
      <a href={`mailto:${email}`} className="hover:underline">
        {email}
      </a>
    ),
  },
];

export const Default = () => (
  <Table
    data={users}
    columns={columns}
    enableLocalState
    onChange={action('onChange')}
  />
);

export const SortedByDefault = () => (
  <Table
    data={users}
    columns={columns}
    enableLocalState
    initialSortBy={initialSortBy}
    onChange={action('onChange')}
  />
);

export const WithPagination = () => (
  <Table
    data={users}
    columns={columns}
    enableLocalState
    enablePagination
    initialPageSize={pageSize}
    onChange={action('onChange')}
    totalCount={users.length}
    pageSizeOptions={[5, 10, 25, 50]}
  />
);

export const Loading = () => (
  <Table columns={columns} enableLocalState isLoading={true} />
);
