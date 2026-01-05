import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, TrendingUp, Users, Package } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1,
      })
        .from('.hero-subtitle', {
          opacity: 0,
          y: 40,
          duration: 0.8,
        }, '-=0.5')
        .from('.hero-cta', {
          opacity: 0,
          y: 30,
          duration: 0.6,
        }, '-=0.4')
        .from('.hero-stats', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
          alt="Shipping containers"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-white via-warm-white/95 to-warm-white/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="hero-title text-6xl lg:text-7xl font-display font-bold text-deep-navy leading-tight text-balance">
              Liquidate Inventory.
              <span className="text-terracotta"> Maximize Returns.</span>
            </h1>
            
            <p className="hero-subtitle text-xl text-muted-gray leading-relaxed max-w-xl">
              Trusted partners for retailers and buyers seeking fast, brand-safe inventory liquidation solutions. 
              We handle excess inventory, overstock, and closeouts with transparency and efficiency.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white rounded-lg font-semibold text-lg hover:bg-terracotta/90 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Sell Your Inventory
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-charcoal text-charcoal rounded-lg font-semibold text-lg hover:bg-charcoal hover:text-white transition-all duration-200"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="hero-stats space-y-2">
                <div className="flex items-center gap-2 text-terracotta">
                  <TrendingUp size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-deep-navy">$50M+</div>
                <div className="text-sm text-muted-gray">Inventory Moved</div>
              </div>
              <div className="hero-stats space-y-2">
                <div className="flex items-center gap-2 text-terracotta">
                  <Users size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-deep-navy">500+</div>
                <div className="text-sm text-muted-gray">Trusted Partners</div>
              </div>
              <div className="hero-stats space-y-2">
                <div className="flex items-center gap-2 text-terracotta">
                  <Package size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-deep-navy">48hr</div>
                <div className="text-sm text-muted-gray">Fast Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Warehouse operations"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-terracotta/10 rounded-2xl -z-10" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-deep-navy/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

