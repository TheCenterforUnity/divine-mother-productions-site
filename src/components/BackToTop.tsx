import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled past 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed left-8 bottom-8 z-40 w-12 h-12 rounded-full border border-[#c4a000]/50 bg-[#1a1a2e]/80 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-[#c4a000] group ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      {/* Button Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[#c4a000]/0 group-hover:bg-[#c4a000]/10 transition-colors duration-300" />
        
        {/* Icon */}
        <ChevronUp className="w-6 h-6 text-[#c4a000] transform group-hover:scale-110 transition-transform duration-300" />
        
        {/* Floating Animation */}
        <div className="absolute inset-0 animate-float">
          <div className="absolute inset-0 rounded-full border border-[#c4a000]/20" />
        </div>
      </div>
    </button>
  );
};