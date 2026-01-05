import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-charcoal text-brand-stone">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
          alt="Global Logistics and Inventory Liquidation Warehouse" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent" />
      </div>

      <div className="relative z-10 h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-4xl mt-12">
          <Reveal delay={0.2}>
            <p className="text-brand-gold uppercase tracking-[0.25em] text-sm md:text-base font-medium mb-6">
              Premier Excess Inventory Buyers
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-brand-cream">
              Transform assets. <br />
              <span className="italic font-light text-white/80">Recover capital.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="max-w-xl text-lg text-white/70 font-light leading-relaxed mb-12 border-l border-brand-gold pl-6">
              SMG Trade Group is the industry leader in <strong>inventory liquidation services</strong>. We help brands, retailers, and 3PLs <strong>liquidate inventory</strong> immediately—turning overstock, closeouts, and obsolete stock into liquid capital with speed and discretion.
            </p>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="px-8 py-4 bg-brand-gold text-brand-charcoal text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 text-center">
                Sell Your Inventory
              </a>
              <a href="#expertise" className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 text-center">
                Our Capabilities
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};