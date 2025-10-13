import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, FacebookLogo, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: GithubLogo, label: 'GitHub', url: 'https://github.com/Abdelrhman-Hegab' },
    { icon: LinkedinLogo, label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelrhman-hegab/' },
    { icon: FacebookLogo, label: 'Facebook', url: 'https://www.facebook.com/abdelrhman.hegab.654352/' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating particles animation
      gsap.to('.particle', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          amount: 2,
          from: 'random'
        }
      });

      // Footer fade and slide up
      gsap.fromTo('.footer-content', {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: '.footer-content',
          start: 'top 90%'
        }
      });

      // Social icons hover animation
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
        const handleMouseEnter = () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: 'back.out(1.7)'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          icon.removeEventListener('mouseenter', handleMouseEnter);
          icon.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-20 overflow-hidden bg-[#0a0a0a] border-t border-[#00f0ff33] shadow-[0_0_60px_#00f0ff33]"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-[#00f0ff] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="footer-content container mx-auto px-4 relative z-10">
        <div className="glass-card bg-[#111a1f99] border border-[#00f0ff44] text-center space-y-8 p-8 rounded-3xl shadow-[0_0_15px_#00f0ff88]">
          {/* Logo */}
          <div>
            <h3 className="text-3xl font-bold text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff] mb-2">
              Abdelrhman Mohamed
            </h3>
            <p className="text-[#8aefff]">Frontend Developer & UI/UX Designer</p>
          </div>
          {/* Copyright */}
          <div className="pt-4 border-t border-[#00f0ff33]">
            <p className="text-sm text-[#8aefff] mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          {/* Social Links */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
