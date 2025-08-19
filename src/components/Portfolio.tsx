import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './Preloader';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      
      // Initialize smooth scrolling behavior
      gsap.registerPlugin(ScrollTrigger);
      
      // Refresh ScrollTrigger when loading completes
      ScrollTrigger.refresh();
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Preloader */}
      {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;