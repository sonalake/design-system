import React, { forwardRef, ReactNode } from 'react';

import { useElementId } from '../../hooks';
import { Checkbox } from '../checkbox';
import { Label } from '../label';

type CheckboxFieldOwnProps = {
  label: string;
  helpText?: ReactNode;
};

export type CheckboxFieldProps = React.ComponentPropsWithRef<typeof Checkbox> &
  CheckboxFieldOwnProps;

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ label, helpText, id, hasError, disabled, className, ...rest }, ref) => {
    const inputId = useElementId(id);
    const helpTextId = useElementId();

    return (
      <div className={className}>
        <div className="flex items-center">
          <Checkbox
            id={inputId}
            hasError={hasError}
            disabled={disabled}
            ref={ref}
            aria-describedby={helpText ? helpTextId : undefined}
            {...rest}
          />

          <Label
            label={label}
            htmlFor={inputId}
            hasError={hasError}
            isDisabled={disabled}
            className="ml-2"
          />
        </div>

        {helpText && (
          <div className="text-xs text-gray-400 ml-6" id={helpTextId}>
            {helpText}
          </div>
        )}
      </div>
    );
  }
);
