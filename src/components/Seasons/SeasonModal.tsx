import React from 'react';
import { Dialog } from '@headlessui/react';
import { Season } from './types';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SeasonModalProps {
  season: Season;
  isOpen: boolean;
  onClose: () => void;
}

export const SeasonModal: React.FC<SeasonModalProps> = ({ season, isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
        <Dialog.Panel className="relative w-full max-w-4xl max-h-[95vh] rounded-xl bg-slate-900/90 backdrop-blur-sm border border-[#c4a000]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 hover:text-white/90" />
          </button>

          <div className="overflow-y-auto max-h-[95vh] scrollbar-thin scrollbar-thumb-[#c4a000] scrollbar-track-transparent">
            <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
              {/* Header */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-[0.2em] uppercase">
                    Season {season.number}: {season.title}
                  </h2>
                  <span 
                    className="px-3 py-1 text-xs uppercase tracking-[0.15em] font-light text-[#c4a000] bg-[#c4a000]/20 rounded-full self-start sm:self-center whitespace-nowrap"
                  >
                    {season.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-white/60 text-xs uppercase tracking-[0.15em] font-light">Exploring</span>
                  <span className="text-[#c4a000] text-xs uppercase tracking-[0.15em] font-light">{season.value}</span>
                  <span className="text-white/60 text-xs uppercase tracking-[0.15em] font-light">through</span>
                  <span className="text-[#c4a000] text-xs uppercase tracking-[0.15em] font-light">{season.tradition}</span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white tracking-[0.2em] uppercase mb-3 sm:mb-4">
                  Overview
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {season.description}
                </p>
              </div>

              {/* Protagonists */}
              {season.protagonists.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-[0.2em] uppercase mb-3 sm:mb-4">
                    Protagonists
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {season.protagonists.map((protagonist) => (
                      <div 
                        key={protagonist.name}
                        className="p-3 sm:p-4 rounded-lg bg-slate-900/50 border border-[#c4a000] hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={protagonist.image} 
                              alt={protagonist.name}
                              className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover border border-[#c4a000]/50"
                            />
                          </div>
                          <div>
                            <h4 className="text-white text-base sm:text-lg uppercase tracking-[0.15em] font-serif">
                              {protagonist.name}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-[#c4a000] hover:bg-white/5 transition-colors">
                  <h3 className="font-serif text-base sm:text-lg text-white tracking-[0.2em] uppercase mb-2 sm:mb-3">
                    Spiritual Value
                  </h3>
                  <p className="text-white/70 text-sm font-light">
                    {season.spiritualValueDescription}
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-[#c4a000] hover:bg-white/5 transition-colors">
                  <h3 className="font-serif text-base sm:text-lg text-white tracking-[0.2em] uppercase mb-2 sm:mb-3">
                    Cultural Lens
                  </h3>
                  <p className="text-white/70 text-sm font-light">
                    {season.culturalLensDescription}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center pt-4 border-t border-[#c4a000]">
                <p className="text-white/40 text-xs sm:text-sm font-light tracking-wide italic px-2">
                  "Every era gives birth to transformative spiritual truth. Through parallel journeys across time, we witness how eternal wisdom changes both individuals and societies."
                </p>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}; 