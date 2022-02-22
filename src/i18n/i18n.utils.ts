/**
 * flattenMessages traverse nested messages object and return it
 * as a flat object
 *
 * @example
 * flattenMessages({
 *   A: {
 *     B: {
 *       C: 'TEST'
 *     },
 *     D: 'Hello!'
 *   }
 * }) == {
 *   'A.B.C': 'TEST',
 *   'A.D': 'Hello!',
 * }
 *
 * @remarks
 *
 * flattenMessages use recursion underneath for unwrapping nested objects
 *
 * @param object - nested messages object
 * @param [prefix=''] - prefix that should be prepended to each key in flat object, shouldn't be used by developer
 *
 * @returns flat messages object
 *
 * @private
 */
export const flattenMessages = (
  object: Record<string, any>,
  prefix: string = ''
) =>
  Object.keys(object).reduce((translations: any, key) => {
    const value = object[key];
    const prefixedKey: string = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      translations[prefixedKey] = value;
    } else {
      Object.assign(translations, flattenMessages(value, prefixedKey));
    }
    return translations;
  }, {});
