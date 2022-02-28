import { useMemo } from 'react';

const elementIdGenerator = function* () {
  let id = 0;
  while (true) {
    yield ++id;
  }
};

const globalElementId = elementIdGenerator();

/**
 * Create globally unique ids, useful for accessibility
 */
export const useElementId = (id?: string | null) =>
  useMemo(() => (id ? id : `id-${globalElementId.next().value}`), [id]);
