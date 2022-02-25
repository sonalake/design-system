import React, { useMemo } from 'react';
import clsx from 'clsx';

import { CheckboxField } from '../checkbox-field';
import { CheckboxGroupItem } from './checkbox-group-model';

export type CheckboxGroupFieldProps = {
  items: CheckboxGroupItem[];
  value: string[];
  className?: string;
  showAllCheckbox?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  onChange: (value: string[]) => void;
};

export const CheckboxGroupField = ({
  value,
  className,
  items,
  showAllCheckbox = false,
  onChange,
  hasError,
  disabled,
}: CheckboxGroupFieldProps) => {
  const [areNoneSelected, areAllSelected] = useMemo(
    () => [
      value.length === 0,
      items.every((item) => value.includes(item.value)),
    ],
    [items, value]
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const itemValue = event.target.value;

    if (value.includes(itemValue)) {
      onChange(value.filter((v) => v !== itemValue));
    } else {
      onChange([...value, itemValue]);
    }
  };

  const handleSelectAll = () => {
    if (areAllSelected) {
      onChange([]);
    } else {
      onChange(items.map((item) => item.value));
    }
  };

  return (
    <div className={clsx('space-y-3', className)}>
      {showAllCheckbox && (
        <CheckboxField
          label="DESIGN_SYSTEM.CHECKBOX.ALL"
          checked={areAllSelected}
          disabled={disabled}
          indeterminate={!(areAllSelected || areNoneSelected)}
          onChange={handleSelectAll}
        />
      )}

      {items.map((item) => (
        <CheckboxField
          key={item.value}
          value={item.value}
          checked={value.includes(item.value)}
          disabled={disabled || item.disabled}
          label={item.label}
          helpText={item.helpText}
          onChange={handleChange}
          hasError={hasError}
        />
      ))}
    </div>
  );
};
