import React from 'react';

import { QueryableComponent } from '../../models';

type LabelProps = {
  required?: boolean;
  htmlFor?: string;
  className?: string;
} & QueryableComponent;

export const Label: React.FC<LabelProps> = ({
  required,
  htmlFor,
  className,
  children,
  ...props
}) => (
  <label
    htmlFor={htmlFor}
    data-testid={props['data-testid']}
    className={className}
  >
    <>
      {children}
      {required && <span className="text-error-100 ml-1">*</span>}
    </>
  </label>
);
