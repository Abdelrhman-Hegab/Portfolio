import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const expRef = useRef<HTMLElement>(null);

    const education = [
        {
            icon: GraduationCap,
            title: 'Faculty of Information Technology',
            place: 'EELU',
            date: 'June 2026',
            desc: 'Studying Information Technology with focus on programming, problem-solving, and software engineering principles.',
        },
    ];

    const work = [
        {
            icon: Briefcase,
            title: 'Programming Instructor',
            place: 'Syntax Error Team',
            date: 'Jan 2023 – July 2025',
            desc: 'Delivered programming instruction and mentored over 500 students, specializing in Java, Object-Oriented Programming, and Data Structures. Created teaching materials to simplify complex programming concepts.',
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.experience-section',
                {
                    opacity: 0,
                    filter: 'blur(10px)',
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: '.experience-section',
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            gsap.fromTo(
                '.exp-card',
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.experience-grid',
                        start: 'top 80%',
                    },
                }
            );
        }, expRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={expRef}
            id="experience"
            className="experience-section relative bg-[#0a0a0a] py-24 shadow-[0_0_80px_#00f0ff33] border-t border-[#00f0ff22] border-b"
        // ↑ اضفنا ظل خارجي وفاصل علوي وسفلي بلون خفيف نيوني
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff]">
                        Education & Experience
                    </h2>
                    <p className="mt-4 text-lg text-[#8aefff] max-w-2xl mx-auto">
                        My journey in technology and teaching has given me a solid foundation in both academic learning and real-world experience.
                    </p>
                </div>

                <div className="experience-grid grid gap-10 md:grid-cols-2 items-stretch">
                    {/* Education */}
                    <div className="space-y-6 flex flex-col h-full">
                        <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="exp-card bg-[#1a1a1a] p-6 rounded-2xl transition-all duration-300 group hover:shadow-[0_0_15px_#00f0ff] h-full flex flex-col"
                            >
                                <div className="flex items-start space-x-4 flex-1">
                                    <edu.icon
                                        size={40}
                                        className="text-[#00f0ff] group-hover:text-white transition-all duration-300 flex-shrink-0"
                                        weight="duotone"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                                        <span className="text-sm text-[#00f0ff] font-medium">
                                            {edu.place} — {edu.date}
                                        </span>
                                        <p className="mt-2 text-sm text-[#8aefff] leading-relaxed">{edu.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Work Experience */}
                    <div className="space-y-6 flex flex-col h-full">
                        <h3 className="text-2xl font-semibold text-white mb-4">Work Experience</h3>
                        {work.map((job, index) => (
                            <div
                                key={index}
                                className="exp-card bg-[#1a1a1a] p-6 rounded-2xl transition-all duration-300 group hover:shadow-[0_0_15px_#00f0ff] h-full flex flex-col"
                            >
                                <div className="flex items-start space-x-4 flex-1">
                                    <job.icon
                                        size={40}
                                        className="text-[#00f0ff] group-hover:text-white transition-all duration-300 flex-shrink-0"
                                        weight="duotone"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                                        <span className="text-sm text-[#00f0ff] font-medium">
                                            {job.place} — {job.date}
                                        </span>
                                        <p className="mt-2 text-sm text-[#8aefff] leading-relaxed">{job.desc}</p>
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

export default Experience;
