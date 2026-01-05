import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2070&auto=format&fit=crop"
          alt="Aerial view of shipping containers and cargo port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/70"></div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="container-custom relative z-10 text-center">
        <h1 className="heading-1 text-white mb-6">
          Expert Inventory Liquidation Services
        </h1>
        <p className="text-body text-white/90 max-w-3xl mx-auto mb-8 text-xl md:text-2xl">
          We buy excess inventory, overstock, and closeout merchandise from retailers, 
          manufacturers, and 3PL providers. Turn your dead stock into cash with professional 
          liquidation buyers you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
            Liquidate Your Inventory
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


