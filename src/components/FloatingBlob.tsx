import { useEffect, useState } from 'react';

const FloatingBlob = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main floating blob */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-blob"
        style={{
          background: 'hsl(88, 65%, 42%)',
          top: `${20 + scrollY * 0.1}%`,
          right: `${10 + Math.sin(scrollY * 0.01) * 5}%`,
          transform: `translateY(${Math.sin(scrollY * 0.005) * 50}px)`,
        }}
      />
      
      {/* Secondary smaller blob */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-20 blur-2xl animate-float"
        style={{
          background: 'hsl(88, 65%, 42%)',
          top: `${60 + scrollY * 0.05}%`,
          left: `${5 + Math.cos(scrollY * 0.008) * 3}%`,
          transform: `translateY(${Math.cos(scrollY * 0.003) * 30}px)`,
          animationDelay: '2s',
        }}
      />
      
      {/* Tertiary micro blob */}
      <div
        className="absolute w-32 h-32 rounded-full opacity-25 blur-xl animate-blob"
        style={{
          background: 'hsl(88, 65%, 42%)',
          top: `${40 + scrollY * 0.08}%`,
          left: `${80 + Math.sin(scrollY * 0.012) * 4}%`,
          transform: `translateY(${Math.sin(scrollY * 0.007) * 40}px)`,
          animationDelay: '4s',
        }}
      />
    </div>
  );
};

export default FloatingBlob;