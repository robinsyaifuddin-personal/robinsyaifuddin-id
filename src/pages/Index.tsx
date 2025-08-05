import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowRight, User, Code, Palette, Zap, Database, 
  Github, Linkedin, Mail, Sun, Moon, ExternalLink,
  Server, Smartphone, Globe, Bot, PenTool, Monitor,
  Award, Users, Briefcase, GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: "React", level: 95, icon: <Code className="w-4 h-4" /> },
    { name: "TypeScript", level: 90, icon: <Code className="w-4 h-4" /> },
    { name: "Node.js", level: 88, icon: <Server className="w-4 h-4" /> },
    { name: "Python", level: 85, icon: <Bot className="w-4 h-4" /> },
    { name: "UI/UX Design", level: 92, icon: <PenTool className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-transparent to-yellow-400/5 rounded-full animate-spin-slow opacity-30"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        isDark ? 'bg-black/20 border-white/10' : 'bg-white/20 border-black/10'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold transition-colors ${
            isDark ? 'text-primary' : 'text-emerald-600'
          }`}>
            Robin Syaifuddin
          </h1>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className={`transition-colors hover:text-primary ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4" />
              <Switch 
                checked={isDark} 
                onCheckedChange={setIsDark}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="w-4 h-4" />
            </div>
            <Button className="futuristic-button">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative">
        <div className="container mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Programmer{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                Full Stack
              </span>{' '}
              <span className="bg-primary text-black px-4 py-2 rounded-xl text-3xl md:text-5xl futuristic-glow">
                Senior
              </span>
            </h2>
            
            <p className={`text-xl mb-12 max-w-3xl mx-auto transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Saat ini sedang menempuh pendidikan S1 Teknik Telekomunikasi di Institut Teknologi Sumatera. 
              Aktif dalam berbagai organisasi dan memiliki pengalaman magang di berbagai perusahaan teknologi.
            </p>

            {/* 3D Profile Image with Glow Effect */}
            <div className="relative mb-12 group">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-yellow-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity futuristic-glow"></div>
                <img 
                  src="/lovable-uploads/55c66a71-0e35-40a1-a4d1-0ad1b2700206.png" 
                  alt="Robin Syaifuddin" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 futuristic-glow transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button className="futuristic-button-primary group">
                <User className="w-5 h-5 mr-2" />
                About Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="futuristic-button-outline group">
                <Github className="w-5 h-5 mr-2" />
                GitHub
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button variant="outline" className="futuristic-button-outline group">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className={`text-3xl font-bold mb-8 transition-colors ${
              isDark ? 'text-primary' : 'text-emerald-600'
            }`}>
              Technical Skills
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`transition-all duration-500 delay-[${index * 100}ms] ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'bg-white/10' : 'bg-black/10'
                    }`}>
                      {skill.icon}
                    </div>
                    <span className={`font-medium transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className={`w-full h-3 rounded-full overflow-hidden transition-colors ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-yellow-400 rounded-full futuristic-glow transition-all duration-1000 ease-out"
                    style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              My <span className="text-gradient bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className={`text-lg transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Key milestones in my professional journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Briefcase className="w-8 h-8" />, number: "15+", label: "Organizations", desc: "Active participation" },
              { icon: <Monitor className="w-8 h-8" />, number: "5", label: "Major Projects", desc: "Successfully completed" },
              { icon: <GraduationCap className="w-8 h-8" />, number: "10+", label: "Training", desc: "Professional development" },
              { icon: <Award className="w-8 h-8" />, number: "8+", label: "Certifications", desc: "Industry recognized" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`glass-card p-8 text-center hover:scale-105 transition-all duration-300 border ${
                  isDark ? 'border-white/10' : 'border-black/10'
                } futuristic-glow`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${
                  isDark ? 'bg-primary/10 text-primary' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className={`font-semibold mb-1 transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.label}
                </div>
                <div className={`text-sm transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Expertise */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Professional <span className="text-gradient bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-lg transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Expertise and services I provide to help bring your projects to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: "Web Development", 
                desc: "Modern, responsive websites with cutting-edge technologies",
                skills: ["React", "Next.js", "TypeScript", "Node.js"]
              },
              { 
                icon: <PenTool className="w-8 h-8" />, 
                title: "UI/UX Design", 
                desc: "Beautiful, intuitive interfaces and optimal user experiences",
                skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
              },
              { 
                icon: <Bot className="w-8 h-8" />, 
                title: "AI Automation", 
                desc: "Intelligent automation solutions for business processes",
                skills: ["Python", "Machine Learning", "APIs", "Automation"]
              },
              { 
                icon: <Database className="w-8 h-8" />, 
                title: "Database Design", 
                desc: "Efficient, scalable database architectures and optimization",
                skills: ["PostgreSQL", "MongoDB", "Redis", "Analytics"]
              },
              { 
                icon: <Smartphone className="w-8 h-8" />, 
                title: "Mobile Development", 
                desc: "Cross-platform mobile applications with native performance",
                skills: ["React Native", "Flutter", "iOS", "Android"]
              },
              { 
                icon: <Monitor className="w-8 h-8" />, 
                title: "Digital Solutions", 
                desc: "Complete digital transformation and consulting services",
                skills: ["Strategy", "Consulting", "Architecture", "DevOps"]
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`glass-card p-8 hover:scale-105 transition-all duration-300 border group ${
                  isDark ? 'border-white/10 hover:border-primary/30' : 'border-black/10 hover:border-emerald-300'
                } futuristic-glow`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isDark ? 'bg-primary/10 text-primary group-hover:bg-primary/20' : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-center mb-6 transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        isDark ? 'bg-white/10 text-white/70' : 'bg-black/10 text-gray-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              My <span className="text-gradient bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              {['All', 'Web', 'Mobile', 'Design'].map((filter) => (
                <Button 
                  key={filter}
                  variant="outline" 
                  className={`futuristic-button-outline ${filter === 'All' ? 'bg-primary text-black' : ''}`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className={`glass-card overflow-hidden hover:scale-105 transition-all duration-300 border group ${
                  isDark ? 'border-white/10 hover:border-primary/30' : 'border-black/10 hover:border-emerald-300'
                } futuristic-glow`}
              >
                <div className={`h-48 transition-colors ${
                  isDark ? 'bg-gradient-to-br from-primary/20 to-yellow-400/20' : 'bg-gradient-to-br from-emerald-100 to-green-200'
                } flex items-center justify-center`}>
                  <Monitor className={`w-16 h-16 transition-colors ${
                    isDark ? 'text-white/50' : 'text-gray-400'
                  }`} />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Project {item}
                  </h3>
                  <p className={`text-sm mb-4 transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Modern web application with advanced features and responsive design.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" className="futuristic-button-small">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="futuristic-button-outline-small">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 border-t transition-all duration-300 ${
        isDark ? 'bg-black/50 border-white/10' : 'bg-white/50 border-black/10'
      } backdrop-blur-xl`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className={`text-xl font-bold mb-4 transition-colors ${
                isDark ? 'text-primary' : 'text-emerald-600'
              }`}>
                Robin Syaifuddin
              </h3>
              <p className={`transition-colors ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Full Stack Developer specializing in modern web technologies and AI automation.
              </p>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Links
              </h4>
              <div className="space-y-2">
                {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                  <a 
                    key={link}
                    href="#" 
                    className={`block transition-colors hover:text-primary ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Services
              </h4>
              <div className="space-y-2">
                {['Web Development', 'UI/UX Design', 'AI Automation', 'Consulting'].map((service) => (
                  <a 
                    key={service}
                    href="#" 
                    className={`block transition-colors hover:text-primary ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Connect
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Mail className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-lg transition-all hover:scale-110 ${
                      isDark ? 'bg-white/10 hover:bg-primary/20 text-white' : 'bg-black/10 hover:bg-emerald-100 text-gray-900'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`pt-8 border-t text-center transition-colors ${
            isDark ? 'border-white/10 text-gray-400' : 'border-black/10 text-gray-600'
          }`}>
            <p>&copy; 2025 Robin Syaifuddin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;