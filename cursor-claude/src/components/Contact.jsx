import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xwvpjppa");

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@smgtradegroup.com',
      link: 'mailto:hello@smgtradegroup.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 801-6189',
      link: 'tel:+15558016189',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'New York, NY',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-block px-4 py-2 bg-terracotta/10 text-terracotta rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-deep-navy mb-6 leading-tight">
            Let's discuss your inventory needs
          </h2>
          <p className="text-xl text-muted-gray">
            Whether you're looking to sell excess inventory or source bulk goods, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal">
              <h3 className="text-2xl font-display font-semibold text-deep-navy mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = item.link ? (
                    <a
                      href={item.link}
                      className="text-terracotta hover:text-terracotta/80 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-charcoal">{item.content}</span>
                  );

                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-terracotta" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-deep-navy mb-1">{item.title}</div>
                        <div className="text-muted-gray">{content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="reveal bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-display font-semibold text-deep-navy mb-4">
                Service Areas
              </h4>
              <div className="space-y-2 text-muted-gray">
                <p>• Nationwide Coverage (USA)</p>
                <p>• International Buyers</p>
                <p>• 3PL & Warehouse Partners</p>
                <p>• All Product Categories</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3 reveal">
            {state.succeeded ? (
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-deep-navy mb-4">Thank you!</h3>
                <p className="text-muted-gray">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all outline-none"
                      placeholder="john@company.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your inventory needs..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white rounded-lg font-semibold text-lg hover:bg-terracotta/90 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

