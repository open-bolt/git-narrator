
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-semibold flex items-center space-x-2">
          <span className="flex items-center gap-2 animate-slide-in [animation-delay:100ms]">
            <span className="text-gradient">GitNarrator</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {["Features", "Documentation", "GitHub"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium relative transition-colors duration-300 ease-in-out",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  "animate-slide-in"
                )}
                style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
          <AnimatedButton
            variant="primary"
            className="animate-scale-in [animation-delay:500ms]"
          >
            Get Started
          </AnimatedButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
