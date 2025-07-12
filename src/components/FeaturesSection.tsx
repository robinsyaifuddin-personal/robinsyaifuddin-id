
import { BarChart3, Target, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Customer Insights",
      description: "Get to know your customers better. Unlock actionable insights across all touchpoints with the platform."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Metrics",
      description: "Track all important product data, performance insights and KPIs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Campaign Optimization",
      description: "Measure campaign impact and drive better outcomes and metrics like conversion."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">
            Data of Control Of Your Web
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Business <span className="text-gradient">Application</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Data-driven businesses choose us to reimagine their processes and streamline operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
