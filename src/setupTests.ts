import { toHaveNoViolations } from 'jest-axe';

import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime.js';

expect.extend(toHaveNoViolations);
