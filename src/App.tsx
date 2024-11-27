import React from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Episodes } from './components/Episodes/Episodes';
import { Cast } from './components/Cast/Cast';
import { WatchTrailer } from './components/WatchTrailer/WatchTrailer';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <main className="bg-[#1a1a2e] min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Episodes />
      <Cast />
      <WatchTrailer />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;