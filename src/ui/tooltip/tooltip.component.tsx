import React, { ReactNode } from 'react';
import {
  Arrow,
  Content,
  Root,
  TooltipContentProps,
  TooltipProps,
  Trigger,
} from '@radix-ui/react-tooltip';
import clsx from 'clsx';

export type TooltipOwnProps = {
  children: ReactNode;
  content: ReactNode;
  side?: TooltipContentProps['side'];
  padding?: 'sm' | 'md';
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: TooltipProps['onOpenChange'];
};

export const Tooltip = ({
  children,
  content,
  side = 'top',
  padding = 'sm',
  open,
  defaultOpen,
  onOpenChange,
}: TooltipOwnProps) => (
  <Root
    open={open}
    defaultOpen={defaultOpen}
    delayDuration={300}
    onOpenChange={onOpenChange}
  >
    <Trigger asChild>{children}</Trigger>
    <Content side={side} sideOffset={6} align="center" asChild>
      <div
        className={clsx('max-w-xs rounded bg-white shadow-lg text-sm', {
          'p-2': padding === 'sm',
          'p-4': padding === 'md',
        })}
      >
        {content}
        <Arrow className="fill-current text-white" width={14} height={8} />
      </div>
    </Content>
  </Root>
);
