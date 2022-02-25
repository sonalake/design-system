import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './typography.component';
import { TypographyVariant } from './typography.model';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const typographyEntries: [string, string][] = [
  ['heading1', 'STORY_BOOK.HEADING_ONE'],
  ['heading2', 'STORY_BOOK.HEADING_TWO'],
  ['heading3', 'STORY_BOOK.HEADING_THREE'],
  ['heading4', 'STORY_BOOK.HEADING_FOUR'],
  ['subtitle1', 'STORY_BOOK.SUBTITLE_ONE'],
  ['subtitle2', 'STORY_BOOK.SUBTITLE_TWO'],
  ['body', 'STORY_BOOK.BODY'],
  ['caption', 'STORY_BOOK.CAPTION'],
];

export const Default: ComponentStory<typeof Typography> = () => (
  <ul className="mt-2">
    {typographyEntries.map(([variant, title]) => (
      <li key={variant} className="py-2 flex items-center">
        <Typography
          variant={variant as TypographyVariant}
          translationKey={title}
        />
      </li>
    ))}
  </ul>
);

export const Custom: ComponentStory<typeof Typography> = () => (
  <Typography
    as="div"
    variant="heading1"
    className="text-success-100"
    translationKey="STORY_BOOK.CUSTOM_TYPOGRAPHY"
  />
);
