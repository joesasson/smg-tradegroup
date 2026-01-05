import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-stone pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold text-white tracking-tight">
                SMG<span className="text-brand-gold">.</span>
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60">
                Trade Group
              </span>
            </div>
            <p className="text-white/60 font-light leading-relaxed text-sm max-w-xs">
              Premier inventory liquidation buyers. We provide immediate capital solutions for excess inventory, closeouts, and distressed assets nationwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><a href="#expertise" className="hover:text-brand-gold transition-colors">Liquidation Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-gold transition-colors">Categories We Buy</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Submit Inventory</a></li>
            </ul>
          </div>

          {/* Services (SEO Rich) */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">We Buy</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li className="hover:text-white cursor-default">Excess Inventory Clothing</li>
              <li className="hover:text-white cursor-default">Amazon FBA Inventory</li>
              <li className="hover:text-white cursor-default">Health & Beauty Liquidation</li>
              <li className="hover:text-white cursor-default">Electronics Closeouts</li>
              <li className="hover:text-white cursor-default">3PL Abandoned Cargo</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Connect</h4>
            <div className="space-y-6 text-sm font-light text-white/70">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-gold mt-1 shrink-0" />
                <span>1234 Logistics Way<br />Los Angeles, CA 90048</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+1 (310) 555-0123</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>purchasing@smgtradegroup.com</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-brand-charcoal transition-all">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-brand-charcoal transition-all">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-white/30 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} SMG Trade Group. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};