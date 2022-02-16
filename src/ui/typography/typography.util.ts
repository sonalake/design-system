import { TypographyAs, TypographyVariant } from './typography.model';

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
