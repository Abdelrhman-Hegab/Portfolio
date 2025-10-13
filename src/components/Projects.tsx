import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowSquareOut, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "A comprehensive dashboard with real-time data visualization and interactive charts.",
      image: "/lovable-uploads/2af4ce15-a2ef-4d55-b7dc-405d42573b9e.png",
      tech: ["HTML","React", "Javascript","MUI"],
      demo: "https://admin-dashboard-lemon-beta-63.vercel.app/",
      github: "https://admin-dashboard-lemon-beta-63.vercel.app/"
    },
    {
      id: 2,
      title: "Coffee Shop Website UI",
      description: "Modern e-commerce platform with smooth animations and immersive user experience.",
      image: "/lovable-uploads/a04b7063-1903-43eb-88ac-7c80c9fcffbc.png",
      tech: ["PhotoShop", "illustrator", "Framer Motion"],
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
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsRef}
      className="py-20 relative bg-[#0a0a0a] shadow-[0_0_80px_#00f0ff33] border-t border-[#00f0ff22] border-b"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff] text-center mb-6">
          Featured Projects
        </h2>

        {/* Separator */}
        <div className="mx-auto mb-12 w-24 h-1 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"></div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-[#1a1a1a] p-6 rounded-2xl transition-all duration-300 group hover:shadow-[0_0_15px_#00f0ff] hover:scale-105 cursor-pointer flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="bg-[#0a0a0a]/20 backdrop-blur-sm hover:bg-[#0ff0ff] hover:text-black">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><ArrowSquareOut size={16} weight="light" /></a>
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-[#0a0a0a]/20 backdrop-blur-sm hover:bg-[#0ff0ff] hover:text-black">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubLogo size={16} weight="light" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-1 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#8aefff] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-[#00f0ff]/30 rounded-full text-[#00f0ff]"
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
    </section>
  );
};

export default Projects;
