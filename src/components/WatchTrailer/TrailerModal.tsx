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

      {/* Modal */}
      <div 
        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* YouTube Player */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/vqK58c4gUyo?autoplay=1&rel=0&modestbranding=1"
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