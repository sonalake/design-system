import React from 'react';

import { Spinner } from '../../spinner';
import { Stack } from '../../stack';

export const TableLoader = () => (
  <Stack justify="center" className="my-4">
    <Spinner />
  </Stack>
);
