import { FormattedMessage } from 'react-intl';

export type TypographyAs =
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
      As extends TypographyAs
        ? JSX.IntrinsicElements[As]
        : React.ComponentProps<As>,
      'children'
    >
  | {
      children: (
        extraParams: { 'data-testid': string; id?: string },
        ...originalParams: React.ReactNode[]
      ) => React.ReactNode;
    };

export type FormattedMessageProps = Omit<
  React.ComponentProps<typeof FormattedMessage>,
  'children' | 'tagName'
> & {
  translationKey: string;
};
