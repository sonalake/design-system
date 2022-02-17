import { toHaveNoViolations } from 'jest-axe';

import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime.js';
import './__mocks__/DOMRect';
import './__mocks__/ResizeObserver';
/**
 * Need to mock above as not included in jest/jsdom
 * see https://github.com/radix-ui/primitives/issues/420#issuecomment-771615182
 */

expect.extend(toHaveNoViolations);
