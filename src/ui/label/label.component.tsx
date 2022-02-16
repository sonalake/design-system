import React from 'react';

import { QueryableComponent } from '../../types/index';
import { Typography } from '../index';

type LabelProps = {
  isRequired?: boolean;
  htmlFor?: string;
  className?: string;
} & QueryableComponent;

export const Label: React.FC<LabelProps> = ({
  isRequired,
  htmlFor,
  className,
  children,
  ...props
}) => (
  <Typography
    as="label"
    htmlFor={htmlFor}
    data-testid={props['data-testid']}
    className={className}
  >
    <>
      {children}
      {isRequired && (
        <Typography as="span" className="text-error-100 ml-1">
          *
        </Typography>
      )}
    </>
  </Typography>
);
