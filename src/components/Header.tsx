
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Tentang", href: "/about", icon: User },
    { name: "Portofolio", href: "/portfolio", icon: Briefcase },
    { name: "Kontak", href: "/contact", icon: Mail },
  ];

  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 transform transition-all duration-300 hover:scale-110 hover:border-primary/50 glow-animation">
              <img 
                src="/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png" 
                alt="Robin Syaifuddin" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">Robin Syaifuddin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative px-6 py-3 transition-all duration-300 transform hover:scale-105 ${
                    isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    <IconComponent 
                      size={18} 
                      className="transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  
                  {/* 3D Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-lg transition-all duration-300 transform group-hover:scale-105 blur-sm ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-lg transition-all duration-300 transform group-hover:scale-110 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* 3D Border Effect */}
                  <div className={`absolute inset-0 rounded-lg border transition-all duration-300 transform group-hover:scale-105 ${
                    isActive ? 'border-primary/30' : 'border-primary/0 group-hover:border-primary/30'
                  }`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-lg shadow-lg transition-all duration-300 ${
                    isActive ? 'shadow-primary/20' : 'shadow-primary/0 group-hover:shadow-primary/20'
                  }`}></div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-orange-500 transition-all duration-300 rounded-full ${
                    isActive ? 'w-full left-0' : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                  }`}></div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            {/* 3D Button Effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 blur-sm"></div>
            <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group relative px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: `fade-in 0.5s ease-out forwards`
                    }}
                  >
                    <div className="flex items-center space-x-3 relative z-10">
                      <IconComponent 
                        size={20} 
                        className="transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    
                    {/* Mobile 3D Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-lg transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></div>
                    <div className={`absolute inset-0 border rounded-lg transition-all duration-300 ${
                      isActive ? 'border-primary/20' : 'border-primary/0 group-hover:border-primary/20'
                    }`}></div>
                    
                    {/* Mobile Glow Effect */}
                    <div className={`absolute inset-0 rounded-lg shadow-md transition-all duration-300 ${
                      isActive ? 'shadow-primary/10' : 'shadow-primary/0 group-hover:shadow-primary/10'
                    }`}></div>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
