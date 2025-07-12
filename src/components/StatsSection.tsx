
import { CheckCircle, Eye } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-primary text-sm uppercase tracking-wider mb-4">
              Data Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Improved <span className="text-gradient">decision-making</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Access to up-to-date information enables more effective and analysis, you can make informed decisions with confidence, reducing uncertainty.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Comprehensive Data Visualization
                  </h3>
                  <p className="text-gray-400">
                    With our advanced visualization tools, turn complex datasets into easy-to-understand charts and graphs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Predictive Modeling
                  </h3>
                  <p className="text-gray-400">
                    Leverage machine learning predictive analytics to forecast future trends and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Improvement Rate</p>
                  <div className="text-5xl font-bold text-white">85%</div>
                  <p className="text-gray-400 text-sm">+ 12%</p>
                </div>
                <Eye className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Users</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-20 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Revenue</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Target</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-20 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
