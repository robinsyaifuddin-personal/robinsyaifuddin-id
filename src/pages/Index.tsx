import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase, Mail, Code, Palette, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      
      <Header />
      <HeroSection />

      {/* About Preview with Glass Design */}
      <section className="py-20 px-6 stagger-animation relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-primary text-sm uppercase tracking-wider mb-4 font-semibold">
                  Tentang Saya
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Pengalaman & <span className="text-gradient">Keahlian</span>
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Saat ini sedang menempuh pendidikan S1 Teknik Telekomunikasi di Institut Teknologi Sumatera. 
                  Aktif dalam berbagai organisasi dan memiliki pengalaman magang di berbagai perusahaan teknologi.
                </p>
              </div>
              
              <Link to="/about">
                <Button className="modern-button group">
                  <User className="w-5 h-5 mr-2" />
                  Selengkapnya
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <GlassCard className="p-8" variant="hover">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-white font-semibold text-lg">Keahlian Teknis</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["AI Automasi", "Web Development", "Digital Marketing", "UI/UX Design"].map(skill => <span key={skill} className="px-4 py-2 glass rounded-full text-primary font-medium text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-white font-semibold text-lg">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Kepemimpinan", "Komunikasi", "Manajemen", "Problem Solving"].map(skill => <span key={skill} className="px-4 py-2 glass rounded-full text-primary font-medium text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>

                
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-20 px-6 stagger-animation">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pencapaian <span className="text-gradient">Terkini</span>
            </h2>
            <p className="text-white/70 text-lg">Statistik perjalanan karir dan prestasi</p>
          </div>
          
          <div className="stats-grid">
            <GlassCard variant="stats">
              <div className="text-5xl font-bold text-gradient mb-3">15+</div>
              <div className="text-white/80 font-medium">Organisasi</div>
              <div className="text-white/60 text-sm mt-2">Pengalaman berorganisasi</div>
            </GlassCard>
            
            <GlassCard variant="stats">
              <div className="text-5xl font-bold text-gradient mb-3">5</div>
              <div className="text-white/80 font-medium">Proyek Utama</div>
              <div className="text-white/60 text-sm mt-2">Proyek yang telah diselesaikan</div>
            </GlassCard>
            
            <GlassCard variant="stats">
              <div className="text-5xl font-bold text-gradient mb-3">10+</div>
              <div className="text-white/80 font-medium">Pelatihan</div>
              <div className="text-white/60 text-sm mt-2">Pelatihan profesional</div>
            </GlassCard>
            
            <GlassCard variant="stats">
              <div className="text-5xl font-bold text-gradient mb-3">8+</div>
              <div className="text-white/80 font-medium">Sertifikasi</div>
              <div className="text-white/60 text-sm mt-2">Sertifikat keahlian</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 stagger-animation">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-wider mb-4 font-semibold">
              Layanan
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Keahlian <span className="text-gradient">Profesional</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Berbagai layanan dan keahlian yang dapat saya berikan untuk membantu proyekmu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard variant="hover">
              <div className="text-center">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
                <p className="text-white/70 leading-relaxed">
                  Membangun website modern dan responsif dengan teknologi terkini
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="hover">
              <div className="text-center">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
                <p className="text-white/70 leading-relaxed">
                  Merancang antarmuka yang menarik dan pengalaman pengguna yang optimal
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="hover">
              <div className="text-center">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Automation</h3>
                <p className="text-white/70 leading-relaxed">
                  Mengotomatisasi proses bisnis dengan kecerdasan buatan
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;