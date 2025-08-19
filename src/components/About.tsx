import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Cpu, Palette, Rocket, Globe, Lightning } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  const skills = [
    { icon: Code, name: 'JavaScript', level: 95 },
    { icon: Globe, name: 'React', level: 90 },
    { icon: Palette, name: 'Bootstrap', level: 88 },
    { icon: Cpu, name: 'MUI', level: 85 },
    { icon: Lightning, name: 'GSAP', level: 80 },
    { icon: Rocket, name: 'Next.js', level: 82 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo('.about-section', {
        opacity: 0,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Profile image animation
      gsap.fromTo('.profile-image', {
        opacity: 0,
        x: -100,
        scale: 0.8
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.profile-image',
          start: 'top 80%'
        }
      });

      // Skills stagger animation
      gsap.fromTo('.skill-item', {
        opacity: 0,
        y: 50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%'
        }
      });

      // Bio text animation
      gsap.fromTo('.bio-text', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.bio-text',
          start: 'top 80%'
        }
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={aboutRef}
      className="about-section py-20 relative"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <div className="profile-image flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-70 h-70 rounded-full overflow-hidden glass-card p-2 hover:scale-105 transition-all duration-500">
                <img 
                  src="/lovable-uploads/d956961d-a750-4297-91b9-b94bae682a9f.jpg"
                  alt="Abdelrhman Mohamed"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl -z-10" />
            </div>
          </div>

          {/* Right - Bio and Skills */}
          <div className="space-y-8">
            <div className="bio-text space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Front-End Developer and UI/UX Designer with 1+ years of hands-on experience in building
                responsive and accessible web interfaces using HTML, CSS, JavaScript, and React. Proficient in
                user-centered design using tools such as Figma and Adobe XD. Strong background in object-oriented
                programming (Java, C++) and version control systems such as Git.  Passionate about delivering
                visually appealing and performance-optimized applications. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in modern JavaScript frameworks, advanced animations 
                with GSAP, and creating responsive designs that perform beautifully 
                across all devices.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-item glass-card hover:glow-primary transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <skill.icon 
                        size={32} 
                        className="text-primary group-hover:text-accent transition-colors duration-300" 
                        weight="light"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <div className="w-full bg-muted rounded-full h-1">
                        <div 
                          className="bg-gradient-primary h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;