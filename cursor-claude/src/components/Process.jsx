import { PhoneCall, FileSearch, TrendingUp, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: PhoneCall,
      number: '01',
      title: 'Initial Consultation',
      description: 'Contact us with details about your excess inventory. We respond within 24 hours to discuss your specific needs.',
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Inventory Assessment',
      description: 'Our team evaluates your inventory, brand requirements, and liquidation goals to create a custom strategy.',
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Strategic Execution',
      description: 'We connect with our buyer network, negotiate deals, and handle all logistics to maximize your returns.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Fast Payment',
      description: 'Receive payment quickly and clear your warehouse space. We provide full transparency throughout the process.',
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-deep-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-block px-4 py-2 bg-terracotta/20 text-terracotta rounded-full text-sm font-semibold mb-4">
            Our Process
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            How we liquidate your inventory
          </h2>
          <p className="text-xl text-white/70">
            A simple, transparent process designed to get you the best returns in the shortest time possible.
          </p>
        </div>

        {/* Steps */}
        <div className="stagger-parent grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="stagger-child relative">
                {/* Connector Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-white/20 -translate-x-1/2" />
                )}
                
                <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-terracotta/50 transition-all duration-300 hover:scale-105">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center font-display font-bold text-xl">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-terracotta/20 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <Icon className="text-terracotta" size={28} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

