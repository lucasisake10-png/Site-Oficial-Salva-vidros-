import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Benefits from './components/Benefits.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;