import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  ArrowRight,
  Package,
  TrendingDown,
  ShieldCheck,
  Globe,
  Menu,
  X,
  Truck,
  Layers,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef([]);
  const [state, handleSubmit] = useForm("xwvpjppa");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    const triggerScript = document.createElement('script');
    triggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    
    script.onload = () => {
      document.head.appendChild(triggerScript);
      triggerScript.onload = () => {
        initAnimations();
      };
    };
    document.head.appendChild(script);

    const initAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      });

      gsap.to(".hero-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      sectionRefs.current.forEach((section) => {
        if (!section) return;
        const reveals = section.querySelectorAll(".reveal");
        gsap.from(reveals, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    };

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F7] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${
        isScrolled 
        ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 h-20 shadow-sm" 
        : "bg-transparent h-24 text-white"
      }`}>
        <div className={`text-xl font-black tracking-tighter uppercase transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
          SMG<span className="text-[#C5A27D]">.</span>Group
        </div>
        
        <div className={`hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
          <a href="#services" className="hover:text-[#C5A27D] transition-colors">Services</a>
          <a href="#sectors" className="hover:text-[#C5A27D] transition-colors">Sectors</a>
          <a href="#about" className="hover:text-[#C5A27D] transition-colors">Expertise</a>
          <a href="#contact" className={`px-6 py-3 border rounded-full transition-all text-[9px] ${
            isScrolled 
            ? "border-black text-black hover:bg-black hover:text-white" 
            : "border-white/30 text-white hover:bg-white hover:text-black"
          }`}>
            Sell Inventory
          </a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-container relative h-screen flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden bg-black pt-24 md:pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics and Inventory"
            className="hero-image w-full h-[120%] object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto">
          <div className="mb-6 reveal">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-[#C5A27D] uppercase tracking-[0.3em] shadow-2xl">
              Institutional Asset Disposition
            </span>
          </div>
          
          <h1 className="hero-title text-[14vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase text-white mb-12 drop-shadow-2xl">
            <span className="block">Liquidate</span>
            <span className="block italic text-transparent stroke-white ml-[5vw] opacity-80" style={{ WebkitTextStroke: '1.5px white' }}>Inventory</span>
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/20 pt-12">
            <p className="max-w-xl text-white text-lg md:text-2xl font-light leading-relaxed drop-shadow-md">
              As premier <strong className="font-bold text-[#C5A27D]">excess stock buyers</strong>, we provide immediate capital for 3PL providers, Amazon FBA removal orders, and global manufacturers.
            </p>
            <div className="flex flex-col gap-4">
              <button className="group flex items-center gap-8 bg-[#C5A27D] text-white px-10 py-6 md:px-12 md:py-7 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl">
                Get Cash Offer <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Intro */}
      <section ref={addToRefs} className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7">
            <h2 className="reveal text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-10">
              Turning <span className="italic font-light">dormant stock</span> into immediate liquidity.
            </h2>
            <p className="reveal text-lg md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
              SMG Trade Group is a leading <strong>inventory liquidation service</strong> specializing in bulk purchases of <strong>obsolete inventory</strong> and abandoned warehouse stock.
            </p>
          </div>
          <div className="lg:col-span-5 pt-4">
            <div className="reveal space-y-12">
              <div className="border-l-2 border-[#C5A27D] pl-8">
                <h4 className="font-bold uppercase tracking-widest text-[11px] mb-4">Nationwide Buying</h4>
                <p className="text-gray-600 text-lg leading-relaxed">Active buyers in <strong>Dallas</strong>, <strong>Atlanta</strong>, <strong>Los Angeles</strong>, and <strong>New York</strong>. We handle all logistics and stock removal.</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-8">
                <h4 className="font-bold uppercase tracking-widest text-[11px] mb-4">Speed & Professionalism</h4>
                <p className="text-gray-600 text-lg leading-relaxed">From valuation to wire transfer in as little as 48 hours. No consignment—just direct, high-volume <strong>bulk inventory buying</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities / Services - UPDATED TO FIX "BLANK BOX" ISSUE */}
      <section id="services" ref={addToRefs} className="py-40 bg-[#0A0A0A] text-white px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div>
              <span className="text-[#C5A27D] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Expertise</span>
              <h3 className="reveal text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                Liquidation <br/>Specialists
              </h3>
            </div>
            <div className="max-w-xs reveal text-gray-400 uppercase text-[10px] tracking-[0.3em] leading-loose">
              Reliable Solutions for:<br/>
              — 3PL Warehouse Liquidations<br/>
              — Amazon FBA Removal Orders<br/>
              — Manufacturing Closeouts
            </div>
          </header>

          <div className="reveal mb-32 w-full h-[60vh] overflow-hidden rounded-[2rem]">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              alt="Global Supply Chain Logistics"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Excess Stock Buyer",
                desc: "We buy bulk quantities of apparel, consumer electronics, and health & beauty products directly.",
                tag: "Direct Purchase",
                icon: <Package size={32} />
              },
              {
                title: "3PL Asset Recovery",
                desc: "Specialized services for fulfillment centers to clear abandoned or unpaid inventory quickly.",
                tag: "Warehouse Solutions",
                icon: <Truck size={32} />
              },
              {
                title: "Amazon FBA Buyouts",
                desc: "Stop paying storage fees. We buy your FBA removal orders and overstock inventory at scale.",
                tag: "FBA Specialist",
                icon: <TrendingDown size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="reveal group p-10 md:p-12 bg-[#161616] border border-white/5 hover:border-[#C5A27D]/30 transition-all rounded-3xl relative overflow-hidden">
                <div className="text-[#C5A27D] mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#C5A27D] mb-4 uppercase">{item.tag}</div>
                <h4 className="text-2xl font-bold mb-6 uppercase tracking-tight">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">{item.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#C5A27D]">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Grid */}
      <section ref={addToRefs} className="py-40 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h3 className="reveal text-4xl font-bold tracking-tight mb-8">Strategic <br/>Buying Hubs</h3>
              <p className="reveal text-gray-500 leading-relaxed text-lg">
                We maintain active operations in key logistics corridors to minimize transport costs and maximize recovery value for our clients.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {[
                { city: "Dallas TX", tag: "Logistics Hub" },
                { city: "Atlanta GA", tag: "Southeast" },
                { city: "Los Angeles", tag: "West Coast" },
                { city: "New Jersey", tag: "Port Newark" },
                { city: "Chicago IL", tag: "Midwest" },
                { city: "Miami FL", tag: "International" }
              ].map((loc, i) => (
                <div key={i} className="reveal group border-l border-gray-100 pl-6">
                  <span className="block text-[10px] text-[#C5A27D] font-bold uppercase tracking-widest mb-2">{loc.tag}</span>
                  <span className="text-lg font-bold uppercase tracking-tight group-hover:text-[#C5A27D] transition-colors cursor-default">{loc.city} Buyers</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Process */}
      <section ref={addToRefs} className="py-40 bg-[#F5F5F4] px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal relative">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              alt="Inventory Inspection"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#0A0A0A] text-white p-12 rounded-2xl hidden md:block max-w-xs shadow-2xl">
              <p className="text-sm font-light leading-relaxed mb-6 italic">"SMG turned our warehouse liabilities into working capital in less than a week."</p>
              <div className="text-[10px] font-bold tracking-widest uppercase">— Global 3PL Director</div>
            </div>
          </div>
          <div className="reveal space-y-12">
            <h3 className="text-5xl font-bold tracking-tighter uppercase">Our Seamless <br/>Process</h3>
            <div className="space-y-10">
              {[
                { n: "01", t: "Submit Manifest", d: "Send your list of excess inventory or removal orders." },
                { n: "02", t: "Fast Valuation", d: "Our buyers review and provide a cash offer within 24-48 hours." },
                { n: "03", t: "Rapid Pickup", d: "We coordinate all logistics and clear your warehouse space." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-2xl font-light text-[#C5A27D] italic">{step.n}</span>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-sm mb-2 group-hover:text-[#C5A27D] transition-colors">{step.t}</h5>
                    <p className="text-gray-500 text-base leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" ref={addToRefs} className="py-40 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="reveal text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                Sell Your <br/><span className="italic text-[#C5A27D]">Stock</span>
              </h2>
              <div className="reveal space-y-6 text-gray-500 uppercase text-xs font-bold tracking-[0.2em]">
                <div className="flex items-center gap-4 hover:text-black transition-colors cursor-pointer"><Mail size={16}/> info@smgtradegroup.com</div>
                <div className="flex items-center gap-4 hover:text-black transition-colors cursor-pointer"><Phone size={16}/> +1 (555) SMG-TRAD</div>
                <div className="flex items-center gap-4"><MapPin size={16}/> North America Operations</div>
              </div>
            </div>
            
            <div className="reveal bg-[#0A0A0A] p-10 md:p-16 rounded-[2rem] text-white shadow-2xl">
              {state.succeeded ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">Thank you!</h4>
                  <p className="text-white/80">
                    Your inquiry has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight">Request a Quote</h4>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                      className="w-full bg-white/5 border-b border-white/20 py-4 px-0 outline-none focus:border-[#C5A27D] transition-colors placeholder:text-white/20"
                      placeholder="NAME"
                      name="name"
                      required
                    />
                    <input
                      className="w-full bg-white/5 border-b border-white/20 py-4 px-0 outline-none focus:border-[#C5A27D] transition-colors placeholder:text-white/20"
                      placeholder="COMPANY"
                      name="company"
                    />
                    <input
                      className="w-full bg-white/5 border-b border-white/20 py-4 px-0 outline-none focus:border-[#C5A27D] transition-colors placeholder:text-white/20"
                      placeholder="EMAIL"
                      name="email"
                      type="email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm"
                    />
                    <textarea
                      className="w-full bg-white/5 border-b border-white/20 py-4 px-0 outline-none focus:border-[#C5A27D] transition-colors placeholder:text-white/20 min-h-[100px]"
                      placeholder="DESCRIBE INVENTORY"
                      name="inventory"
                      required
                    />
                    <ValidationError
                      prefix="Inventory"
                      field="inventory"
                      errors={state.errors}
                      className="text-red-400 text-sm"
                    />
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-[#C5A27D] py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <footer className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
            <div>© 2026 SMG Trade Group LLC. <span className="mx-4">|</span> Reliable Asset Disposition</div>
            <div className="flex gap-12">
              <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
            </div>
          </footer>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[120] transition-all duration-700 flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black">
          <X size={32} />
        </button>
        <div className="flex flex-col gap-8 text-center">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter">Services</a>
          <a href="#sectors" onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter italic">Sectors</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter">Expertise</a>
          <button className="mt-8 bg-[#0A0A0A] text-white px-12 py-6 rounded-full uppercase font-bold tracking-[0.2em] text-xs">Sell Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;