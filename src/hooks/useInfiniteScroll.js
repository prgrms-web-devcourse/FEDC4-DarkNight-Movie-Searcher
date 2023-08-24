import { useCallback, useEffect, useRef } from 'react';

export default function useInfiniteScroll({ handleChange, threshold }) {
  const observeRef = useRef(null);

  const handleIntersect = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        handleChange();
      }
    },
    [handleChange]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: threshold,
    });

    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    return () => {
      if (observeRef.current) {
        observer.unobserve(observeRef.current);
      }
    };
  }, [handleIntersect, threshold]);

  return observeRef;
}
