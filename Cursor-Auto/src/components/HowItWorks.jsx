import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Calculator, Handshake, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Submit Your Inventory',
      description: 'Provide details about your excess inventory, including category, quantity, condition, and location. Our team reviews all submissions within 48 hours.',
    },
    {
      icon: Calculator,
      number: '02',
      title: 'Receive Competitive Offer',
      description: 'We analyze your inventory and provide a fair, market-based offer. Our pricing reflects current market conditions and ensures a quick transaction.',
    },
    {
      icon: Handshake,
      number: '03',
      title: 'Accept & Schedule Pickup',
      description: 'Once you accept our offer, we coordinate logistics and schedule pickup or arrange shipping. We handle all transportation details.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Get Paid Fast',
      description: 'Payment is processed quickly after inventory verification. Most transactions are completed within 5-7 business days of pickup.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-item', {
        opacity: 0,
        x: -30,
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
      id="how-it-works"
      ref={sectionRef}
      className="section-padding bg-navy-50"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-navy-900 mb-4">
            How Inventory Liquidation Works
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Our streamlined process makes it easy to liquidate your excess inventory 
            and turn dead stock into cash.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="step-item">
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-navy-200">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="heading-3 text-navy-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


