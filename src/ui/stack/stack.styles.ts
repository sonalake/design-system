import clsx from 'clsx';

import { StackProps } from './stack.component';

export const getStackClasses = ({
  spacing = 2,
  vertical = false,
  wrap = false,
  items = 'stretch',
  justify = 'start',
}: StackProps) =>
  clsx(
    'flex',

    { 'flex-col': vertical, 'flex-wrap': wrap },
    {
      'gap-1': spacing === 1,
      'gap-2': spacing === 2,
      'gap-3': spacing === 3,
      'gap-4': spacing === 4,
      'gap-5': spacing === 5,
      'gap-6': spacing === 6,
      'gap-7': spacing === 7,
      'gap-8': spacing === 8,
      'gap-9': spacing === 9,
    },
    {
      'items-stretch': items === 'stretch',
      'items-start': items === 'start',
      'items-center': items === 'center',
      'items-end': items === 'end',
    },
    {
      'justify-start': justify === 'start',
      'justify-center': justify === 'center',
      'justify-end': justify === 'end',
      'justify-between': justify === 'between',
      'justify-around': justify === 'around',
      'justify-evenly': justify === 'evenly',
    }
  );
