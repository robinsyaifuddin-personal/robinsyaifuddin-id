import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Database, Smartphone, Globe, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,102,0,0.05)_60deg,transparent_120deg)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-primary text-sm font-medium">Fullstack Web Developer</span>
            <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className={`space-y-4 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.2s'
        }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, Saya{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                Robin Syaifuddin
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto lg:mx-0" />
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.4s'
        }}>Penggiat Teknologi dan Pengembangan Diri dengan pengalaman luas dalam pengembangan digitalisasi dan organisasi. Berkomitmen pada pengembangan diri dan selalu haus belajar untuk menjawab tantangan.</p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.6s'
        }}>
            <Link to="/portfolio">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl group">
                <Briefcase className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Lihat Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-primary/30 text-gray-300 hover:text-white hover:border-primary/60 px-8 py-4 rounded-2xl backdrop-blur-md bg-card/20 transform hover:scale-105 transition-all duration-300 group">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Hubungi Saya
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className={`relative transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.8s'
        }}>
            
            {/* Simple Rotating Ring */}
            <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 border-2 border-primary/30 rounded-full animate-spin" style={{
            animationDuration: '20s'
          }} />
            <div className="absolute inset-4 w-72 h-72 md:w-88 md:h-88 border border-primary/20 rounded-full animate-spin" style={{
            animationDuration: '15s',
            animationDirection: 'reverse'
          }} />

            {/* Main Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-orange-400/20 to-primary/30 rounded-full blur-2xl animate-pulse" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full bg-gradient-to-br from-card via-background to-card rounded-full p-2 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full p-1">
                  <img src="/lovable-uploads/d0cfe490-7b8f-4828-9c87-686191456de5.png" alt="Robin Syaifuddin" className="w-full h-full object-cover rounded-full shadow-2xl transition-all duration-500" />
                </div>
              </div>

              {/* Static Skills Tags */}
              <div className="absolute -top-8 -right-8 bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl px-4 py-2 shadow-xl">
                <span className="text-primary text-sm font-semibold">React</span>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl px-4 py-2 shadow-xl">
                <span className="text-primary text-sm font-semibold">Node.js</span>
              </div>
              <div className="absolute top-16 -left-12 bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl px-4 py-2 shadow-xl">
                <span className="text-primary text-sm font-semibold">TypeScript</span>
              </div>
              <div className="absolute bottom-16 -right-12 bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl px-4 py-2 shadow-xl">
                <span className="text-primary text-sm font-semibold">AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curved Line */}
      <div className={`relative z-10 w-full max-w-4xl mt-16 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
      transitionDelay: '1s'
    }}>
        <div className="curved-line bg-gradient-to-r from-transparent via-primary to-transparent h-0.5 rounded-full" />
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{
      transitionDelay: '2s'
    }}>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;