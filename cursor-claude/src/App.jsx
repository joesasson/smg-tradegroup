import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth reveal animations
    gsap.utils.toArray('.reveal').forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Stagger child animations
    gsap.utils.toArray('.stagger-parent').forEach((parent) => {
      const children = parent.querySelectorAll('.stagger-child');
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
