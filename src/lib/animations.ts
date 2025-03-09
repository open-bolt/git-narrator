
import { useEffect, useState } from "react";

export const useInView = (threshold = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );
    
    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return [setRef, isInView] as const;
};

export const useScrollAnimation = (animationClass: string, threshold = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, animationClass, threshold]);

  return setRef;
};
