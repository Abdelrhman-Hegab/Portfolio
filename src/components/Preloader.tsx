import { useEffect } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader = ({ onLoadComplete }: PreloaderProps) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the progress bar
    tl.to('.progress-bar', {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
    })
    .to('.progress-text', {
      innerHTML: '100%',
      duration: 2,
      ease: 'power2.out',
      snap: { innerHTML: 1 }
    }, 0)
    .to('.preloader-logo', {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        onLoadComplete();
      }
    }, '+=0.3');

    // Floating animation for logo
    gsap.to('.preloader-logo', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

  }, [onLoadComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background orbs */}
      <div className="floating-orb floating-orb-1 animate-float opacity-20" />
      <div className="floating-orb floating-orb-2 animate-float opacity-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb floating-orb-3 animate-float opacity-20" style={{ animationDelay: '4s' }} />
      
      <div className="text-center">
        {/* Logo */}
        <div className="preloader-logo mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient">
            Abdelrhman Mohamed
          </h1>
          <p className="text-muted-foreground text-lg mt-2">Frontend Developer</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Loading</span>
            <span className="progress-text text-sm text-muted-foreground">0%</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-gradient-primary w-0 rounded-full glow-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;