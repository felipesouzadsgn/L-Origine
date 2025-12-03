import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full antialiased selection:bg-primary selection:text-white bg-bgMain text-textMain font-body">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;