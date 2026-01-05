import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Metrics = () => {
  const sectionRef = useRef(null);
  const metrics = [
    { value: '$500M+', label: 'Inventory Processed', subtext: 'Annual volume' },
    { value: '10,000+', label: 'Successful Transactions', subtext: 'Completed deals' },
    { value: '50+', label: 'Industry Verticals', subtext: 'Categories served' },
    { value: '48hr', label: 'Average Response Time', subtext: 'Quick turnaround' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.metric-item', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0A0A0A] text-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-item text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-blue mb-2">
                {metric.value}
              </div>
              <div className="text-base md:text-lg font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-white/60">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;


