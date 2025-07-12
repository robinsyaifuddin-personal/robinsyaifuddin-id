import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const Portfolio = () => {
  const experiences = [
    {
      title: "Magang Departemen Infrastruktur Teknologi",
      company: "PT. Aerofood Indonesia, Banten",
      period: "Juni 2025 - sekarang",
      achievements: [
        "Berhasil membuat panduan instalasi software dan hardware perangkat komputer dan printer",
        "Melakukan troubleshooting hardware & software serta pemeliharaan jaringan lokal pada kantor pusat"
      ]
    },
    {
      title: "Kepala Departemen Digital",
      company: "Rekaland Indonesia",
      period: "Maret 2025 - sekarang",
      achievements: [
        "Mengelola dan mengembangkan website serta media sosial untuk membangun branding yang kuat dan profesional",
        "Meningkatkan visibilitas online guna mendukung proses pemasaran dan mempermudah penjualan produk"
      ]
    },
    {
      title: "Magang Bidang Kemahasiswaan",
      company: "Institut Teknologi Sumatera, Lampung",
      period: "Juni 2024 - September 2024",
      achievements: [
        "Melakukan koordinasi dalam penyelenggaraan kegiatan melakukan pengolahan administrasi",
        "Pengelolaan media sosial dan tracer study penjaringan data alumni ITERA dan penyesuaian dalam website"
      ]
    }
  ];

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

  const organizations = [
    "CEO & Founder DigiBooster Indonesia, Maret 2025 - sekarang",
    "Anggota Bidang Wasit Esport Indonesia Kabupaten Lampung Timur, Juni 2025 - sekarang",
    "Anggota Komisi 2 Eksternal Medinfo Senat Keluarga Mahasiswa ITERA, Maret 2025 - sekarang",
    "Senator Himpunan Mahasiswa Telekomunikasi Quaestum ITERA, Maret 2025 - sekarang",
    "Kepala Bidang Perencanaan dan Pengembangan GenRe Kabupaten Lampung Timur, Juni 2022 - sekarang"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Portofolio</span> Saya
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pengalaman kerja, proyek, dan kontribusi dalam berbagai organisasi
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Pengalaman Kerja</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-16">
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

          {/* Organizations */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Organisasi</h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="space-y-4">
                {organizations.map((org, index) => (
                  <div key={index} className="flex items-start space-x-3 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300">{org}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
