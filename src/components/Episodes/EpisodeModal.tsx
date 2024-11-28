import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Episode } from './types';

interface EpisodeModalProps {
  episode: Episode;
  isOpen: boolean;
  onClose: () => void;
}

export const EpisodeModal: React.FC<EpisodeModalProps> = ({ episode, isOpen, onClose }) => {
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
        className="relative w-full max-w-3xl bg-[#1e2235] border border-[#c4a000]/20 rounded-lg shadow-2xl overflow-y-auto max-h-[calc(100vh-2rem)] transform transition-all duration-300 scale-100 opacity-100"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`episode-${episode.number}-title`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white/90 transition-colors duration-200 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 stroke-2 [filter:drop-shadow(1px_1px_0_rgb(0_0_0))_drop-shadow(-1px_-1px_0_rgb(0_0_0))]" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-[#c4a000] text-sm tracking-wider">EPISODE {episode.number}</p>
              <h2 
                id={`episode-${episode.number}-title`}
                className="font-serif text-3xl text-white"
              >
                {episode.title}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm text-white/60 border-y border-white/10 py-4 my-6">
              <div>
                <p className="text-white/40">Runtime</p>
                <p>60 minutes</p>
              </div>
              <div>
                <p className="text-white/40">Director</p>
                <p>Sarah Mitchell</p>
              </div>
              <div>
                <p className="text-white/40">Writer</p>
                <p>Emma Thompson</p>
              </div>
            </div>

            <div className="space-y-4 text-white/80 leading-relaxed">
              {episode.fullSynopsis.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-[#c4a000] tracking-wider">COMING SOON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};