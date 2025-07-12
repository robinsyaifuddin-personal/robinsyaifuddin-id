
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  // Optimasi scroll dengan useCallback
  const scrollToTop = useCallback(() => {
    // Gunakan requestAnimationFrame untuk performa yang lebih baik
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }, []);

  useEffect(() => {
    scrollToTop();
    
    // Preload gambar untuk halaman berikutnya (opsional)
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, [location.pathname, scrollToTop]);

  return (
    <div className="animate-fade-in-up">
      {children}
    </div>
  );
};

export default PageTransition;
