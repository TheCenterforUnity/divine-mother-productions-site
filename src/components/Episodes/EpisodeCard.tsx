import React from 'react';
import { Episode } from './types';

interface EpisodeCardProps {
  episode: Episode;
  onClick: () => void;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left group relative p-6 border border-[#c4a000]/20 rounded-lg bg-[#1a1a2e]/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#c4a000]/40"
      aria-label={`View details for Episode ${episode.number}: ${episode.title}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" 
           style={{ boxShadow: '0 0 20px rgba(196, 160, 0, 0.1)' }} />
      
      <div className="relative space-y-3">
        <span className="text-[#c4a000] text-sm tracking-wider">EPISODE {episode.number}</span>
        <h3 className="font-serif text-xl text-white">{episode.title}</h3>
        <p className="text-white/80 text-sm line-clamp-2">{episode.description}</p>
        <div className="pt-4 flex justify-between items-center text-xs text-white/60">
          <span>60 minutes</span>
          <span className="tracking-wider">COMING SOON</span>
        </div>
      </div>
    </button>
  );
};