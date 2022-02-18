export type InputSize = 'md' | 'sm';

export type BaseInputProps = {
  size?: InputSize;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  className?: string;
};
