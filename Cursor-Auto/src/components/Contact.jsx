import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [state, handleSubmit] = useForm("xwvpjppa");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-navy-900 to-navy-950 text-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div className="contact-content">
            <h2 className="heading-2 mb-6">
              Ready to Liquidate Your Inventory?
            </h2>
            <p className="text-body text-white/80 mb-8 text-lg">
              Get a free, no-obligation quote on your excess inventory. Our team 
              responds within 48 hours with a competitive offer.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <a href="mailto:info@smgtradegroup.com" className="text-white/80 hover:text-accent-blue-light transition-colors">
                    info@smgtradegroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Call Us</div>
                  <a href="tel:+18005551234" className="text-white/80 hover:text-accent-blue-light transition-colors">
                    1-800-555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Service Areas</div>
                  <div className="text-white/80">
                    Nationwide - We serve all 50 states
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-content">
            {state.succeeded ? (
              <div className="bg-navy-800/50 p-8 rounded-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
                  <p className="text-white/80">
                    Your message has been sent successfully. We'll get back to you within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-navy-800/50 p-8 rounded-lg backdrop-blur-sm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-700 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-700 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="john@company.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-700 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="inventory" className="block text-sm font-medium mb-2">
                    Inventory Details
                  </label>
                  <textarea
                    id="inventory"
                    name="inventory"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-navy-900/50 border border-navy-700 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                    placeholder="Describe your excess inventory (category, quantity, condition, location)"
                  ></textarea>
                  <ValidationError
                    prefix="Inventory"
                    field="inventory"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Get Free Quote'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


