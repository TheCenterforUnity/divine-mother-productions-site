import React from 'react';
import Navigation from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Episodes } from './Episodes/Episodes';
import { Cast } from './Cast/Cast';
import { WatchTrailer } from './WatchTrailer/WatchTrailer';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { Seasons } from './Seasons/Seasons';

export const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Episodes />
      <Cast />
      <Seasons />
      <WatchTrailer />
      <Footer />
      <BackToTop />
    </div>
  );
}; 