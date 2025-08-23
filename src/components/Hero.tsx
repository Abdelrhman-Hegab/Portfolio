import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Main animations
      tl.fromTo('.hero-headline', {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out'
      })
        .fromTo('.hero-subtitle', {
          opacity: 0,
          y: 30
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.6')
        .fromTo('.hero-cta', {
          opacity: 0,
          scale: 0.8
        }, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)'
        }, '-=0.4')
        .fromTo('.right-decor', {
          opacity: 0,
          x: 100,
          filter: 'blur(5px)'
        }, {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power2.out'
        }, '-=1');

      // Floating orbs animation
      gsap.to('.hero-orb-1', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.to('.hero-orb-2', {
        y: 15,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1
      });

      gsap.to('.hero-orb-3', {
        y: -25,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleHireMeClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background orbs */}
      <div className="hero-orb-1 floating-orb floating-orb-1 opacity-30" />
      <div className="hero-orb-2 floating-orb floating-orb-2 opacity-20" />
      <div className="hero-orb-3 floating-orb floating-orb-3 opacity-25" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient">Abdelrhman Mohamed</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
              Frontend Developer
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Crafting immersive digital experiences with cutting-edge technologies.
            Specialized in React, GSAP, and modern web development.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={handleHireMeClick}
              className="bg-gradient-primary hover:scale-105 transform transition-all duration-300 px-8 py-6 text-lg rounded-2xl glow-primary hover:glow-secondary"
            >
              Hire Me
            </Button>

            <Button
              asChild
              variant="secondary"
 className=" hover:scale-105 transform transition-all duration-300 px-8 py-6 text-lg rounded-2xl glow-primary hover:glow-secondary"            >
              <a
                href="https://drive.google.com/uc?export=download&id=18WVnrUTiMjHR3YC96UZTAm2M0ip1ngGV"
                download
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
