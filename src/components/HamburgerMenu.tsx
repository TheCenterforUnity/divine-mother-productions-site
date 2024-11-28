import { useState } from 'react';

interface HamburgerMenuProps {
  links: Array<{
    label: string;
    href: string;
  }>;
}

const HamburgerMenu = ({ links }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-4 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-white/80 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`h-0.5 w-full bg-white/80 transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-white/80 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Menu Items */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a1a2e] rounded-lg shadow-lg py-2 z-50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-white/80 hover:text-[#c4a000] hover:bg-[#1a1a2e]/50 transition-colors duration-300 uppercase text-sm tracking-[0.2em] font-sans font-light"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu; 