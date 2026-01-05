import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, Container, ShoppingBag, Truck, RefreshCw, Layers, DollarSign, Quote, Instagram, Linkedin, Mail, MapPin, Phone, Menu, X } from 'lucide-react'

// Reveal Component
function Reveal({ children, width = "fit-content", delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div ref={ref} className={`${className} relative overflow-hidden`} style={{ width }}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(75px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Navbar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="z-50 group">
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal' : 'text-brand-cream'}`}>
              SMG<span className="text-brand-gold">.</span>
            </span>
            <span className={`text-[0.6rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? 'text-brand-gray' : 'text-brand-cream/70'}`}>
              Trade Group
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm uppercase tracking-widest font-medium hover:text-brand-gold transition-colors duration-300 ${
                isScrolled ? 'text-brand-charcoal' : 'text-brand-cream'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`flex items-center gap-2 border px-6 py-2 transition-all duration-300 ${
              isScrolled 
                ? 'border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white' 
                : 'border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-charcoal'
            }`}
          >
            <span className="text-xs uppercase tracking-widest">Inquire</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden z-50 hover:text-brand-gold transition-colors ${
             isMobileMenuOpen ? 'text-brand-charcoal' : (isScrolled ? 'text-brand-charcoal' : 'text-brand-cream')
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`fixed inset-0 bg-brand-cream z-40 flex flex-col justify-center items-center transition-all duration-500 transform ${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-serif text-4xl text-brand-charcoal hover:text-brand-gold hover:italic transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-8 px-8 py-3 bg-brand-charcoal text-white text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Component
function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-charcoal text-brand-stone">
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

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  )
}

// Services Component
function Services() {
  const services = [
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
  ]

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
  )
}

// Portfolio Component
function Portfolio() {
  const projects = [
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
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2687&auto=format&fit=crop'
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
  ]

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
  )
}

// About Component
function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
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
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-brand-charcoal/20 z-0 hidden lg:block" />
          </div>

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
  )
}

// Contact Component
function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inventoryType: 'apparel',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    alert('Thank you for your inventory list. Our buying team will review and contact you within 24 hours.')
    setFormState({ name: '', email: '', inventoryType: 'apparel', message: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
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
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-stone pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-16">
          
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

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><a href="#expertise" className="hover:text-brand-gold transition-colors">Liquidation Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-gold transition-colors">Categories We Buy</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Submit Inventory</a></li>
            </ul>
          </div>

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
  )
}

// Main Version5 Component
export default function Version5() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans antialiased selection:bg-brand-gold selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        .font-sans { font-family: 'Manrope', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        :root {
          --brand-black: #121212;
          --brand-charcoal: #1C1917;
          --brand-stone: #E7E5E4;
          --brand-cream: #F5F5F0;
          --brand-gold: #C5A880;
          --brand-gray: #888888;
        }
        
        .bg-brand-black { background-color: var(--brand-black); }
        .bg-brand-charcoal { background-color: var(--brand-charcoal); }
        .bg-brand-stone { background-color: var(--brand-stone); }
        .bg-brand-cream { background-color: var(--brand-cream); }
        .bg-brand-gold { background-color: var(--brand-gold); }
        .bg-brand-gray { background-color: var(--brand-gray); }
        
        .text-brand-black { color: var(--brand-black); }
        .text-brand-charcoal { color: var(--brand-charcoal); }
        .text-brand-stone { color: var(--brand-stone); }
        .text-brand-cream { color: var(--brand-cream); }
        .text-brand-gold { color: var(--brand-gold); }
        .text-brand-gray { color: var(--brand-gray); }
        
        .border-brand-charcoal { border-color: var(--brand-charcoal); }
        .border-brand-gold { border-color: var(--brand-gold); }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--brand-cream); }
        ::-webkit-scrollbar-thumb { background: var(--brand-gold); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #a38a65; }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

