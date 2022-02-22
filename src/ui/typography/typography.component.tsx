import React, { ComponentProps, forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';

import { QueryableComponent } from '../../models';
import {
  FormattedMessageProps,
  TypographyAs,
  TypographyAsProps,
  TypographyVariant,
} from './typography.model';
import { extractProps, getTypographyVariantComponent } from './typography.util';

export type TypographyProps<As extends TypographyAs = 'span'> =
  FormattedMessageProps &
    TypographyAsProps<As> &
    QueryableComponent & {
      as?: As;
      variant?: TypographyVariant;
      className?: string;
    };

export const Typography = <As extends TypographyAs = 'span'>(
  props: TypographyProps<As>
) => {
  const { as, variant, id } = props;
  const Component = as ?? getTypographyVariantComponent(variant);
  const [componentProps, translationProps] = extractProps(props);

  if ('children' in props) {
    return (
      <FormattedMessage {...translationProps}>
        {(...translation) => (
          <Component {...componentProps}>
            {props.children({ id }, ...translation)}
          </Component>
        )}
      </FormattedMessage>
    );
  }

  return (
    <Component {...componentProps}>
      <FormattedMessage {...translationProps} />
    </Component>
  );
};

export const TypographyWithRef = forwardRef<
  HTMLElement,
  ComponentProps<typeof Typography>
>((props, ref) => {
  const { as, variant } = props;
  const Component = as ?? getTypographyVariantComponent(variant);
  const [componentProps, translationProps] = extractProps(props);

  return (
    <Component {...componentProps} {...ref}>
      <FormattedMessage {...translationProps} />
    </Component>
  );
});
