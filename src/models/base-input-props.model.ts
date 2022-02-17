import { InputSize } from '.';

export type BaseInputProps = {
  size?: InputSize;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  className?: string;
};
