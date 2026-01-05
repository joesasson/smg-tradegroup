import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, Warehouse, Truck, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Package,
      title: 'Excess Inventory Liquidation',
      description: 'Sell your overstock, dead stock, and slow-moving inventory quickly. We buy excess inventory across all categories including clothing, electronics, home goods, and more.',
      keywords: 'excess inventory buyer, liquidate inventory, sell excess inventory',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Liquidation Services',
      description: 'Complete warehouse closeouts and inventory clearance. We handle large volumes and provide fast, professional liquidation services for 3PL providers and fulfillment centers.',
      keywords: 'warehouse liquidation, closeout buyers, 3PL inventory buyers',
    },
    {
      icon: Truck,
      title: 'Bulk Inventory Buyers',
      description: 'We purchase bulk inventory lots in any quantity. From pallet loads to full container shipments, we make competitive offers on your surplus merchandise.',
      keywords: 'bulk inventory buyers, sell overstock inventory, inventory buyers',
    },
    {
      icon: DollarSign,
      title: 'Amazon FBA Inventory Liquidation',
      description: 'Specialized services for Amazon sellers. We buy Amazon removal orders, FBA excess inventory, and returned merchandise in bulk quantities.',
      keywords: 'amazon inventory liquidation, FBA excess inventory buyers, sell amazon returns',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-navy-900 mb-4">
            Professional Inventory Liquidation Services
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We provide comprehensive inventory liquidation solutions for retailers, 
            manufacturers, and logistics providers nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-[#F8FAFC] p-8 rounded-lg border border-navy-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-accent-blue" />
                </div>
                <h3 className="heading-3 text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-body mb-4">
                  {service.description}
                </p>
                <div className="text-sm text-navy-600 italic">
                  {service.keywords}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


