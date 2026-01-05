import { Shield, Globe, Zap, CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'We protect your brand integrity while efficiently liquidating excess inventory.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to vetted buyers across the US and international markets.',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Quick turnaround times to free up your capital and warehouse space.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="reveal relative">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
              alt="Business partnership"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-8 rounded-xl shadow-lg max-w-xs">
              <div className="text-4xl font-display font-bold mb-2">20+ Years</div>
              <div className="text-sm opacity-90">Industry Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-terracotta/10 text-terracotta rounded-full text-sm font-semibold">
                Why Choose Us
              </div>
              <h2 className="text-5xl font-display font-bold text-deep-navy leading-tight">
                We're redefining inventory liquidation
              </h2>
              <p className="text-lg text-muted-gray leading-relaxed">
                SMG Trade Group specializes in helping retailers, manufacturers, and 3PL providers 
                move excess inventory, overstock, and closeouts quickly and profitably. Our data-backed 
                approach ensures maximum returns while protecting your brand reputation.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-terracotta" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-deep-navy mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-gray">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#services"
              className="inline-flex items-center text-terracotta font-semibold hover:gap-3 gap-2 transition-all group"
            >
              Learn more about our services
              <CheckCircle className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

