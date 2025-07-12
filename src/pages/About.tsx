import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, GraduationCap, Award } from "lucide-react";

const About = () => {
  const educations = [
    {
      institution: "Institut Teknologi Sumatera",
      degree: "Jurusan Teknologi Produksi dan Industri (S1 Teknik Telekomunikasi)",
      period: "2022 - sekarang"
    },
    {
      institution: "SMA Teladan Way Jepara",
      degree: "MIPA, Lulusan Terbaik Nonakademik",
      period: "2019 - 2022"
    }
  ];

  const skills = {
    teknis: ["AI Automasi", "Pengembang Website", "Desain Grafis", "Digital Marketing", "Administrasi"],
    interpersonal: ["Kepemimpinan", "Empati", "Manajemen", "Komunikasi", "Penyelesaian Masalah", "Kreatif", "Kritis"],
    bahasa: ["Indonesia (Mahir)", "Inggris (Sedang)"],
    software: ["Microsoft 360", "Windsurf", "Git/Github", "Supabase", "Canva", "Capcut", "Notion", "Meta Business Suite"]
  };

  const achievements = [
    "Delegasi Duta Pendidikan Leaders.id - Yayasan Edukasi Harapan Indonesia 2024",
    "Juara 2 Mufest Ikam Lamtim Essay Competition - Ikatan Mahasiswa Lampung Timur 2024",
    "Juara 3 Duta GenRe Institut Teknologi Sumatera - LPSDM ITERA 2023",
    "Duta Inspirasi Indonesia Batch 9 - Yayasan Duta Inspirasi Indonesia 2023",
    "Student Ambassador Diaspora Future Leader Scholarship - Diaspora Mengajar 2022"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang <span className="text-gradient">Saya</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Penggiat Teknologi dan Pengembangan Diri dengan pengalaman luas dalam pengembangan digitalisasi dan organisasi. 
              Terbukti aktif dalam berbagai kegiatan, proyek kolaboratif, dan program magang yang mengasah kemampuan teknis serta interpersonal.
            </p>
          </div>

          {/* Personal Info */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-white">Profil Pribadi</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 mb-2"><strong>Nama:</strong> Robin Syaifuddin</p>
                <p className="text-gray-300 mb-2"><strong>Lokasi:</strong> Lampung Timur, Lampung</p>
                <p className="text-gray-300 mb-2"><strong>Telepon:</strong> +62 887437525303</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2"><strong>Email:</strong> mr.robinsyaifuddin@gmail.com</p>
                <p className="text-gray-300 mb-2"><strong>LinkedIn:</strong> Robin Syaifuddin</p>
                <p className="text-gray-300 mb-2"><strong>Website:</strong> robinsyaifuddin.web.id</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-white">Pendidikan</h2>
            </div>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.institution}</h3>
                  <p className="text-gray-300 mb-1">{edu.degree}</p>
                  <p className="text-primary font-medium">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-white">Keahlian</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Teknis</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.teknis.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">Interpersonal</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.interpersonal.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Bahasa</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.bahasa.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">Software/Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-white">Penghargaan & Pencapaian</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
