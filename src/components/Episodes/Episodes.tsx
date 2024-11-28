import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { EpisodeCard } from './EpisodeCard';
import { EpisodeModal } from './EpisodeModal';
import { Episode, episodes } from './types';

export const Episodes = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  return (
    <section 
      id="episodes"
      ref={ref}
      className="relative w-full py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] -z-10" />
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#c4a000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16 tracking-wider">
            SEASON ONE: EQUAL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {episodes.map((episode) => (
              <div
                key={episode.number}
                className={`transition-all duration-500`}
                style={{
                  transitionDelay: `${(episode.number - 1) * 100}ms`
                }}
              >
                <EpisodeCard 
                  episode={episode}
                  onClick={() => setSelectedEpisode(episode)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEpisode && (
        <EpisodeModal
          episode={selectedEpisode}
          isOpen={true}
          onClose={() => setSelectedEpisode(null)}
        />
      )}
    </section>
  );
};