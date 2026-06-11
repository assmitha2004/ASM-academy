import { useEffect } from 'react';

const useLockBody = (locked = false) => {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
};

export default useLockBody;