import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience'},
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initial nav animation
    gsap.fromTo('.nav-container', {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 3, // After preloader
      ease: 'power2.out'
    });

    // Nav links stagger animation
    gsap.fromTo('.nav-link', {
      opacity: 0,
      y: -20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 3.2,
      ease: 'power2.out'
    });

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      // Open menu animation
      gsap.fromTo('.mobile-menu', {
        opacity: 0,
        scale: 0.9
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Close menu animation
      gsap.to('.mobile-menu', {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className={`nav-container mx-4 rounded-2xl transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-lg bg-[#001f2f80] border border-[#00f0ff44]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="text-2xl font-bold text-[#00f0ff] hover:drop-shadow-[0_0_10px_#00f0ff] hover:scale-105 transition-transform duration-300"
          >
            Abdelrhaman
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-white hover:text-[#00f0ff] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#00d4ff] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#00f0ff] to-[#00d4ff] rounded-xl text-black hover:scale-105 hover:glow-primary transition-all duration-300"
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-xl glass hover:glow-primary transition-all duration-300 text-[#00f0ff]"
          >
            {isMenuOpen ? (
              <X size={24} weight="light" />
            ) : (
              <List size={24} weight="light" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden fixed inset-0 top-20 mx-4 rounded-2xl glass backdrop-blur-lg bg-[#001f2fdd] border border-[#00f0ff44] p-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-lg text-white hover:text-[#00f0ff] transition-colors duration-300 py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-[#00f0ff] to-[#00d4ff] rounded-xl text-black text-center hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
