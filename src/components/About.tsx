import React from 'react';
import { useInView } from './hooks/useInView';
import sarahProfile from '../assets/images/sarah-profile.jpg';

export const About = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="about"
      className="relative w-full py-24 overflow-hidden"
      ref={ref}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e2235] to-[#1c2543] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`max-w-xl transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 tracking-wider">
              ABOUT THE SERIES
            </h2>
            <div className="space-y-6 text-white/90">
              <p className="leading-relaxed">
                THE DIVINE WITHIN weaves between ancient Judea and the modern world, 
                exploring how recognizing our innate spiritual equality transforms 
                individuals and societies.
              </p>
              <p className="leading-relaxed">
                When brilliant religious historian Dr. Sarah Jones uncovers evidence 
                of history's first women apostles, her journey mysteriously begins 
                to mirror that of those who, two thousand years earlier, moved from 
                society's margins to become leaders of a revolutionary spiritual movement.
              </p>
            </div>
          </div>

          {/* Sarah's Image */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={sarahProfile}
                alt="Dr. Sarah Jones in golden hour light"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c2543]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#c4a000] text-sm tracking-wider font-light">DR. SARAH JONES</p>
                <p className="text-white/80 text-sm mt-1">Religious Historian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};