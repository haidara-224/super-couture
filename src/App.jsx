import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/contact';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Pricing />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}