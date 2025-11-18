import { useEffect, useRef } from 'react';

export const useSkillsAnimation = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width') || bar.getAttribute('aria-valuenow');
              if (width) {
                bar.style.width = width + '%';
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return skillsRef;
};

