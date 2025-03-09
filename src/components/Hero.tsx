
import React, { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl opacity-60 animate-float [animation-delay:2s]"></div>
      </div>
      
      <div 
        className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-1000 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
          Introducing GitNarrator
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block">Transform your</span>
          <span className="text-gradient">Git workflow</span>
          <span className="block">with natural language</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          GitNarrator bridges the gap between natural language and code changes, automating your Git workflow with powerful AI assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton 
            variant="primary" 
            size="lg"
            className="min-w-[180px]"
          >
            Get Started
          </AnimatedButton>
          <AnimatedButton 
            variant="secondary" 
            size="lg"
            className="min-w-[180px]"
          >
            View on GitHub
          </AnimatedButton>
        </div>
      </div>
      
      {/* Terminal preview section */}
      <div 
        className={cn(
          "w-full max-w-4xl mx-auto mt-20 transition-all duration-1000 ease-out delay-300",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        <div className="glass dark:glass-dark rounded-lg shadow-xl overflow-hidden border border-white/20">
          <div className="flex items-center gap-2 px-4 py-3 bg-black/5 dark:bg-white/5 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs text-muted-foreground ml-2">~/projects/my-app</div>
          </div>
          <div className="bg-gray-950/90 text-gray-100 p-6 font-mono text-sm overflow-hidden">
            <p className="mb-2 opacity-70">$ git-narrator "Update the README with installation instructions"</p>
            <div className="animate-pulse-soft">
              <p className="text-blue-400">🤖 Analyzing repository structure...</p>
              <p className="text-green-400 mt-2">✓ Found README.md</p>
              <p className="text-yellow-400 mt-2">🔍 Generating appropriate changes...</p>
              <div className="mt-4 border-l-2 border-gray-700 pl-4">
                <p className="text-white">Adding installation section to README.md</p>
                <p className="text-green-400 mt-1">+ ## Installation</p>
                <p className="text-green-400">+ </p>
                <p className="text-green-400">+ ```bash</p>
                <p className="text-green-400">+ git clone https://github.com/user/repo</p>
                <p className="text-green-400">+ cd repo</p>
                <p className="text-green-400">+ npm install</p>
                <p className="text-green-400">+ ```</p>
              </div>
              <p className="text-blue-400 mt-3">📝 Committing changes...</p>
              <p className="text-white mt-1">[main 3a1b2c] Add installation instructions to README</p>
              <p className="text-white">1 file changed, 8 insertions(+)</p>
              <p className="text-blue-400 mt-3">🚀 Pushing to origin/main...</p>
              <p className="text-green-400 mt-1">✓ Successfully pushed changes!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
