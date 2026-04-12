import { useEffect } from 'react';

const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    const {
      threshold = 0.12,
      rootMargin = '0px 0px -10% 0px',
      stagger = 70,
      once = true,
    } = options;

    const revealElements = document.querySelectorAll(selector);

    if (!revealElements.length) {
      return undefined;
    }

    revealElements.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${index * stagger}ms`);
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (once) {
            revealObserver.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold,
      rootMargin,
    });

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, [selector, options]);
};

export default useScrollReveal;
