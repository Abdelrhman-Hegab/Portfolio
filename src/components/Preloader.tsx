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
        snap: { innerHTML: 1 },
      }, 0)
      .to('.preloader-logo', {
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.5')
      .to('.preloader', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          onLoadComplete();
        },
      }, '+=0.3');

    // Floating animation for logo
    gsap.to('.preloader-logo', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, [onLoadComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      {/* Background orbs */}
      <div className="floating-orb floating-orb-1 animate-float opacity-20 bg-blue-500 blur-3xl w-32 h-32 rounded-full absolute top-10 left-10" />
      <div className="floating-orb floating-orb-2 animate-float opacity-20 bg-blue-500 blur-3xl w-32 h-32 rounded-full absolute top-40 right-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb floating-orb-3 animate-float opacity-20 bg-blue-500 blur-3xl w-32 h-32 rounded-full absolute bottom-10 left-1/2 transform -translate-x-1/2" style={{ animationDelay: '4s' }} />

      <div className="text-center">
        {/* Logo */}
        <div className="preloader-logo mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-[#00f0ff] drop-shadow-[0_0_20px_#00f0ff]">
                        Abdelrhman Mohamed

          </h1>
          <p className="text-[#8aefff] text-lg mt-2">Frontend Developer & UI/UX Designer</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#8aefff]">Loading</span>
            <span className="progress-text text-sm text-[#8aefff]">0%</span>
          </div>
          <div className="h-1 bg-[#1e1e1e] rounded-full overflow-hidden">
            <div className="progress-bar h-full w-0 rounded-full bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
