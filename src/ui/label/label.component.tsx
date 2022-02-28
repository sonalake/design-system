import React from 'react';
import clsx from 'clsx';

import { QueryableComponent } from '../../models';
import { Typography } from '../typography';

type LabelProps = {
  label: string;
  hasError?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  htmlFor?: string;
  className?: string;
} & QueryableComponent;

export const Label: React.FC<LabelProps> = ({
  label,
  hasError,
  required,
  isDisabled,
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
    className={clsx(
      { 'text-error-100': hasError, 'text-neutral-200': isDisabled },
      className
    )}
  >
    {(_, translation) => (
      <>
        {translation}
        {required && <span className="text-error-100 ml-1">*</span>}
      </>
    )}
  </Typography>
);
