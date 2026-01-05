import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  ArrowRight,
  BarChart3,
  Box,
  ChevronRight,
  Globe2,
  Mail,
  MessageSquare,
  MoveRight,
  ShieldCheck,
  Truck,
  Warehouse,
  Instagram,
  Twitter,
  Linkedin,
  Phone
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-white rotate-45"></div>
      </div>
      <span className="text-white font-bold tracking-tighter text-xl uppercase">SMG Trade Group</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-300">
      <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
      <a href="#services" className="hover:text-blue-400 transition-colors">Solutions</a>
      <a href="#inventory" className="hover:text-blue-400 transition-colors">Inventory</a>
      <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all">
        Contact Us <ArrowRight size={16} />
      </a>
    </div>
  </nav>
);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop" 
          alt="Global Logistics Cargo Ship" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 hero-content text-center max-w-5xl">
        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Premium Inventory Solutions</span>
        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[1] mb-8">
          We turn excess <br /> <span className="text-blue-600">into opportunity.</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
          Global retailers trust SMG to <span className="text-white font-semibold">liquidate inventory</span> with precision. We provide a reliable source for <span className="text-white font-semibold">closeout merchandise</span> and high-quality branded goods.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 group transition-all">
            Become a Buyer <MoveRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full md:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all">
            Sell to Us
          </button>
        </div>
      </div>
    </section>
  );
};

const Metrics = () => (
  <section className="bg-slate-950 border-y border-white/5 py-20">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
        <div className="space-y-3">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em]">Scale & Impact</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">Our reach in numbers.</h2>
        </div>
        <div className="flex flex-col border-l border-white/10 pl-8">
          <span className="text-6xl font-extrabold text-white mb-2 tracking-tighter">100+</span>
          <span className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-none">Global Customers</span>
        </div>
        <div className="flex flex-col border-l border-white/10 pl-8">
          <span className="text-6xl font-extrabold text-white mb-2 tracking-tighter">4</span>
          <span className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-none">Distribution Centers</span>
        </div>
        <div className="flex flex-col border-l border-white/10 pl-8">
          <span className="text-6xl font-extrabold text-white mb-2 tracking-tighter">35+</span>
          <span className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-none">Years of Experience</span>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Inventory solutions <br />to help you grow.
            </h2>
          </div>
          <button className="flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest text-sm border-b-2 border-slate-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all group">
            Browse all services <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Inventory Liquidation",
              desc: "Strategic, data-backed international liquidation designed to move your excess inventory and Amazon FBA stock without hurting your brand equity.",
              icon: <Warehouse size={36} />,
              tag: "B2B Solutions"
            },
            {
              title: "Bulk Inventory Buying",
              desc: "We are direct buyers of excess inventory, closeouts, and overstock. Turn your idle warehouse stock into liquid capital in 48 hours.",
              icon: <Truck size={36} />,
              tag: "Direct Purchase"
            },
            {
              title: "Warehouse Services",
              desc: "Comprehensive warehouse liquidation and facility decommissioning for 3PL providers and retailers across the USA.",
              icon: <BarChart3 size={36} />,
              tag: "Operational Support"
            }
          ].map((service, i) => (
            <div key={i} className="service-card group p-12 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="mb-10 text-blue-600 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <span className="text-blue-600 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4 block">{service.tag}</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">{service.desc}</p>
              <button className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs group-hover:text-blue-600 transition-colors">
                Learn more <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => (
  <section id="about" className="py-32 bg-slate-50 overflow-hidden">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
                alt="Warehouse Storage" 
                className="rounded-3xl aspect-[4/5] object-cover shadow-2xl"
              />
              <div className="bg-blue-600 p-8 rounded-3xl text-white">
                <ShieldCheck size={40} className="mb-4" />
                <h4 className="text-xl font-bold leading-tight">100% Brand <br /> Protection</h4>
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2574&auto=format&fit=crop" 
                alt="Logistics Operations" 
                className="rounded-3xl aspect-[4/5] object-cover shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=2670&auto=format&fit=crop" 
                alt="Product Distribution" 
                className="rounded-3xl aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-xl">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The SMG Advantage</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Relationships first. <br />Deals second.
          </h2>
          <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-light">
            <p>
              We’re not here to just clear out inventory. We’re here to protect your brand, recover maximum value, and simplify the process from start to finish.
            </p>
            <p>
              With global resale channels, real-time reporting, and an in-house tech team, we bring visibility and trust to an industry that often lacks both.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {[
                { title: "Honest & Ethical", desc: "100% transparency in every transaction." },
                { title: "Client Success", desc: "Long-term partnerships, not just deals." },
                { title: "Global Network", desc: "Access to buyers in 40+ countries." },
                { title: "Fast Liquidation", desc: "Turn idle stock into cash in 48 hours." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-1 uppercase tracking-widest text-[11px]">{item.title}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Social Proof</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Trusted by global <br />inventory leaders.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            quote: "Partnering with SMG Trade Group has been a game-changer for how we manage liquidation. Their team operates with a level of trust and transparency that's hard to find in this industry.",
            author: "Dave R.",
            role: "Supply Chain Director",
            company: "Major Retail Chain"
          },
          {
            quote: "SMG was able to offload our entire excess inventory in a matter of hours. Their pricing is competitive and their service is truly outstanding.",
            author: "Joel B.",
            role: "VP of Operations",
            company: "Global Distributor"
          }
        ].map((t, i) => (
          <div key={i} className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100 relative group hover:bg-blue-600 transition-all duration-700 overflow-hidden">
            <div className="absolute top-10 left-10 text-8xl text-blue-100 font-serif leading-none group-hover:text-blue-500/20 transition-colors duration-700">“</div>
            <div className="relative z-10 pt-10">
              <p className="text-2xl text-slate-800 font-medium leading-relaxed mb-12 group-hover:text-white transition-colors duration-700">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xl group-hover:bg-white/20 group-hover:text-white transition-all duration-700">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 group-hover:text-white transition-colors duration-700 tracking-tight">{t.author}</p>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-widest group-hover:text-blue-200 transition-colors duration-700">{t.role} — {t.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [state, handleSubmit] = useForm("xwvpjppa");

  return (
    <section className="py-32 bg-slate-950" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto rounded-[4rem] bg-slate-900 border border-white/5 p-12 md:p-24 overflow-hidden relative shadow-[0_80px_160px_-40px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get Started</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Start the <br />conversation.
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-16">
              We create smart, scalable inventory solutions for retailers and buyers alike. Reach out to us for a free estimate and consultation.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 group cursor-pointer">
                <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Email Address</p>
                  <a href="mailto:sm@smgtradegroup.com" className="text-2xl font-bold text-white hover:text-blue-500 transition-colors tracking-tight">sm@smgtradegroup.com</a>
                </div>
              </div>
              <div className="flex gap-6 group cursor-pointer">
                <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Direct Support</p>
                  <p className="text-2xl font-bold text-white tracking-tight">+1 555-801-6189</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-950 p-10 md:p-16 rounded-[3rem] border border-white/5">
            {state.succeeded ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Thank you!</h3>
                <p className="text-white/80">
                  Your inquiry has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest ml-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest ml-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700"
                    placeholder="john@company.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest ml-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700"
                    placeholder="How can we help?"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-5 rounded-full transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Inquiry'} <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 pt-32 pb-16 text-white border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
              <div className="w-5 h-5 border-[3px] border-white rotate-45"></div>
            </div>
            <span className="text-white font-extrabold tracking-tighter text-3xl uppercase">SMG</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-10 leading-relaxed text-lg font-light">
            The industry standard for strategic inventory liquidation and global asset recovery.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <div key={i} className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all cursor-pointer group">
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-extrabold mb-10 uppercase tracking-[0.2em] text-[10px] text-blue-500">Solutions</h4>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Retailer Liquidation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Asset Recovery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bulk Inventory Buying</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Logistics Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-10 uppercase tracking-[0.2em] text-[10px] text-blue-500">Main Pages</h4>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About SMG</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Inventory Catalog</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-extrabold mb-10 uppercase tracking-[0.2em] text-[10px] text-blue-500">Reach Out</h4>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-blue-500" />
              sm@smgtradegroup.com
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="text-blue-500" />
              +1 555-801-6189
            </li>
            <li className="flex items-center gap-4">
              <Globe2 size={16} className="text-blue-500" />
              New York, USA
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] font-extrabold uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} SMG TRADE GROUP. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

const Footer = () => (
  <footer className="bg-slate-950 pt-32 pb-16 text-white border-t border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
              <div className="w-5 h-5 border-[3px] border-white rotate-45"></div>
            </div>
            <span className="text-white font-extrabold tracking-tighter text-3xl uppercase">SMG</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-10 leading-relaxed text-lg font-light">
            The industry standard for strategic inventory liquidation and global asset recovery.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <div key={i} className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all cursor-pointer group">
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-extrabold mb-10 uppercase tracking-[0.2em] text-[10px] text-blue-500">Solutions</h4>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Retailer Liquidation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Asset Recovery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bulk Inventory Buying</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Logistics Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-10 uppercase tracking-[0.2em] text-[10px] text-blue-500">Main Pages</h4>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About SMG</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Inventory Catalog</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold mb-10 uppercase tracking-[0.2em] text-[10px] text-blue-500">Reach Out</h4>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-blue-500" />
              sm@smgtradegroup.com
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="text-blue-500" />
              +1 555-801-6189
            </li>
            <li className="flex items-center gap-4">
              <Globe2 size={16} className="text-blue-500" />
              New York, USA
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] font-extrabold uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} SMG TRADE GROUP. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <WhyUs />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

