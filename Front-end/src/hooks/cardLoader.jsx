import { useEffect } from 'react';

const useIntersectionObserver = (elementsRef, classToAdd = 'visible', delay = 200, options = { threshold: 0.5 }) => {
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            
            entry.target.classList.add(classToAdd); 
          }, index * delay);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = elementsRef.current;
    if (elements && elements.length > 0) {
      elements.forEach(el => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      if (elements && elements.length > 0) {
        elements.forEach(el => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, [elementsRef, classToAdd, delay, options]);
};

export default useIntersectionObserver;
