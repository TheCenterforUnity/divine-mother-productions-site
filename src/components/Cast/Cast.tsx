import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { CastCard } from './CastCard';
import { CastModal } from './CastModal';
import { Character, characters } from './types';

export const Cast = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const modernCharacters = characters.filter(char => char.timeline === 'modern');
  const historicalCharacters = characters.filter(char => char.timeline === 'historical');

  return (
    <section 
      id="cast"
      ref={ref}
      className="relative w-full py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] -z-10" />
      
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
              CAST | AI PERFORMANCE CAPTURE
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Next-generation AI synthesis bringing timeless stories to life
            </p>
          </div>

          {/* Modern Timeline */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-white text-center">MODERN TIMELINE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modernCharacters.map((character, index) => (
                <div
                  key={character.id}
                  className="transform transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CastCard 
                    character={character}
                    onClick={() => setSelectedCharacter(character)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-white text-center">HISTORICAL TIMELINE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {historicalCharacters.map((character, index) => (
                <div
                  key={character.id}
                  className="transform transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CastCard 
                    character={character}
                    onClick={() => setSelectedCharacter(character)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              All performances created through advanced AI synthesis, enabling unprecedented historical authenticity while delivering powerful dramatic moments.
            </p>
          </div>
        </div>
      </div>

      {/* Character Modal */}
      <CastModal
        character={selectedCharacter!}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </section>
  );
};