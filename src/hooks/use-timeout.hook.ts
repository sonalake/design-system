import { useEffect, useRef } from 'react';

export type UseTimeoutProps = {
  duration: number;
  onTimeout: () => void;
};

export const useTimeout = ({ onTimeout, duration }: UseTimeoutProps) => {
  const savedCallback = useRef(onTimeout);

  useEffect(() => {
    savedCallback.current = onTimeout;
  }, [onTimeout]);

  useEffect(() => {
    const id = window.setTimeout(() => savedCallback.current(), duration);

    return () => window.clearTimeout(id);
  }, [duration]);
};
