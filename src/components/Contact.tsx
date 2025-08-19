import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubLogo, LinkedinLogo, FacebookLogo, PaperPlaneTilt } from 'phosphor-react';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: GithubLogo, label: 'GitHub', url: 'https://github.com/Abdelrhman-Hegab', color: 'hover:text-white' },
    { icon: LinkedinLogo, label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelrhman-hegab/', color: 'hover:text-blue-400' },
    { icon: FacebookLogo, label: 'Facebook', url: 'https://www.facebook.com/abdelrhman.hegab.654352/', color: 'hover:text-blue-300' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
      gsap.fromTo('.contact-section', {
        opacity: 0,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%'
        }
      });

      // Form inputs animation
      gsap.fromTo('.form-input', {
        opacity: 0,
        x: -50
      }, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%'
        }
      });

      // Social icons animation
      gsap.fromTo('.social-icon', {
        opacity: 0,
        scale: 0,
        rotation: 180
      }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top 80%'
        }
      });

      // Title animation
      gsap.fromTo('.contact-title', {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%'
        }
      });

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Button animation on submit
    gsap.to('.submit-btn', {
      scale: 1.1,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section 
      ref={contactRef}
      className="contact-section py-20 relative"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-gradient text-center mb-4">
            Let's Work Together
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life 
            with cutting-edge web technologies and stunning animations.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="contact-form glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-input">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass bg-input/20 border-border/30 focus:border-primary focus:glow-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass bg-input/20 border-border/30 focus:border-primary focus:glow-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass bg-input/20 border-border/30 focus:border-primary focus:glow-primary min-h-32"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn w-full bg-gradient-primary hover:scale-105 transform transition-all duration-300 py-6 text-lg rounded-2xl glow-primary hover:glow-secondary"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    
                        <a href="mailto:abdelrhmanhegab9@gmail.com" className="flex items-center space-x-2">
                          <PaperPlaneTilt size={20} weight="light" />
                          <span>Send Message</span>
                        </a>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to work on new projects and collaborate with 
                  passionate individuals and teams. Whether you need a complete 
                  website, interactive animations, or technical consultation, 
                  I'm here to help.
                </p>
                
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">Email:</span>
                    <br />
                    abdelrhmanhegab9@gmail.com
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Location:</span>
                    <br />
                    Available for remote work worldwide
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Response Time:</span>
                    <br />
                    Usually within 24 hours
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links glass-card">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon p-3 rounded-xl glass hover:glow-primary transition-all duration-300 hover:scale-110 ${social.color}`}
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