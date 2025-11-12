import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Move focus to main content region for accessibility
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.focus();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
