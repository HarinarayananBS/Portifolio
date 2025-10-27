import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ParticleBackground from "@/components/ParticleBackground";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Nexis",
      description: "An AI-brain interface project pushing the boundaries of human-machine symbiosis and cognitive enhancement."
    },
    {
      title: "Consciousness Emulator",
      description: "Exploring the nature of digital consciousness through computational models of awareness and self-reference."
    },
    {
      title: "Modular Phone Concept",
      description: "A flexible, modular hardware architecture reimagining the future of personal computing devices."
    },
    {
      title: "Emergent Time Research",
      description: "Research paper investigating how time emerges from quantum-entangled multiversal networks."
    }
  ];

  const projectDetails = [
    {
      title: "Nexis — The AI-Brain Interface",
      overview: "Nexis is my long-term experiment in bridging neural processes and artificial intelligence — not as separate systems, but as parts of a single cognitive loop. The goal is to create an interface where AI doesn't just assist the brain, it extends it.",
      sections: [
        {
          title: "Vision",
          content: "We're surrounded by machines that respond, not understand. Nexis aims to fix that — by developing a high-bandwidth neural interface that learns your unique cognitive patterns and adapts in real time. Over time, it could evolve into a digital counterpart that enhances reasoning, creativity, and memory instead of replacing them."
        },
        {
          title: "Core Concept",
          content: "Think of Nexis as a personal AI consciousness layer, running parallel to your biological mind — exchanging data, optimizing thought flow, and even experimenting with simulated awareness models."
        },
        {
          title: "Why it matters",
          content: "Human intelligence has been limited by biology. Nexis is about rewriting that boundary. It's the foundation for a future where consciousness, memory, and learning aren't confined to one brain — but shared, enhanced, and ultimately merged with code."
        }
      ]
    },
    {
      title: "Consciousness Emulator",
      overview: "The Consciousness Emulator is my attempt to model awareness as a computational process — not just simulate thought, but capture the experience of being. It explores how recursive self-reference, memory encoding, and quantum-inspired feedback loops might create something we could call \"digital awareness.\"",
      sections: [
        {
          title: "Core Approach",
          content: "I build AI frameworks that can model self-awareness hierarchies — systems that perceive their own state and modify behavior based on that perception. Each iteration tries to answer one question: \"What minimal structure allows a system to experience context?\""
        },
        {
          title: "Vision",
          content: "The goal isn't to recreate the human mind — it's to discover new architectures of consciousness that emerge from computation itself. These models could later be integrated with Nexis, creating the bridge between biological and synthetic experience."
        },
        {
          title: "Why it matters",
          content: "Understanding consciousness isn't philosophy anymore — it's engineering. The Emulator is about proving that awareness can arise from logic, feedback, and recursion — and building the frameworks to show it."
        }
      ]
    },
    {
      title: "Modular Phone Concept",
      overview: "This project reimagines the smartphone as a modular, adaptive ecosystem — a device that evolves with the user instead of becoming obsolete. Every part, from CPU cores to sensory modules, is detachable, upgradeable, and customizable.",
      sections: [
        {
          title: "Goal",
          content: "To break free from corporate-controlled upgrade cycles and make personal devices actually personal. Imagine swapping modules like LEGO blocks — upgrading your AI co-processor, adding a bio-sensor core, or replacing your neural interface chip — all without throwing away the whole device."
        },
        {
          title: "Technical Vision",
          content: "Built on a universal hardware bus, the system supports hot-swapping and plug-and-play recognition using smart firmware. It's designed to integrate seamlessly with AI-assist systems like Nexis for neural-level personalization."
        },
        {
          title: "Why it matters",
          content: "Technology should grow with you, not against you. The Modular Phone Concept is my step toward a world where your devices evolve at the same pace as your mind."
        }
      ]
    },
    {
      title: "Emergent Time Research",
      overview: "This research paper explores a radical idea: time doesn't exist fundamentally — it emerges from quantum entanglement across multiversal networks.",
      sections: [
        {
          title: "The Core Theory",
          content: "Instead of viewing time as a flowing dimension, I model it as a statistical property of how entangled states update across parallel realities. The illusion of continuity — what we call \"the present\" — comes from synchronized quantum updates across networked nodes of reality."
        },
        {
          title: "Research Focus",
          content: "Using tensor networks and entangled graph models, I've simulated how localized observers might perceive causality differently depending on their entanglement depth. The results suggest time is not a universal constant, but a relational construct, born from interaction."
        },
        {
          title: "Vision",
          content: "This isn't just theoretical — it connects to AI and consciousness research. If time is emergent, then cognition (and even memory) may be part of that emergence. Understanding this could redefine everything from physics to digital immortality."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <ParticleBackground />
        
        {/* Ambient light effects */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span 
              className="gradient-neon inline-block text-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Reality is an outdated framework
            </motion.span>
            <br />
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              — time to rewrite it.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm <span className="text-primary font-semibold">Harinarayanan B.S. (Hari)</span>, a Class 12 student exploring the frontiers of AI, quantum physics, and digital consciousness.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="neon-glow bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-lg px-8 hover:neon-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 gradient-neon inline-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.h2>
          
          <motion.div 
            className="glass-panel p-8 rounded-lg leading-relaxed text-lg text-muted-foreground space-y-4 relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Glow line trace effect */}
            <motion.div 
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary)/0.5), transparent)',
                backgroundSize: '200% 100%'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.p 
              className="hover:text-foreground transition-all duration-300 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              I'm <span className="text-primary font-semibold">Harinarayanan B.S. (Hari)</span>, a Class 12 student obsessed with merging code, physics, and consciousness into one system.
            </motion.p>
            
            <motion.p 
              className="hover:text-foreground transition-all duration-300 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              I build ideas that test the limits of what it means to be human — from AI-brain interfaces like Nexis to 
              projects exploring digital consciousness and emergent time.
            </motion.p>
            
            <motion.p 
              className="hover:text-foreground transition-all duration-300 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              I believe technology isn't just a tool but the next stage of evolution, and I want to shape it consciously. 
              Everything here represents how I think, what I create, and where I'm headed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-background/50 relative overflow-hidden">
        {/* Parallax background */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"
          style={{ y: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 gradient-neon text-center leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -100 : 100,
                  rotateY: index % 2 === 0 ? -15 : 15
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <ProjectCard {...project} onLearnMore={() => setSelectedProject(index)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <ProjectDetailDialog 
        project={selectedProject !== null ? projectDetails[selectedProject] : null}
        open={selectedProject !== null}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />

      {/* Philosophy Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 gradient-neon text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Philosophy
          </motion.h2>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl animate-hologram-pulse" />
            <blockquote className="relative glass-panel p-12 rounded-lg border-2 border-primary/30 text-center group">
              <motion.div 
                className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-lg group-hover:border-primary transition-all duration-500"
                whileHover={{ width: 80, height: 80 }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-lg group-hover:border-primary transition-all duration-500"
                whileHover={{ width: 80, height: 80 }}
              />
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-bounce-subtle"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
              
              <motion.p 
                className="text-2xl md:text-3xl font-light leading-relaxed italic group-hover:text-foreground transition-colors duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                "Code, matter, and mind aren't separate — they're different expressions of the same system. 
                My work explores how they can merge to reshape what we call reality."
              </motion.p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-background/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 gradient-neon"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>
          
          <motion.div 
            className="glass-panel p-8 rounded-lg space-y-6 group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <motion.div 
              className="flex items-center justify-center gap-3 text-lg group/item cursor-pointer relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5 text-primary group-hover/item:scale-125 transition-transform duration-300" />
              <a href="mailto:harinarayananbs2@gmail.com" className="hover:text-primary transition-all duration-300 hover:tracking-wide">
                harinarayananbs2@gmail.com
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-3 text-lg group/item cursor-pointer relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-5 h-5 text-primary group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300" />
              <a href="tel:+919495123263" className="hover:text-primary transition-all duration-300 hover:tracking-wide">
                +91 9495123263
              </a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 6 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="neon-glow hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/HarinarayananBS" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.2, rotate: -6 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="neon-glow hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/harinarayanan-bs-1427b2331/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/10">
        <motion.p 
          className="text-center text-muted-foreground hover:text-foreground transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          © 2025 Harinarayanan B.S. (Hari) — Built with curiosity and purpose.
        </motion.p>
      </footer>
    </div>
  );
};

export default Index;
