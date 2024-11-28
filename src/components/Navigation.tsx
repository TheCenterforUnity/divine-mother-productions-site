import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/images/logo.png';

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
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 group"
            >
              <img 
                src={logo} 
                alt="Divine Mother Productions" 
                className="h-10 w-auto"
              />
              <span className="hidden sm:inline-block text-white/80 group-hover:text-[#c4a000] transition-colors duration-300">
                Divine Mother Productions
              </span>
            </button>
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