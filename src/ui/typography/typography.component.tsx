import React, { ComponentProps, forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';

import { QueryableComponent } from '../../models';
import {
  FormattedMessageProps,
  TypographyAs,
  TypographyAsProps,
  TypographyVariant,
} from './typography.model';
import { getTypographyVariantStyles } from './typography.styles';
import { getTypographyVariantComponent } from './typography.util';

export type TypographyProps<As extends TypographyAs = 'span'> =
  FormattedMessageProps &
    TypographyAsProps<As> &
    QueryableComponent & {
      as?: As;
      variant?: TypographyVariant;
      className?: string;
    };

export const Typography = <As extends TypographyAs = 'span'>({
  id,
  translationKey,
  values,
  description,
  defaultMessage,
  as,
  variant = 'body',
  className,
  ...props
}: TypographyProps<As>) => {
  const Component = as ?? getTypographyVariantComponent(variant);

  return (
    <FormattedMessage
      id={translationKey}
      values={values}
      description={description}
      defaultMessage={defaultMessage}
    >
      {'children' in props
        ? (...translation) => (
            <>
              {props.children(
                { 'data-testid': translationKey, id },
                ...translation
              )}
            </>
          )
        : (translation) => (
            <Component
              data-testid={
                translationKey || (props['data-testid'] ?? 'typography')
              }
              className={clsx(getTypographyVariantStyles(variant), className)}
              {...(props as any)}
            >
              {translation}
            </Component>
          )}
    </FormattedMessage>
  );
};

export const TypographyWithRef = forwardRef<
  HTMLElement,
  ComponentProps<typeof Typography>
>(
  (
    {
      id,
      translationKey,
      values,
      description,
      defaultMessage,
      as,
      variant = 'body',
      className,
      ...props
    },
    ref
  ) => {
    const Component = as ?? getTypographyVariantComponent(variant);

    return (
      <Component
        ref={ref}
        data-testid={translationKey || (props['data-testid'] ?? 'typography')}
        className={clsx(getTypographyVariantStyles(variant), className)}
        {...(props as any)}
      >
        <FormattedMessage
          id={translationKey}
          values={values}
          description={description}
          defaultMessage={defaultMessage}
        />
      </Component>
    );
  }
);
