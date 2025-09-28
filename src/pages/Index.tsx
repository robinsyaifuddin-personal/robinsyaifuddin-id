import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase, Code, Palette, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Luxury Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,102,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(255,102,0,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.05),transparent_70%)]" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />

        {/* About Preview with Glass Design */}
        <section className="py-12 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center p-2 mb-4 md:mb-6 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                  <p className="text-primary text-sm uppercase tracking-wider mb-3 md:mb-4 font-semibold">
                    Tentang Saya
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    Pengalaman & <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">Keahlian</span>
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg xl:text-xl mb-6 md:mb-8 leading-relaxed">
                    Saat ini sedang menempuh pendidikan S1 Teknik Telekomunikasi di Institut Teknologi Sumatera. 
                    Aktif dalam berbagai organisasi dan memiliki pengalaman magang di berbagai perusahaan teknologi.
                  </p>
                </div>
                
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group w-full sm:w-auto">
                    <User className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Selengkapnya
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="glass-card p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 order-first lg:order-last">
                {/* Desktop & Tablet: Stack vertically */}
                <div className="hidden sm:block space-y-6 md:space-y-8">
                  <div>
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="p-2 md:p-3 bg-primary/20 rounded-xl mr-3 md:mr-4">
                        <Code className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">Keahlian Teknis</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {["AI Automasi", "Web Developer", "Desain Grafis", "Digital Marketing"].map((skill, index) => (
                        <div key={index} className="p-2.5 md:p-3 bg-card/30 rounded-xl text-center hover:bg-card/50 transition-colors duration-300">
                          <span className="text-xs md:text-sm font-medium text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="p-2 md:p-3 bg-primary/20 rounded-xl mr-3 md:mr-4">
                        <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">Soft Skills</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {["Kepemimpinan", "Komunikasi", "Kreatif", "Manajemen"].map((skill, index) => (
                        <div key={index} className="p-2.5 md:p-3 bg-card/30 rounded-xl text-center hover:bg-card/50 transition-colors duration-300">
                          <span className="text-xs md:text-sm font-medium text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile: Compact grid layout */}
                <div className="sm:hidden">
                  <h3 className="text-lg font-bold text-foreground mb-4 text-center">Keahlian Saya</h3>
                  
                  {/* Technical Skills */}
                  <div className="mb-5">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-2 bg-primary/20 rounded-lg mr-2">
                        <Code className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Teknis</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["AI Automasi", "Web Dev", "Design", "Marketing"].map((skill, index) => (
                        <div key={index} className="p-2 bg-card/30 rounded-lg text-center">
                          <span className="text-xs font-medium text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-2 bg-primary/20 rounded-lg mr-2">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Soft Skills</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["Leadership", "Komunikasi", "Kreatif", "Manajemen"].map((skill, index) => (
                        <div key={index} className="p-2 bg-card/30 rounded-lg text-center">
                          <span className="text-xs font-medium text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements/Stats Section */}
        <section className="py-24 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
                Pencapaian & <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">Statistik</span>
              </h2>
              <p className="text-muted-foreground text-lg xl:text-xl max-w-3xl mx-auto">
                Beberapa pencapaian dan pengalaman yang telah saya raih
              </p>
            </div>

            {/* Desktop Stats Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "5+", label: "Proyek Selesai", desc: "Website & Aplikasi" },
                { number: "3+", label: "Tahun Pengalaman", desc: "Pengembangan Digital" },
                { number: "10+", label: "Penghargaan", desc: "Kompetisi & Prestasi" },
                { number: "100%", label: "Kepuasan Klien", desc: "Feedback Positif" }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-8 text-center hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                  <div className="text-4xl xl:text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Stats Marquee */}
            <div className="md:hidden overflow-hidden">
              <div className="flex animate-marquee space-x-8">
                {[
                  { number: "5+", label: "Proyek Selesai" },
                  { number: "3+", label: "Tahun Pengalaman" },
                  { number: "10+", label: "Penghargaan" },
                  { number: "100%", label: "Kepuasan Klien" },
                  { number: "5+", label: "Proyek Selesai" },
                  { number: "3+", label: "Tahun Pengalaman" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 text-center min-w-[200px] flex-shrink-0">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <h3 className="text-sm font-semibold text-foreground">{stat.label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
                Layanan <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">Profesional</span>
              </h2>
              <p className="text-muted-foreground text-lg xl:text-xl max-w-3xl mx-auto mb-8">
                Solusi digital terbaik untuk mengembangkan bisnis Anda
              </p>
              
              <Link to="/portfolio">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Lihat Portfolio
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Desktop Services Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Web Development",
                  description: "Pengembangan website modern, responsif, dan SEO-friendly menggunakan teknologi terbaru"
                },
                {
                  icon: <Palette className="w-8 h-8" />,
                  title: "UI/UX Design",
                  description: "Desain antarmuka yang menarik dan pengalaman pengguna yang optimal untuk semua platform"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "AI Automasi",
                  description: "Implementasi solusi AI untuk otomatisasi proses bisnis dan peningkatan efisiensi"
                }
              ].map((service, index) => (
                <div key={index} className="glass-card p-8 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                  <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile Services Marquee */}
            <div className="md:hidden overflow-hidden">
              <div className="flex animate-marquee space-x-6">
                {[
                  { icon: <Code className="w-6 h-6" />, title: "Web Development", description: "Website modern & responsif" },
                  { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", description: "Desain yang menarik" },
                  { icon: <Zap className="w-6 h-6" />, title: "AI Automasi", description: "Solusi AI terdepan" },
                  { icon: <Code className="w-6 h-6" />, title: "Web Development", description: "Website modern & responsif" },
                  { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", description: "Desain yang menarik" }
                ].map((service, index) => (
                  <div key={index} className="glass-card p-6 min-w-[280px] flex-shrink-0">
                    <div className="text-primary mb-4 p-2 bg-primary/10 rounded-lg w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;