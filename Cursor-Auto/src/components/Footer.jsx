const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Excess Inventory Liquidation',
      'Warehouse Liquidation',
      'Bulk Inventory Buyers',
      'Amazon FBA Liquidation',
    ],
    industries: [
      'Apparel & Fashion',
      'Electronics',
      'Home Goods',
      'Health & Beauty',
    ],
    locations: [
      'Los Angeles, CA',
      'Dallas, TX',
      'New York, NY',
      'Chicago, IL',
    ],
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">SMG Trade Group</div>
            <p className="text-white/70 mb-6 max-w-md">
              Professional inventory liquidation services for retailers, 
              manufacturers, and 3PL providers nationwide.
            </p>
            <div className="text-sm text-white/60">
              <p>© {currentYear} SMG Trade Group. All rights reserved.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-accent-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a href="#industries" className="hover:text-accent-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.locations.map((link, index) => (
                <li key={index}>
                  <span>{link}</span>
                </li>
              ))}
              <li>
                <span className="text-accent-blue">+ 46 More Cities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-sm text-white/60">
            Professional Inventory Liquidation Services
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

