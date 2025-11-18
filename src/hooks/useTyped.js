import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const useTyped = (strings, options = {}) => {
  const elRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (elRef.current) {
      typedRef.current = new Typed(elRef.current, {
        strings: strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        ...options
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings]);

  return elRef;
};

