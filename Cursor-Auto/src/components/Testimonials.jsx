import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      quote: 'SMG Trade Group helped us liquidate $2M in excess inventory quickly and professionally. Their team understood our needs and provided a fair offer.',
      company: 'Major Retail Chain',
      location: 'Dallas, TX',
    },
    {
      quote: 'As a 3PL provider, we regularly need to liquidate abandoned inventory. SMG Trade Group is our go-to partner for fast, reliable service.',
      company: 'National 3PL Provider',
      location: 'Los Angeles, CA',
    },
    {
      quote: 'We had overstock from a seasonal line that wasn\'t moving. SMG Trade Group made the liquidation process seamless and we were paid within a week.',
      company: 'Fashion Brand',
      location: 'New York, NY',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-navy-900 text-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-body text-white/80 max-w-2xl mx-auto">
            We've helped hundreds of companies liquidate excess inventory 
            and turn dead stock into cash.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-navy-800 p-8 rounded-lg"
            >
              <Quote className="w-8 h-8 text-accent-blue mb-4" />
              <p className="text-body text-white/90 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-navy-700 pt-4">
                <div className="font-semibold">{testimonial.company}</div>
                <div className="text-sm text-white/60">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


