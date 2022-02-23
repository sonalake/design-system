import { useCallback, useEffect, useRef, useState } from 'react';

export type UseTimeoutProps = {
  onTimeout: () => void;
  duration: number;
};

export const useTimeout = ({ onTimeout, duration }: UseTimeoutProps) => {
  const [activated, setActivated] = useState(true);
  const timeoutRef = useRef<number | undefined>();

  const stopTimeout = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);

  const startTimeout = useCallback(() => {
    setActivated(true);
  }, []);

  // @ts-ignore
  useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);

      return () => {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);

  return {
    stopTimeout,
    startTimeout,
  };
};
