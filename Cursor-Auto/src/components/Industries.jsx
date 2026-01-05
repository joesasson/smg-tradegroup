import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const sectionRef = useRef(null);

  const industries = [
    {
      title: 'Apparel & Fashion',
      description: 'Clothing liquidation buyers for excess fashion inventory, deadstock clothing, and closeout apparel.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
      keywords: 'clothing liquidation buyers, sell excess clothing, closeout apparel buyers',
    },
    {
      title: 'Electronics & Technology',
      description: 'We buy excess electronics inventory, overstock tech products, and obsolete electronic merchandise.',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop',
      keywords: 'sell excess electronics inventory, electronics liquidation',
    },
    {
      title: 'Home Goods & Furniture',
      description: 'Home goods liquidation services for excess inventory, overstock furniture, and closeout home products.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop',
      keywords: 'home goods liquidation buyers, furniture closeout buyers',
    },
    {
      title: 'Health & Beauty',
      description: 'Health and beauty product liquidation for excess inventory, overstock cosmetics, and personal care items.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop',
      keywords: 'health and beauty liquidation, cosmetics excess inventory',
    },
    {
      title: 'Toys & Games',
      description: 'Toy closeout buyers for excess toy inventory, overstock games, and seasonal merchandise.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2070&auto=format&fit=crop',
      keywords: 'toy closeout buyers, excess toy inventory',
    },
    {
      title: 'Food & Beverage',
      description: 'Short-dated food inventory buyers and beverage closeout services for excess perishable products.',
      image: 'https://images.unsplash.com/photo-1556910103-2c027eb9f9bf?q=80&w=2070&auto=format&fit=crop',
      keywords: 'sell short dated food inventory, food closeout buyers',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.industry-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
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
      id="industries"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-navy-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We provide inventory liquidation services across multiple industries 
            and product categories nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-xl">
                  {industry.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-body text-sm mb-3">
                  {industry.description}
                </p>
                <div className="text-xs text-navy-600 italic">
                  {industry.keywords}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;


