
import { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    setIsLoaded(false);
    scrollToTop();
    
    // Trigger animasi 3D setelah komponen mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Mouse tracking untuk efek parallax 3D
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Preload gambar untuk halaman berikutnya (opsional)
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png';
    document.head.appendChild(link);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.head.removeChild(link);
    };
  }, [location.pathname, scrollToTop]);

  return (
    <div className="relative">
      {/* Animated 3D Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `
                translate3d(${mousePosition.x * (20 + i * 5)}px, ${mousePosition.y * (20 + i * 5)}px, 0)
                rotateX(${mousePosition.y * 10}deg)
                rotateY(${mousePosition.x * 10}deg)
                scale(${0.5 + Math.random() * 0.5})
              `,
              transitionDelay: `${i * 0.1}s`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div 
              className={`w-4 h-4 bg-gradient-to-br ${
                i % 4 === 0 ? 'from-primary/20 to-orange-400/20' :
                i % 4 === 1 ? 'from-blue-400/20 to-cyan-400/20' :
                i % 4 === 2 ? 'from-green-400/20 to-emerald-400/20' :
                'from-purple-400/20 to-pink-400/20'
              } rounded-full blur-sm animate-3d-float`}
              style={{
                animation: `float-3d ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          </div>
        ))}

        {/* 3D Grid Lines */}
        <div className="absolute inset-0 perspective-1000">
          <div 
            className={`absolute inset-0 transition-all duration-2000 ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,102,0,0.1) 1px, transparent 1px),
                linear-gradient(rgba(255,102,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `
                perspective(1000px)
                rotateX(${mousePosition.y * 5}deg)
                rotateY(${mousePosition.x * 5}deg)
              `,
            }}
          />
        </div>
      </div>

      {/* Main Content with 3D Transform */}
      <div 
        className={`relative z-10 transition-all duration-1000 ease-out ${
          isLoaded 
            ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
            : 'opacity-0 translate-y-12 scale-95 -rotate-2'
        }`}
        style={{
          transform: `
            perspective(1000px)
            translateY(${isLoaded ? 0 : 48}px)
            scale(${isLoaded ? 1 : 0.95})
            rotateX(${isLoaded ? 0 : 5}deg)
            rotateY(${mousePosition.x * 2}deg)
            rotateZ(${isLoaded ? 0 : -2}deg)
          `,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
