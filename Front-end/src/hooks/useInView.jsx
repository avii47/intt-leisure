import { useEffect, useState } from 'react';

const useInView = (options) => {
    const [isInView, setIsInView] = useState(false);
    const [element, setElement] = useState(null);

    useEffect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(element); 
                }
            },
            options
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [element, options]);

    return [setElement, isInView];
};

export default useInView;
