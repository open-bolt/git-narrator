
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "#documentation" },
    { name: "GitHub", href: "https://github.com/dustinwloring1988/vibe-cli" }
  ];

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
            <span className="text-gradient">vibe-cli</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium relative transition-colors duration-300 ease-in-out",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  "animate-slide-in"
                )}
                style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
                target={item.name === "GitHub" ? "_blank" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
