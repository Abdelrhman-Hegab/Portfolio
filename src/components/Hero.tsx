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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      id="hero"
    >
      {/* Background orbs */}
      <div className="hero-orb-1 absolute top-10 left-10 w-40 h-40 bg-[#00f0ff] blur-3xl opacity-25 rounded-full" />
      <div className="hero-orb-2 absolute top-1/3 right-20 w-32 h-32 bg-[#00f0ff] blur-2xl opacity-20 rounded-full" />
      <div className="hero-orb-3 absolute bottom-16 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-[#00f0ff] blur-3xl opacity-20 rounded-full" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I'm{' '}
            <span className="text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff]">
              Abdelrhman Mohamed
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-light text-[#8aefff]">
              Frontend Developer
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-[#8aefff] max-w-2xl mx-auto lg:mx-0">
            Crafting immersive digital experiences with cutting-edge technologies.
            Specialized in React, GSAP, and modern web development.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={handleHireMeClick}
              className="bg-[#00f0ff] text-black hover:bg-transparent hover:text-[#00f0ff] hover:border border-[#00f0ff] hover:scale-105 transform transition-all duration-300 px-8 py-6 text-lg rounded-2xl shadow-[0_0_20px_#00f0ff] hover:shadow-[0_0_30px_#00f0ff] "
            >
              Hire Me
            </Button>

            <Button
              asChild
              variant="secondary"
              className="bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:scale-105 transform transition-all duration-300 px-8 py-6 text-lg rounded-2xl shadow-[0_0_15px_#00f0ff]"
            >
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
