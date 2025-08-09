import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const Portfolio = () => {

  const projects = [
    {
      title: "Digitalisasi Desa: Inovasi Website untuk Transparansi",
      location: "Desa Fajar Baru, Lampung Selatan",
      year: "2025",
      description: "Pengembangan website untuk transparansi, layanan, dan informasi publik desa",
      url: "https://desafajarbaru.web.id"
    },
    {
      title: "Transformasi Digital Pariwisata Lamsel",
      location: "Lampung Selatan",
      year: "2025",
      description: "Pengembangan website untuk destinasi, kecamatan, dan UMKM lokal",
      url: "https://lamselmaju-id.lovable.app"
    },
    {
      title: "Portal Hukum Website Terintegrasi",
      location: "Lampung Selatan",
      year: "2025",
      description: "Website untuk edukasi dan layanan bantuan hukum online Yayayasan Lembaga Bantuan Hukum Merdeka",
      url: "https://ylbh-merdeka.lovable.app"
    },
    {
      title: "Digibooster Indonesia",
      location: "Bandar Lampung",
      year: "2025",
      description: "Platform Layanan Jasa Digital Terbaik untuk membantu bisnis bertransformasi digital dengan solusi komprehensif dan profesional",
      url: "https://digibooster.web.id"
    },
    {
      title: "Pengembangan Desa Eco-edu-tourism",
      location: "Pulau Legundi, Pesawaran",
      year: "2024",
      description: "Berbasis sumberdaya alam lokal dan diversifikasi produk skincare garam rakyat"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div>
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Portofolio</span> Saya
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kumpulan proyek dan karya yang telah saya kembangkan
            </p>
          </div>


          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Proyek</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                project.url ? (
                  <a 
                    key={index} 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer block hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </a>
                ) : (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-5 h-5" />
                    </div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
