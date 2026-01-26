import { useEffect } from 'react';
import { useAOS } from './hooks/useAOS';
import { useScrollSpy } from './hooks/useScrollSpy';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';

function App() {
  useAOS();
  const sectionIds = ['#hero', '#about', '#resume', '#portfolio', '#services', '#contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    // Handle hash links on page load
    if (window.location.hash) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        if (section) {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Preloader />
      <div className="index-page">
        <Navbar activeSection={activeSection} />
        <main className="main">
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;

