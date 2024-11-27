import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/images/hero.jpg';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 scale-110 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.5 : 0}px)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 via-[#16213e]/80 to-[#1a1a2e]/90" />

      {/* Content */}
      <div className={`relative h-full flex flex-col items-center justify-center text-center px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="space-y-6">
          <p className="text-[#c4a000] text-sm tracking-[0.3em] font-light mb-4">
            A DIVINE MOTHER PRODUCTIONS SERIES
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-wider font-light">
            THE DIVINE WITHIN
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
            A Premium Streaming Series
          </p>
          <p className="text-lg text-white/80 max-w-xl mx-auto font-light">
            Where ancient truth meets modern revelation
          </p>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 text-white/80 hover:text-[#c4a000] transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </div>
  );
};