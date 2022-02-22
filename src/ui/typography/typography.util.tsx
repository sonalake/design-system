import clsx from 'clsx';

import { TypographyProps } from './typography.component';
import { TypographyAs, TypographyVariant } from './typography.model';
import { getTypographyVariantStyles } from './typography.styles';

export const getTypographyVariantComponent = (
  variant?: TypographyVariant
): TypographyAs => {
  switch (variant) {
    case 'body':
    case 'caption':
      return 'p';
    case 'heading1':
      return 'h1';
    case 'heading2':
      return 'h2';
    case 'heading3':
      return 'h3';
    case 'heading4':
      return 'h4';
    case 'subtitle1':
      return 'h5';
    case 'subtitle2':
      return 'h6';
    default:
      return 'span';
  }
};

export const extractProps = <As extends TypographyAs = 'span'>({
  id,
  translationKey,
  values,
  description,
  defaultMessage,
  as,
  variant = 'body',
  className,
  ...props
}: TypographyProps<As>) => [
  {
    'data-testid': translationKey || (props['data-testid'] ?? 'typography'),
    className: clsx(getTypographyVariantStyles(variant), className),
    ...(props as any),
  },
  {
    id: translationKey,
    values,
    description,
    defaultMessage,
  },
];
