import { Package, TrendingUp, Warehouse, Users, ShoppingCart, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Package,
      title: 'Inventory Liquidation',
      description: 'Data-backed strategies to move excess inventory, overstock, and closeouts without damaging your brand.',
      keywords: ['Excess Inventory', 'Overstock', 'Closeouts'],
    },
    {
      icon: ShoppingCart,
      title: 'Bulk Inventory Buying',
      description: 'We purchase surplus inventory directly, offering immediate cash and freeing up your warehouse space.',
      keywords: ['Bulk Buyers', 'Cash Offers', 'Quick Sales'],
    },
    {
      icon: Warehouse,
      title: 'Warehouse Liquidation',
      description: 'Complete facility decommissioning and asset recovery services for 3PL providers and distribution centers.',
      keywords: ['3PL Solutions', 'Asset Recovery', 'Facility Closeouts'],
    },
    {
      icon: TrendingUp,
      title: 'Surplus Inventory Solutions',
      description: 'Strategic approaches to monetize aging inventory, deadstock, and slow-moving SKUs profitably.',
      keywords: ['Deadstock', 'Aging Inventory', 'SKU Optimization'],
    },
    {
      icon: Users,
      title: 'Buyer Network Access',
      description: 'Connect with our vetted network of wholesale buyers across clothing, electronics, home goods, and more.',
      keywords: ['Wholesale', 'Vetted Buyers', 'Multiple Categories'],
    },
    {
      icon: FileText,
      title: 'Technology Solutions',
      description: 'Real-time tracking and transparency tools to monitor your inventory liquidation progress.',
      keywords: ['Transparency', 'Tracking', 'Reporting'],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal max-w-3xl mb-16">
          <div className="inline-block px-4 py-2 bg-terracotta/10 text-terracotta rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-deep-navy mb-6 leading-tight">
            Comprehensive liquidation services
          </h2>
          <p className="text-xl text-muted-gray">
            From selling excess inventory to complete warehouse liquidation, we provide turnkey solutions 
            for retailers, manufacturers, and logistics providers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="stagger-parent grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="stagger-child group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-terracotta group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-deep-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-gray mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-warm-white text-charcoal rounded-full font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-terracotta text-white rounded-lg font-semibold text-lg hover:bg-terracotta/90 transition-all duration-200 hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

