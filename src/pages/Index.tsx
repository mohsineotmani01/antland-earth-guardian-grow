
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Smooth reveal animation for sections on scroll
    const animateSections = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
          section.classList.add('fade-in');
          section.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateSections);
    
    // Initial call to set up animations
    handleScroll();
    animateSections();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateSections);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      
      {/* Animated scroll indicator */}
      <div 
        className={`fixed bottom-8 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-opacity duration-500 hover:scale-110 ${scrollY > 300 ? 'opacity-80' : 'opacity-0'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </main>
  );
};

export default Index;
