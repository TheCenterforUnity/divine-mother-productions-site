import React from 'react';
import { Season } from './types';

interface SeasonCardProps {
  season: Season;
  onClick: () => void;
}

export const SeasonCard: React.FC<SeasonCardProps> = ({ season, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-lg bg-slate-900/50 backdrop-blur-sm border border-white/10 transition-all duration-300"
      style={{
        minHeight: '300px'
      }}
    >
      {/* Season Number Watermark */}
      <div 
        className="absolute -right-8 -top-8 text-9xl font-serif opacity-5 select-none"
        style={{ color: season.color }}
      >
        {season.number}
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl text-white tracking-[0.2em] uppercase">
              {season.title}
            </h3>
            <span 
              className="px-3 py-1 text-xs uppercase tracking-[0.15em] font-light"
              style={{ 
                backgroundColor: `${season.color}20`,
                color: season.color
              }}
            >
              {season.status}
            </span>
          </div>
          <p className="text-white/60 text-xs uppercase tracking-[0.15em] font-light">
            Through the lens of {season.tradition}
          </p>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow font-light">
          {season.description}
        </p>

        {/* Footer */}
        <div className="space-y-4">
          {/* Spiritual Value */}
          <div className="flex items-center space-x-2">
            <span className="text-white/60 text-xs uppercase tracking-[0.15em] font-light">Spiritual Value:</span>
            <span 
              className="text-xs uppercase tracking-[0.15em] font-light"
              style={{ color: season.color }}
            >
              {season.value}
            </span>
          </div>

          {/* Protagonists */}
          {season.protagonists.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-xs uppercase tracking-[0.15em] font-light">Protagonists:</span>
              <div className="flex items-center space-x-2">
                {season.protagonists.map((protagonist, index) => (
                  <span 
                    key={`${season.number}-${protagonist.name}`}
                    className="text-white/90 text-xs uppercase tracking-[0.15em] font-light"
                  >
                    {protagonist.name}{index < season.protagonists.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Inner Border for Hover Effect */}
        <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 border border-[#c4a000] rounded-lg" />
        </div>
      </div>
    </div>
  );
}; 