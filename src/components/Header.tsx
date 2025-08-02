
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [{
    name: "Beranda",
    href: "/",
    icon: Home
  }, {
    name: "Tentang",
    href: "/about",
    icon: User
  }, {
    name: "Portofolio",
    href: "/portfolio",
    icon: Briefcase
  }, {
    name: "Kontak",
    href: "/contact",
    icon: Mail
  }];
  
  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 transition-all duration-300 hover:border-primary/50 glass">
              <img 
                src="/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png" 
                alt="Robin Syaifuddin" 
                className="w-full h-full object-cover" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.href);
              return (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-black bg-primary shadow-lg' 
                      : 'text-white hover:bg-white/10 hover:backdrop-blur-md'
                  }`}
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    <IconComponent size={18} className="transition-all duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white relative group glass p-2 rounded-lg" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-card">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.href);
                return (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`group relative px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-black bg-primary' 
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3 relative z-10">
                      <IconComponent size={20} className="transition-all duration-300" />
                      <span className="font-medium">{item.name}</span>
                    </div>
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
