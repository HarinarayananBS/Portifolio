import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  onLearnMore: () => void;
}

const ProjectCard = ({ title, description, onLearnMore }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="holographic-card p-6 rounded-lg group perspective-card cursor-pointer relative"
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
        transition: 'transform 0.3s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg pointer-events-none z-10"></div>
      
      {/* Neon border glow */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
           style={{
             background: 'linear-gradient(135deg, transparent, hsl(var(--neon-blue) / 0.3), transparent)',
             filter: 'blur(8px)'
           }}>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 group-hover:border-primary/80 rounded-tl-lg transition-all duration-500 group-hover:w-16 group-hover:h-16 pointer-events-none z-20"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/30 group-hover:border-accent/80 rounded-br-lg transition-all duration-500 group-hover:w-16 group-hover:h-16 pointer-events-none z-20"></div>

      {/* Pulse indicator */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-hologram-pulse pointer-events-none z-20"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3 gradient-text group-hover:text-glow transition-all duration-500">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-all duration-500">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="border-primary/40 hover:border-primary hover:bg-primary/10 hover:neon-glow transition-all duration-500 group-hover:scale-105"
          onClick={onLearnMore}
        >
          <span className="relative z-10">Access Data</span>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
