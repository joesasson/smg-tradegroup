import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Inventory Liquidation', href: '#services' },
      { label: 'Bulk Inventory Buying', href: '#services' },
      { label: 'Warehouse Liquidation', href: '#services' },
      { label: 'Surplus Solutions', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    Categories: [
      { label: 'Clothing & Apparel', href: '#services' },
      { label: 'Electronics', href: '#services' },
      { label: 'Home Goods', href: '#services' },
      { label: '3PL Services', href: '#services' },
    ],
  };

  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-display font-bold mb-4 inline-block">
              SMG <span className="text-terracotta">Trade Group</span>
            </a>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner for inventory liquidation, excess stock, and warehouse closeouts. 
              Fast, transparent, and brand-safe solutions nationwide.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@smgtradegroup.com" className="flex items-center gap-2 text-white/70 hover:text-terracotta transition-colors">
                <Mail size={18} />
                hello@smgtradegroup.com
              </a>
              <a href="tel:+15558016189" className="flex items-center gap-2 text-white/70 hover:text-terracotta transition-colors">
                <Phone size={18} />
                +1 (555) 801-6189
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={18} />
                New York, NY
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-terracotta transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} SMG Trade Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-terracotta transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-terracotta transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

