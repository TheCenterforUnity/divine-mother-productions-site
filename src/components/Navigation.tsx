import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const Navigation = () => {
  const navigationLinks = [
    { label: 'About', href: '#about' },
    { label: 'Episodes', href: '#episodes' },
    { label: 'Cast', href: '#cast' },
    { label: 'Watch Now', href: '#watch-now' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a1a2e]/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0">
            <div 
              className="w-10 h-10 rounded-full bg-[#c4a000] flex items-center justify-center cursor-pointer hover:bg-[#d4b000] transition-colors duration-300"
              onClick={scrollToTop}
            >
              <span className="text-[#1a1a2e] font-bold text-xl">DM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white/80 hover:text-[#c4a000] transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger Menu for Mobile */}
          <HamburgerMenu links={navigationLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;