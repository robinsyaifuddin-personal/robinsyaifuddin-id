
const PartnersSection = () => {
  const partners = [
    { name: "Chase", logo: "Chase" },
    { name: "Spotify", logo: "Spotify" },
    { name: "Slack", logo: "slack" },
    { name: "Dropbox", logo: "Dropbox" },
    { name: "Webflow", logo: "webflow" },
    { name: "Zoom", logo: "Zoom" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Partnering with top industry experts
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-gray-400 font-semibold text-lg">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
