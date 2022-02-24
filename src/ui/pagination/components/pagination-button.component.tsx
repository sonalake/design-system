import React from 'react';
import clsx from 'clsx';

import { Button } from '../../button';

type PaginationButtonProps = {
  label: string;
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export const PaginationButton = ({
  label,
  children,
  isActive,
  disabled,
  onClick,
}: PaginationButtonProps) => (
  <Button
    type="button"
    disabled={disabled}
    aria-label={label}
    title={label}
    onClick={onClick}
    className={clsx('p-2', { 'bg-neutral-400': isActive })}
  >
    {children}
  </Button>
);
