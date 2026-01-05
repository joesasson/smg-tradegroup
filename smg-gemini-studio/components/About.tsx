import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Image & Stats */}
          <div className="lg:col-span-5 relative">
            <Reveal width="100%">
              <div className="aspect-[3/4] relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" 
                  alt="Business strategy and valuation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            {/* Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-brand-charcoal/20 z-0 hidden lg:block" />
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <h2 className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-6">Who We Are</h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mb-8 leading-tight">
                Trusted liquidation buyers. <br/>
                Global reach.
              </h3>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6 text-brand-charcoal/80 font-light leading-relaxed text-lg">
                <p>
                  At SMG Trade Group, we understand that <strong>excess inventory</strong> is a liability that ties up capital and warehouse space. We provide <strong>inventory monetization strategies</strong> that allow companies to pivot quickly. 
                </p>
                <p>
                  As one of the leading <strong>liquidation buyers in the USA</strong>, we purchase closeouts, overstock, and discontinued products across all categories. From <strong>Amazon removal order buyers</strong> to <strong>retail store closing companies</strong>, our partners trust us for fair valuations and immediate payment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 p-8 bg-brand-cream border-l-4 border-brand-gold">
                <Quote className="text-brand-gold mb-4 opacity-50" size={32} />
                <p className="font-serif italic text-xl text-brand-charcoal mb-4">
                  "Our mission is to provide a seamless exit strategy for your inventory, turning today's overstock into tomorrow's opportunity."
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-gray">
                  — The Buying Team, SMG Trade Group
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 border-t border-brand-charcoal/10 pt-8">
                <div>
                  <span className="block text-4xl font-serif text-brand-charcoal mb-1">24h</span>
                  <span className="text-xs uppercase tracking-widest text-brand-gray">Offer Turnaround</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-brand-charcoal mb-1">50M+</span>
                  <span className="text-xs uppercase tracking-widest text-brand-gray">Units Moved</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-brand-charcoal mb-1">Nationwide</span>
                  <span className="text-xs uppercase tracking-widest text-brand-gray">Logistics Network</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};