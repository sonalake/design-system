import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './typography.component';
import { TypographyVariant } from './typography.model';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const typographyEntries = [
  ['heading1', 'Heading One'],
  ['heading2', 'Heading Two'],
  ['heading3', 'Heading Three'],
  ['heading4', 'Heading Four'],
  ['subtitle1', 'Subtitle One'],
  ['subtitle2', 'Subtitle Two'],
  ['body', 'Body'],
  ['caption', 'Caption'],
];

export const Default: ComponentStory<typeof Typography> = () => (
  <ul className="mt-2">
    {typographyEntries.map(([variant, title]) => (
      <li className="py-2 flex items-center">
        <Typography variant={variant as TypographyVariant}>{title}</Typography>
      </li>
    ))}
  </ul>
);

export const Custom: ComponentStory<typeof Typography> = () => (
  <Typography as="div" variant="heading1" className="text-success-100">
    Custom Element
  </Typography>
);
