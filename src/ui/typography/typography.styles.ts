import { TypographyVariant } from './typography.model';

const isHeading = (variant: TypographyVariant) =>
  ['heading1', 'heading2', 'heading3', 'heading4'].includes(variant);

const isBold = (variant: TypographyVariant) =>
  ['subtitle1', 'subtitle2'].includes(variant);

export const getTypographyVariantStyles = (variant: TypographyVariant) => ({
  'tracking-wide': isHeading(variant),
  'font-normal': !isBold(variant),
  'font-bold': isBold(variant),
  'text-4xl': variant === 'heading1',
  'text-3xl': variant === 'heading2',
  'text-2xl': variant === 'heading3',
  'text-xl': variant === 'heading4',
  'text-lg': variant === 'subtitle1',
  'text-md text-neutral-400': variant === 'subtitle2',
  'text-md': variant === 'body',
  'text-sm text-neutral-400': variant === 'caption',
});
