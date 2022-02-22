import React from 'react';

import { QueryableComponent } from '../../models';
import { Typography } from '../typography';

type LabelProps = {
  label: string;
  required?: boolean;
  htmlFor?: string;
  className?: string;
} & QueryableComponent;

export const Label: React.FC<LabelProps> = ({
  label,
  required,
  htmlFor,
  className,
  children,
  ...props
}) => (
  <Typography
    translationKey={label}
    as="label"
    htmlFor={htmlFor}
    data-testid={props['data-testid']}
    className={className}
  >
    {(_, translation) => (
      <>
        {translation}
        {required && <span className="text-error-100 ml-1">*</span>}
      </>
    )}
  </Typography>
);
