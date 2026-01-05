import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Fashion & Apparel',
    category: 'Clothing Liquidation',
    location: 'Nationwide',
    year: 'Ongoing',
    description: 'We are premier clothing liquidation buyers, handling branded clothing closeouts, luxury apparel overstock, and designer deadstock. We protect brand integrity while clearing past-season SKU lists.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Consumer Electronics',
    category: 'Tech Closeouts',
    location: 'Global',
    year: 'Ongoing',
    description: 'Maximize recovery on obsolete models and open-box returns. We buy excess electronics inventory including mobile accessories, audio equipment, and small appliances in bulk.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Health & Beauty',
    category: 'HBA Liquidation',
    location: 'USA / Canada',
    year: 'Ongoing',
    description: 'We purchase shelf-pull cosmetics, skincare, and personal care items. Our team manages sensitive expiry dates and brand restrictions with complete compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Home Goods & General',
    category: 'General Merchandise',
    location: 'USA',
    year: 'Ongoing',
    description: 'From furniture to kitchenware, we are the go-to home goods liquidation buyers for major retailers closing stores or offloading seasonal overstock.',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-brand-charcoal text-brand-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <Reveal>
            <h2 className="font-serif text-4xl lg:text-6xl text-white">
              Sectors & Categories
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase text-xs tracking-[0.2em] mt-8 md:mt-0">
              Get A Valuation <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 overflow-hidden">
                <Reveal width="100%" delay={0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal/50">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Reveal>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <Reveal delay={0.3}>
                  <div className="flex items-center gap-4 text-brand-gold text-xs uppercase tracking-widest mb-6">
                    <span>{project.category}</span>
                    <span className="w-8 h-[1px] bg-brand-gold/50"></span>
                    <span>{project.location}</span>
                  </div>
                </Reveal>
                
                <Reveal delay={0.4}>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                </Reveal>
                
                <Reveal delay={0.5}>
                  <p className="text-white/60 font-light leading-relaxed mb-8 border-l border-white/10 pl-6">
                    {project.description}
                  </p>
                </Reveal>

                <Reveal delay={0.6}>
                  <a href="#contact" className="flex items-center gap-3 text-sm text-white hover:text-brand-gold transition-colors group/btn">
                    <span className="uppercase tracking-widest">Liquidate This Category</span>
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center md:hidden">
           <a href="#contact" className="inline-flex items-center gap-2 text-brand-gold uppercase text-xs tracking-[0.2em]">
              Get A Valuation <ArrowRight size={14} />
            </a>
        </div>
      </div>
    </section>
  );
};