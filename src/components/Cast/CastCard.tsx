import React from 'react';
import { Character } from './types';

interface CastCardProps {
  character: Character;
  onClick: () => void;
}

export const CastCard: React.FC<CastCardProps> = ({ character, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left group relative overflow-hidden rounded-lg bg-[#1a1a2e]/50 border border-[#c4a000]/20 transition-all duration-500 hover:border-[#c4a000]/40 hover:scale-[1.02]"
      aria-label={`View details for ${character.name}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Digital Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/50 to-transparent opacity-60" />
        
        {/* Particle Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at center, #c4a000 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            animation: 'fade-in 2s ease-out forwards'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="space-y-2">
          <p className="text-[#c4a000] text-sm tracking-[0.2em] font-light">
            AI PERFORMANCE SYNTHESIS
          </p>
          <h3 className="font-serif text-xl text-white">
            {character.name}
          </h3>
          <p className="text-white/80 text-sm line-clamp-2 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {character.briefRole}
          </p>
        </div>
      </div>
    </button>
  );
};