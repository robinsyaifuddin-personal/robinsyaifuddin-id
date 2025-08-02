import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mr.robinsyaifuddin@gmail.com",
      link: "mailto:mr.robinsyaifuddin@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telepon",
      value: "+62 887437525303",
      link: "tel:+62887437525303"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Lokasi",
      value: "Lampung Timur, Lampung",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Robin Syaifuddin",
      link: "#"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "robinsyaifuddin.web.id",
      link: "https://robinsyaifuddin.web.id"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/robinsyaifuddin",
      link: "https://github.com/robinsyaifuddin"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi <span className="text-gradient">Saya</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mari berkolaborasi dan berdiskusi tentang proyek atau peluang kerja sama
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300">
                    <div className="text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      {contact.link ? (
                        <a href={contact.link} className="text-white hover:text-primary transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Media Sosial</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300">
                    <div className="text-primary">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{social.label}</p>
                      <a href={social.link} className="text-white hover:text-primary transition-colors">
                        {social.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Nama</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-white"
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-white"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Subjek</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-white"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Pesan</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
