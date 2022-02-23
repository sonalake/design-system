import React from 'react';
import { format as formatFns } from 'date-fns';

import { useFormatting } from '../../context';

type DateFormatProps = {
  date: number | string | Date;
  showTime?: boolean;
  altFormat?: string;
};

export const DateFormat = ({ date, showTime, altFormat }: DateFormatProps) => {
  const formatting = useFormatting();
  const format =
    altFormat ?? (showTime ? formatting.dateTime : formatting.date);

  return <>{formatFns(new Date(date), format)}</>;
};
