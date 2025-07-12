
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />

      {/* About Preview */}
      <section className="py-20 px-6 stagger-animation">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                Tentang Saya
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pengalaman & <span className="text-gradient">Keahlian</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Saat ini sedang menempuh pendidikan S1 Teknik Telekomunikasi di Institut Teknologi Sumatera. 
                Aktif dalam berbagai organisasi dan memiliki pengalaman magang di berbagai perusahaan teknologi.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  <User className="w-4 h-4 mr-2" />
                  Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 border border-primary/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Keahlian Teknis</h3>
                    <div className="flex flex-wrap gap-2">
                      {["AI Automasi", "Web Development", "Digital Marketing", "UI/UX Design"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Kepemimpinan", "Komunikasi", "Manajemen", "Problem Solving"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2">Pendidikan</h3>
                    <p className="text-gray-300 text-sm">Institut Teknologi Sumatera</p>
                    <p className="text-gray-400 text-xs">S1 Teknik Telekomunikasi (2022 - sekarang)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-6 stagger-animation">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-400">Organisasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-400">Proyek Utama</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-400">Pelatihan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-gray-400">Sertifikasi</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
