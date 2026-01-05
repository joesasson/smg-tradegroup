import React from 'react';
import { Container, ShoppingBag, Truck, RefreshCw, Layers, DollarSign } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Inventory Liquidation',
    description: 'We are the definitive excess inventory buyer for manufacturers and retailers. From full warehouse buyouts to specific category closeouts, we provide immediate offers to liquidate inventory efficiently.',
    icon: <DollarSign size={32} strokeWidth={1} />,
    keywords: ['Sell Overstock', 'Closeout Buyers', 'Bulk Buyers']
  },
  {
    id: '2',
    title: 'Apparel & Fashion Closeouts',
    description: 'Specialized buyers of excess clothing, footwear, and accessories. We help boutique and enterprise brands sell deadstock clothing and past-season fashion without diluting brand equity.',
    icon: <ShoppingBag size={32} strokeWidth={1} />,
    keywords: ['Sell Clothing Inventory', 'Designer Deadstock', 'Textiles']
  },
  {
    id: '3',
    title: '3PL & Warehouse Solutions',
    description: 'We partner with 3PL providers to resolve abandoned inventory issues. Our teams handle 3PL warehouse liquidation quickly to free up pallet positions and recover storage fees.',
    icon: <Truck size={32} strokeWidth={1} />,
    keywords: ['3PL Inventory Buyers', 'Warehouse Cleanout', 'Logistics']
  },
  {
    id: '4',
    title: 'Amazon FBA Liquidation',
    description: 'Turn stranded FBA assets into cash. We buy Amazon removal orders, bulk returns, and excess FBA inventory, handling all logistics from Amazon fulfillment centers directly to our facilities.',
    icon: <RefreshCw size={32} strokeWidth={1} />,
    keywords: ['Sell Amazon Returns', 'FBA Removal Buyers', 'E-commerce']
  },
  {
    id: '5',
    title: 'Health & Beauty',
    description: 'Trusted buyers of health, beauty, and cosmetics closeouts. We adhere to strict compliance for shelf-pulls, short-dated goods, and overstock personal care products.',
    icon: <Layers size={32} strokeWidth={1} />,
    keywords: ['Cosmetics Liquidation', 'Shelf-Pull', 'Short-Dated']
  },
  {
    id: '6',
    title: 'Corporate Asset Recovery',
    description: 'Custom inventory monetization strategies for obsolete stock. We provide tax write-off vs. liquidation analysis to ensure your business maximizes financial recovery.',
    icon: <Container size={32} strokeWidth={1} />,
    keywords: ['Obsolete Inventory', 'Asset Recovery', 'Write-offs']
  },
];

export const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-brand-cream relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Expertise</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-serif text-4xl lg:text-5xl text-brand-charcoal leading-tight">
                Strategic solutions for <br/>
                <span className="italic text-brand-gray">excess assets.</span>
              </h3>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-brand-charcoal/70 font-light leading-relaxed text-sm md:text-base border-l border-brand-gold/30 pl-6">
              SMG Trade Group turns the burden of <strong>overstock inventory</strong> into an opportunity. Whether you need to <strong>sell closeout clothing</strong> or <strong>liquidate warehouse assets</strong>, our global network ensures the highest recovery value.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="group border-t border-brand-charcoal/10 pt-8 hover:border-brand-gold transition-colors duration-500">
                <div className="text-brand-charcoal/50 mb-6 group-hover:text-brand-gold transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h4>
                <p className="text-brand-charcoal/60 font-light leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((kw) => (
                    <span key={kw} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-brand-stone text-brand-charcoal/80">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};