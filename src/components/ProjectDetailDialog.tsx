import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDetail {
  title: string;
  overview: string;
  sections: {
    title: string;
    content: string;
  }[];
}

interface ProjectDetailDialogProps {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailDialog = ({ project, open, onOpenChange }: ProjectDetailDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-primary/20 shadow-2xl animate-scale-in overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-shimmer bg-[length:200%_200%]"></div>
        <ScrollArea className="max-h-[90vh]">
          <div className="p-8 space-y-8 relative z-10">
            <DialogHeader className="space-y-4 pb-6 border-b border-primary/20 animate-slide-in-top">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"></div>
              <DialogTitle className="text-4xl md:text-5xl font-bold gradient-text animate-slide-in-left flex items-center gap-4">
                <span className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></span>
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-xl text-foreground/80 leading-relaxed animate-slide-in-right">
                {project.overview}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-8">
              {project.sections.map((section, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-6 rounded-lg glow-effect group hover:scale-[1.02] transition-all duration-500 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} relative overflow-hidden hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-3 relative group-hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:animate-bounce-subtle"></span>
                    {section.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed whitespace-pre-line text-lg group-hover:text-foreground/90 transition-colors duration-300 relative">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-primary/20 flex justify-center animate-slide-in-bottom">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-glow-pulse"></div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
