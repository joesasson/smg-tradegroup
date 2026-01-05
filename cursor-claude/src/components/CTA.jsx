import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal bg-gradient-to-br from-deep-navy to-charcoal rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80"
              alt="Pattern"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                Ready to liquidate your inventory?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                We work with retailers, manufacturers, and logistics teams to create smart, 
                scalable solutions for excess inventory, closeouts, and warehouse liquidation. 
                Let's start the conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white rounded-lg font-semibold text-lg hover:bg-terracotta/90 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="tel:+15558016189"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  <Phone className="mr-2" size={20} />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right - Stats/Trust Badges */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-display font-bold text-terracotta mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-display font-bold text-terracotta mb-2">100%</div>
                <div className="text-white/80">Transparent Process</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-display font-bold text-terracotta mb-2">Fast</div>
                <div className="text-white/80">Payment Terms</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-display font-bold text-terracotta mb-2">Global</div>
                <div className="text-white/80">Buyer Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

