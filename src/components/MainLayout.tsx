import React from 'react';
import Navigation from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Episodes } from './Episodes/Episodes';
import { Cast } from './Cast/Cast';
import { WatchTrailer } from './WatchTrailer/WatchTrailer';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';

export const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Episodes />
      <Cast />
      <WatchTrailer />
      <Footer />
      <BackToTop />
    </div>
  );
}; 