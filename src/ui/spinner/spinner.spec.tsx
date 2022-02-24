import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Spinner } from './spinner.component';

describe('Spinner', () => {
  test('should render', async () => {
    const { container } = render(<Spinner />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
