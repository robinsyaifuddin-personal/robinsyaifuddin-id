import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

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

  const organizations = [
    "CEO & Founder DigiBooster Indonesia, Maret 2025 - sekarang",
    "Anggota Bidang Wasit Esport Indonesia Kabupaten Lampung Timur, Juni 2025 - sekarang",
    "Anggota Komisi 2 Eksternal Medinfo Senat Keluarga Mahasiswa ITERA, Maret 2025 - sekarang",
    "Senator Himpunan Mahasiswa Telekomunikasi Quaestum ITERA, Maret 2025 - sekarang",
    "Kepala Bidang Perencanaan dan Pengembangan GenRe Kabupaten Lampung Timur, Juni 2022 - sekarang"
  ];

  const trainings = [
    "Peserta Leadership Development Program – Ikatan Mahasiswa Lampung Timur 2025",
    "Peserta Latihan Keterampilan Manajemen Mahasiswa TD-ITERA 2024",
    "Peserta Inspiring Leader Camp Batch 3 - Yayasan Duta Inspirasi Indonesia 2023",
    "Peserta International Model United Nations, Online Conference 94.0, - International Global Network 2022",
    "Peserta StartUp Youth Indonesia Leadership Camp, - StartUp Youth Indonesia dan Forum Osis Nasional 2021"
  ];

  const certifications = [
    "Sertifikasi Front Office Agroforestri ITERA - Agropreneur ITERA",
    "Certificate of Competence – Website Creation (habiskerja.com)",
    "Sertifikat WordPress dari Dasar Hingga Mahir (kursusdigital.id)",
    "Sertifikat Digital Marketing dari Dasar Hingga Mahir (kursusdigital.id)",
    "Certificate of Completion – HTML & CSS for Beginners (Learnoverse)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div>
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

          {/* Work Experience */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-white">Pengalaman Kerja</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-6">
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

          {/* Organizations */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold text-white">Organisasi</h2>
            </div>
            <div className="space-y-4">
              {organizations.map((org, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">{org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Training */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-white">Pelatihan</h2>
              </div>
              <div className="space-y-3">
                {trainings.map((training, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{training}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-white">Sertifikasi</h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{cert}</p>
                  </div>
                ))}
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
