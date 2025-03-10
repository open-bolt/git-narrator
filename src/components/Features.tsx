
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Code, GitBranch, Terminal, Zap, ChevronRight, GitCommit, Sparkles } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add("animate-scale-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="glass dark:glass-dark rounded-xl p-6 opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Natural Language to Code",
      description: "Describe changes in plain English and let AI translate them into actual code modifications.",
      icon: <Code className="text-primary w-6 h-6" />
    },
    {
      title: "Git Automation",
      description: "Automatically stage, commit, and push changes with smart commit messages.",
      icon: <GitBranch className="text-primary w-6 h-6" />
    },
    {
      title: "Ollama Integration",
      description: "Use local large language models via Ollama for privacy and speed.",
      icon: <Sparkles className="text-primary w-6 h-6" />
    },
    {
      title: "Terminal-like Experience",
      description: "Monitor progress with a familiar terminal interface showing real-time updates.",
      icon: <Terminal className="text-primary w-6 h-6" />
    },
    {
      title: "Smart Commit Messages",
      description: "Generate meaningful commit messages based on the changes made.",
      icon: <GitCommit className="text-primary w-6 h-6" />
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance with local LLM execution for quick iterations.",
      icon: <Zap className="text-primary w-6 h-6" />
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div ref={sectionRef} className="max-w-7xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Streamline your Git workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            GitNarrator combines the power of AI with Git to make your development process smoother and more efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/dustinwloring1988/vibe-cli" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about our features
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
