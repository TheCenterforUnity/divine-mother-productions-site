import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import logo from '../assets/images/logo.png';
import heroImage from '../assets/images/hero.png';

export const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-21T20:30:00+02:00'); // Israel time (UTC+2)

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e]/90 to-[#1a1a2e]/90 backdrop-blur-sm" />
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#c4a000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative text-center space-y-12 p-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          <img 
            src={logo} 
            alt="Divine Mother Productions" 
            className="w-32 h-auto mx-auto"
          />
          
          <div className="space-y-2">
            <p className="text-[#c4a000] text-sm tracking-[0.3em] uppercase font-light">
              Divine Mother Productions Presents
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-normal">
              The Divine Within
            </h1>
            <div className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#c4a000] font-normal">
                Season 1: Equal
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-serif font-normal">
                Mary Magdalene and the 12 Women Evangels
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-[#c4a000] text-sm tracking-[0.3em] uppercase font-light">
              Season One Trailer Launching
            </p>
            <p className="text-white text-lg tracking-wider font-light">
              December 21st, 2024
            </p>
          </div>

          {/* Countdown Timer */}
          {(timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) && (
            <div className="grid grid-cols-4 gap-6 max-w-sm mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-white">{timeLeft.days}</div>
                <div className="text-xs text-white/60 uppercase tracking-[0.2em] font-light">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-white">{timeLeft.hours}</div>
                <div className="text-xs text-white/60 uppercase tracking-[0.2em] font-light">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-white/60 uppercase tracking-[0.2em] font-light">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-white/60 uppercase tracking-[0.2em] font-light">Seconds</div>
              </div>
            </div>
          )}

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg leading-relaxed font-light">
              A groundbreaking series exploring the untold story of women's spiritual leadership 
              across time and tradition.
            </p>
          </div>

          {/* Contact Email */}
          <div className="pt-8 border-t border-white/10">
            <a 
              href="mailto:contact@divinemotherproductions.com"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-[#c4a000] transition-colors duration-300 font-sans font-light"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">contact@divinemotherproductions.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 