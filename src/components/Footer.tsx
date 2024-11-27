import React from 'react';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative w-full py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#141428] -z-10" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4a000]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo/Title */}
            <div>
              <h2 className="font-serif text-2xl text-white hover:text-[#c4a000] transition-colors duration-300 cursor-default">
                DIVINE MOTHER PRODUCTIONS
              </h2>
            </div>

            {/* Contact */}
            <div>
              <a 
                href="mailto:contact@divinemotherproductions.com"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-[#c4a000] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>contact@divinemotherproductions.com</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 text-right">
            {/* Copyright */}
            <div className="space-y-2">
              <p className="text-white/80 text-sm">
                © 2024 Divine Mother Productions. All Rights Reserved.
              </p>
              <p className="text-white/60 text-sm">
                "The Divine Within" is a registered trademark of Divine Mother Productions.
              </p>
            </div>

            {/* AI Note */}
            <p className="text-white/40 text-xs">
              Created with advanced AI synthesis technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};