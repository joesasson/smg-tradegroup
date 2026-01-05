import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50 group">
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-charcoal' : 'text-brand-cream'}`}>
              SMG<span className="text-brand-gold">.</span>
            </span>
            <span className={`text-[0.6rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? 'text-brand-gray' : 'text-brand-cream/70'}`}>
              Trade Group
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden z-50 hover:text-brand-gold transition-colors ${
             isMobileMenuOpen ? 'text-brand-charcoal' : (isScrolled ? 'text-brand-charcoal' : 'text-brand-cream')
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
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
  );
};