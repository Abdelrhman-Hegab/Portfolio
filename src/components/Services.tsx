import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, DeviceMobile, PaintBrush, ChartLine, Cloud } from 'phosphor-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef<HTMLElement>(null);

    const services = [
        { icon: Code, title: 'Frontend Development', desc: 'Building responsive and interactive user interfaces with modern frameworks like React & Next.js.' },
        { icon: Database, title: 'Backend Development', desc: 'Creating secure and scalable server-side applications and RESTful APIs.' },
        { icon: PaintBrush, title: 'UI/UX Design', desc: 'Designing clean and user-friendly interfaces with tools like Figma & Adobe XD.' },
        { icon: ChartLine, title: 'Performance & SEO', desc: 'Optimizing web apps for speed, accessibility, and better search engine rankings.' },
        { icon: DeviceMobile, title: 'Responsive Design', desc: 'Ensuring websites look and work perfectly across all devices and screen sizes.' },
        { icon: Cloud, title: 'API Integration', desc: 'Seamless integration with third-party APIs and cloud services.' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section animation
            gsap.fromTo('.services-section', {
                opacity: 0,
                filter: 'blur(10px)'
            }, {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.2,
                scrollTrigger: {
                    trigger: '.services-section',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Services cards animation
            gsap.fromTo('.service-card', {
                opacity: 0,
                y: 50,
                scale: 0.9
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'top 80%'
                }
            });
        }, servicesRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={servicesRef}
            className="services-section py-20 relative"
            id="services"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient">Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        I offer a wide range of web development services to help you bring your ideas to life with modern, scalable, and user-friendly solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card glass-card p-6 rounded-2xl hover:glow-primary transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <service.icon size={40} className="text-primary group-hover:text-accent transition-colors duration-300" weight="duotone" />
                                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
