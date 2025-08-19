import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowSquareOut, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "A comprehensive dashboard with real-time data visualization and interactive charts.",
      image: "/lovable-uploads/2af4ce15-a2ef-4d55-b7dc-405d42573b9e.png",
      tech: ["React", "Javascript", "js", "MUI"],
      demo: "https://admin-dashboard-lemon-beta-63.vercel.app/",
      github: "https://admin-dashboard-lemon-beta-63.vercel.app/"
    },
    {
      id: 2,
      title: "Coffee Shop Website UI",
      description: "Modern e-commerce platform with smooth animations and immersive user experience.",
      image: "/lovable-uploads/a04b7063-1903-43eb-88ac-7c80c9fcffbc.png",
      tech: ["PhotoShop", "illustrator","Framer Motion"],
      demo: "https://drive.google.com/file/d/1XWVUOaCcFxgY9xOySEhXu46-JR7GuUxY/view?usp=sharing",
      github: "https://drive.google.com/file/d/1XWVUOaCcFxgY9xOySEhXu46-JR7GuUxY/view?usp=sharing"
    },
    {
      id: 3,
      title: "Barcelona Club Store",
      description: "Interactive sports platform with team management and fan engagement features.",
      image: "/lovable-uploads/351462ea-7022-426c-a768-a3d663769d50.png",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      demo: "https://abdelrhman-hegab.github.io/Barca-Store/",
      github: "https://github.com/Abdelrhman-Hegab/Barca-Store"
    },
    {
      id: 4,
      title: "Website Templete",
      description: "Portfolio website for a development team with advanced 3D animations.",
      image: "/lovable-uploads/89f507e0-3d40-4f7b-a33f-f5cbe4aa0496.png",
      tech: ["HTML", "CSS3"],
      demo: "https://abdelrhman-hegab.github.io/The-First-Project/#",
      github: "https://github.com/Abdelrhman-Hegab/The-First-Project#"
    },
    {
      id: 5,
      title: "Product Landing Page",
      description: "Vibrant product showcase with interactive elements and smooth scrolling.",
      image: "/lovable-uploads/eb6dcfee-8139-4f35-be24-855a1378134d.png",
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      demo: "https://abdelrhman-hegab.github.io/Scroll-With-GSAP/",
      github: "https://github.com/Abdelrhman-Hegab/Scroll-With-GSAP"
    },
    {
      id: 6,
      title: "Gaming Store UI",
      description: "E-commerce platform for gaming products with immersive 3D product views.",
      image: "/lovable-uploads/25f6f529-e265-4311-afab-e8cf260622e8.png",
      tech: ["PhotoShop", "illustrator", "Framer Motion"],
      demo: "https://drive.google.com/file/d/1g8faeZb_uhRzBsNOYrBNSqTVYIrQE6m2/view?usp=sharing",
      github: "https://drive.google.com/file/d/1g8faeZb_uhRzBsNOYrBNSqTVYIrQE6m2/view?usp=sharing"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo('.projects-title', {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%'
        }
      });

      // Cards stagger animation
      gsap.fromTo('.project-card', {
        opacity: 0,
        y: 100,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      });

      // Horizontal scroll for mobile
      if (window.innerWidth < 768) {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
          gsap.to(scrollContainer, {
            x: () => -(scrollContainer.scrollWidth - scrollContainer.offsetWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: scrollContainer,
              pin: true,
              scrub: 1,
              end: () => `+=${scrollContainer.scrollWidth}`
            }
          });
        }
      }

    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={projectsRef}
      className="py-20 relative overflow-hidden"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
          Featured Projects
        </h2>

        {/* Desktop Grid */}
        <div className="projects-grid hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glass-card hover:glow-primary transition-all duration-500 hover:scale-105 group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl mb-4">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="bg-background/20 backdrop-blur-sm">
                     <a href={project.demo} target="_blank" rel="noopener noreferrer"><ArrowSquareOut size={16} weight="light" /></a>
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-background/20 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
  <GithubLogo size={16} weight="light" /></a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card flex-none w-80 glass-card"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative overflow-hidden rounded-t-2xl mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;