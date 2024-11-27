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
        className="relative w-full max-w-4xl bg-[#1e2235] border border-[#c4a000]/20 rounded-lg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`character-${character.id}-title`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative aspect-[3/4] md:aspect-auto">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2235] via-transparent to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Character Info */}
            <div className="space-y-4">
              <div>
                <p className="text-[#c4a000] text-sm tracking-wider">
                  {character.timeline.toUpperCase()} TIMELINE
                </p>
                <h2 
                  id={`character-${character.id}-title`}
                  className="font-serif text-2xl text-white mt-2"
                >
                  {character.name}
                </h2>
                <p className="text-white/80 mt-2">{character.briefRole}</p>
              </div>

              {/* AI Synthesis Note */}
              <div className="py-4 border-y border-white/10">
                <p className="text-[#c4a000] text-sm tracking-wider mb-2">
                  AI PERFORMANCE SYNTHESIS
                </p>
                <p className="text-white/60 text-sm">
                  Character visualization and performance created through advanced AI synthesis
                </p>
              </div>

              {/* Full Description */}
              <div className="space-y-4">
                {character.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-white/80 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Relationships */}
              {character.relationships.length > 0 && (
                <div className="pt-4">
                  <h3 className="text-white text-sm font-semibold mb-2">KEY RELATIONSHIPS</h3>
                  <ul className="space-y-2">
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