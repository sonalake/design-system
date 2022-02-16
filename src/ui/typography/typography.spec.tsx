import { TypographyAs, TypographyVariant } from './typography.model';
import { getTypographyVariantComponent } from './typography.util';

describe('Typography', () => {
  describe('Utils', () => {
    const componentTestCases: {
      variant: TypographyVariant;
      component: TypographyAs;
    }[] = [
      { variant: 'body', component: 'p' },
      { variant: 'caption', component: 'p' },
      { variant: 'heading1', component: 'h1' },
      { variant: 'heading2', component: 'h2' },
      { variant: 'heading3', component: 'h3' },
      { variant: 'heading4', component: 'h4' },
      { variant: 'subtitle1', component: 'h5' },
      { variant: 'subtitle2', component: 'h6' },
    ];

    test.each(componentTestCases)(
      'getTypographyVariantComponent should return the correct components',
      ({ variant, component }) =>
        expect(getTypographyVariantComponent(variant)).toBe(component)
    );
  });
});
