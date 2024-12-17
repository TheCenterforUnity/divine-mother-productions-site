import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { SeasonCard } from './SeasonCard';
import { SeasonModal } from './SeasonModal';
import { Season } from './types';
import { seasons } from './data';

export const Seasons = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  return (
    <section 
      id="seasons"
      ref={ref}
      className="relative w-full py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] -z-10" />
      
      {/* Digital Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #c4a000 1px, transparent 1px),
            linear-gradient(to bottom, #c4a000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wider">
              THE DIVINE WITHIN SERIES
            </h2>
            <p className="font-sans font-light text-white/80 text-sm max-w-2xl mx-auto">
              Weaving parallel storylines across time to reveal how timeless truths transform both individuals and societies
            </p>
          </div>

          {/* Seasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((season, index) => (
              <div
                key={season.number}
                className="transform transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <SeasonCard 
                  season={season}
                  onClick={() => setSelectedSeason(season)}
                />
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="font-sans text-white/60 text-sm max-w-2xl mx-auto">
              "Every era gives birth to transformative spiritual truth. Through parallel journeys across time, we witness how eternal wisdom changes both individuals and societies."
            </p>
          </div>
        </div>
      </div>

      {/* Season Modal */}
      {selectedSeason && (
        <SeasonModal
          season={selectedSeason}
          isOpen={true}
          onClose={() => setSelectedSeason(null)}
        />
      )}
    </section>
  );
}; 