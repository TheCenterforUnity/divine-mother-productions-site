import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Character } from './types';

interface CastModalProps {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
}

export const CastModal: React.FC<CastModalProps> = ({ character, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1a2e]/95 backdrop-blur-sm" />

      {/* Modal */}
      <div 
        className="relative w-full max-w-4xl bg-[#1e2235] border border-[#c4a000]/20 rounded-lg shadow-2xl overflow-y-auto max-h-[calc(100vh-2rem)] transform transition-all duration-300 scale-100 opacity-100"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`character-${character.id}-title`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white/90 transition-colors duration-200 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 stroke-2 [filter:drop-shadow(1px_1px_0_rgb(0_0_0))_drop-shadow(-1px_-1px_0_rgb(0_0_0))]" />
        </button>

        <div className="flex flex-col md:grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-[250px] md:h-auto">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover md:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2235] via-transparent to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Character Info */}
              <div>
                <p className="text-[#c4a000] text-sm tracking-[0.2em] font-sans font-light uppercase">
                  {character.timeline.toUpperCase()} TIMELINE
                </p>
                <h2 
                  id={`character-${character.id}-title`}
                  className="font-serif text-2xl text-white mt-2"
                >
                  {character.name}
                </h2>
                <p className="font-sans font-light text-white/80 mt-2">
                  {character.briefRole}
                </p>
              </div>

              {/* AI Synthesis Note */}
              <div className="py-4 border-y border-white/10">
                <p className="text-[#c4a000] text-sm tracking-[0.2em] font-sans font-light uppercase mb-2">
                  AI PERFORMANCE SYNTHESIS
                </p>
                <p className="font-sans font-light text-white/60 text-sm">
                  Character visualization and performance created through advanced AI synthesis
                </p>
              </div>

              {/* Full Description */}
              <div className="space-y-4 font-sans font-light">
                {character.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-white/80 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Relationships */}
              {character.relationships.length > 0 && (
                <div className="pt-4">
                  <h3 className="font-sans text-white text-sm tracking-[0.2em] uppercase mb-2">
                    Key Relationships
                  </h3>
                  <ul className="space-y-2 font-sans font-light">
                    {character.relationships.map((relationship, index) => (
                      <li key={index} className="text-white/60 text-sm">
                        {relationship}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};