type StackSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type StackAlign = 'start' | 'end' | 'center' | 'stretch';
type StackJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type BaseStackClasses = {
  vertical?: boolean;
  wrap?: boolean;
  spacing?: StackSpacing;
  items?: StackAlign;
  justify?: StackJustify;
  className?: string;
};
