import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubLogo, LinkedinLogo, FacebookLogo, PaperPlaneTilt } from 'phosphor-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: GithubLogo,
      label: 'GitHub',
      url: 'https://github.com/Abdelrhman-Hegab',
      color: 'hover:text-[#00f0ff]',
    },
    {
      icon: LinkedinLogo,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdelrhman-hegab/',
      color: 'hover:text-[#00f0ff]',
    },
    {
      icon: FacebookLogo,
      label: 'Facebook',
      url: 'https://www.facebook.com/abdelrhman.hegab.654352/',
      color: 'hover:text-[#00f0ff]',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-section',
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.form-input',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.social-icon',
        { opacity: 0, scale: 0, rotation: 180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.social-links',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 80%',
          },
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_6jal3dl",
        "template_e9rj6d8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "4N-X-KGOfD65QTfHS"
      );

      gsap.to('.submit-btn', {
        scale: 1.1,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      });

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section
      ref={contactRef}
      className="contact-section relative py-20 bg-[#0a0a0a] border-t border-[#00f0ff22] border-b shadow-[0_0_80px_#00f0ff33]"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff] text-center mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-center text-[#8aefff] text-lg mb-16 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your vision
            to life with cutting-edge web technologies and stunning animations.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="contact-form glass-card bg-[#1a1a1a] p-8 rounded-2xl shadow-[0_0_15px_#00f0ff]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-input">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass bg-[#00000040] border-[#00f0ff66] focus:border-[#00f0ff] focus:glow-primary text-white"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-input">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass bg-[#00000040] border-[#00f0ff66] focus:border-[#00f0ff] focus:glow-primary text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-input">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass bg-[#00000040] border-[#00f0ff66] focus:border-[#00f0ff] focus:glow-primary text-white min-h-32"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn w-full bg-gradient-to-r bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:scale-105 transform transition-all duration-300 py-6 text-lg rounded-2xl glow-primary hover:glow-secondary text-[#00f0ff] hover:text-black font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2 text-black">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <PaperPlaneTilt size={20} weight="light" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 text-white">
              <div className="glass-card bg-[#1a1a1a] p-8 rounded-2xl shadow-[0_0_15px_#00f0ff]">
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-[#8aefff] leading-relaxed mb-6">
                  I&apos;m always excited to work on new projects and collaborate
                  with passionate individuals and teams. Whether you need a
                  complete website, interactive animations, or technical
                  consultation, I&apos;m here to help.
                </p>
                <div className="space-y-4 text-[#8aefff]">
                  <div>
                    <span className="font-medium text-white">Email:</span>
                    <br />
                    abdelrhmanhegab9@gmail.com
                  </div>
                  <div>
                    <span className="font-medium text-white">Location:</span>
                    <br />
                    Available for remote work worldwide
                  </div>
                  <div>
                    <span className="font-medium text-white">Response Time:</span>
                    <br />
                    Usually within 24 hours
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links glass-card bg-[#1a1a1a] p-8 rounded-2xl shadow-[0_0_15px_#00f0ff]">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon p-3 rounded-xl glass shadow-[0_0_10px_#00f0ff] hover:shadow-[0_0_15px_#00f0ff] hover:scale-110 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} weight="light" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
