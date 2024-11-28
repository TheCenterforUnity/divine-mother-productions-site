import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose }) => {
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
      <div className="absolute inset-0 bg-[#1a1a2e]/98 backdrop-blur-sm" />

      {/* Close Button - Outside Modal */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[60] p-2 bg-[#1a1a2e] border border-[#c4a000]/20 rounded-full text-white hover:text-[#c4a000] transition-colors duration-200 shadow-lg"
        aria-label="Close modal"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Modal */}
      <div 
        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* YouTube Player */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/2VKh08BbehM?autoplay=1&rel=0&modestbranding=1"
            title="The Divine Within - Official Trailer"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};