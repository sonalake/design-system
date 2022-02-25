import React, { forwardRef } from 'react';
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

export type TypographyRefModel = <As extends TypographyAs = 'span'>(
  props: TypographyProps<As>,
  ref?: React.Ref<As>
) => React.ReactElement | null;

const TypographyRef: TypographyRefModel = (props, ref) => {
  const { as, id, variant } = props;
  const Component = as ?? getTypographyVariantComponent(variant);
  const [componentProps, translationProps] = extractProps(props);

  if ('children' in props) {
    return (
      <FormattedMessage {...translationProps}>
        {(...translation) => (
          <Component {...componentProps} {...ref}>
            {props.children({ id }, ...translation)}
          </Component>
        )}
      </FormattedMessage>
    );
  }

  return (
    <Component {...componentProps} {...ref}>
      <FormattedMessage {...translationProps} />
    </Component>
  );
};

export const Typography = forwardRef(TypographyRef) as TypographyRefModel;
