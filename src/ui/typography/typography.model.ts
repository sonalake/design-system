import { FormattedMessage } from 'react-intl';

import { Button } from './../button';

type AllowedTags =
  | 'strong'
  | 'span'
  | 'div'
  | 'p'
  | 'em'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type AllowedComponents = typeof Button;

export type TypographyAs = AllowedTags | AllowedComponents;

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body'
  | 'caption';

export type TypographyAsProps<As extends TypographyAs = 'span'> =
  | Omit<
      As extends AllowedTags
        ? JSX.IntrinsicElements[As]
        : React.ComponentProps<As>,
      'children'
    >
  | {
      children: (
        extraParams: { id?: string },
        ...originalParams: React.ReactNode[]
      ) => React.ReactNode;
    };

export type FormattedMessageProps = Omit<
  React.ComponentProps<typeof FormattedMessage>,
  'children' | 'tagName'
> & {
  translationKey: string;
};
