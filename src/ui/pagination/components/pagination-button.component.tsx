import React from 'react';
import clsx from 'clsx';

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
  <button
    type="button"
    disabled={disabled}
    aria-label={label}
    title={label}
    onClick={onClick}
    className={clsx('p-2', { 'bg-neutral-400': isActive })}
  >
    {children}
  </button>
);
