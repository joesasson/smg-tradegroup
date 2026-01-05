import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inventoryType: 'apparel',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    alert('Thank you for your inventory list. Our buying team will review and contact you within 24 hours.');
    setFormState({ name: '', email: '', inventoryType: 'apparel', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Header Info */}
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl lg:text-6xl text-brand-charcoal mb-8 leading-tight">
                Sell your <br/> inventory today.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-brand-charcoal/70 font-light text-lg mb-12 max-w-md">
                We are buying <strong>excess stock</strong> now. Submit your manifest or product details for a no-obligation cash offer.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-2 mb-12">
                <p className="text-sm uppercase tracking-widest text-brand-gray mb-2">Buying Department</p>
                <p className="text-xl text-brand-charcoal font-serif">purchasing@smgtradegroup.com</p>
                <p className="text-xl text-brand-charcoal font-serif">+1 (310) 555-0123</p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-brand-charcoal/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <Reveal delay={0.1}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-gray">Company / Contact Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-gray">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="purchasing@company.com"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="space-y-2">
                  <label htmlFor="inventoryType" className="text-xs uppercase tracking-widest text-brand-gray">Inventory Category</label>
                  <select
                    id="inventoryType"
                    value={formState.inventoryType}
                    onChange={(e) => setFormState({...formState, inventoryType: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors appearance-none rounded-none"
                  >
                    <option value="apparel">Apparel / Clothing Closeouts</option>
                    <option value="electronics">Consumer Electronics</option>
                    <option value="hba">Health & Beauty (HBA)</option>
                    <option value="amazon">Amazon FBA / Removal Orders</option>
                    <option value="homegoods">Home Goods & General</option>
                    <option value="3pl">3PL / Warehouse Abandoned</option>
                  </select>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-gray">Inventory Details (Qty, Location, Condition)</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    placeholder="E.g. 5000 units of women's apparel in Los Angeles, new in polybag..."
                  />
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <button
                  type="submit"
                  className="w-full bg-brand-charcoal text-white py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Get Cash Offer <ArrowRight size={14} />
                </button>
              </Reveal>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};