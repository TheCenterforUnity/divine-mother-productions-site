import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Play } from 'lucide-react';
import { TrailerModal } from './TrailerModal';
import { ParticleOverlay } from './ParticleOverlay';
import trailerPreview from '../../assets/images/trailer-preview.jpg';

export const WatchTrailer = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      id="watch-now"
      ref={ref}
      className="relative w-full py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] -z-10" />
      
      {/* Particle Effect */}
      <ParticleOverlay />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wider">
              WATCH TRAILER
            </h2>
          </div>

          {/* Trailer Card */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-lg group">
              {/* Preview Image */}
              <img
                src={trailerPreview}
                alt="The Divine Within - Trailer"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/50 to-transparent opacity-60" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative group/button mb-8"
                  aria-label="Play trailer"
                >
                  <div className="absolute inset-0 bg-[#c4a000]/20 rounded-full animate-ping" />
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#c4a000] bg-[#1a1a2e]/50 backdrop-blur-sm transform group-hover/button:scale-95 transition-all duration-300">
                    <Play className="w-8 h-8 text-[#c4a000] transform translate-x-0.5" />
                  </div>
                </button>

                {/* Title */}
                <h3 className="font-serif text-3xl md:text-4xl text-white text-center mb-2">
                  THE DIVINE WITHIN
                </h3>
                <p className="text-[#c4a000] text-sm tracking-[0.2em] font-sans font-light uppercase mb-4">
                  SEASON ONE: EQUAL
                </p>
                <p className="font-sans font-light text-white/80 text-sm">
                  A Divine Mother Productions Series
                </p>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1a1a2e]/70 backdrop-blur-sm border border-[#c4a000]/20">
                <span className="font-sans font-light text-white/90 text-sm">1:56</span>
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-center mt-8 space-y-2">
              <p className="font-sans font-light text-white/90 text-sm">
                Experience the revolutionary story of history's first women apostles
              </p>
              <p className="text-[#c4a000] text-sm tracking-[0.2em] font-sans font-light uppercase">
                Where ancient truth meets modern revelation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};