import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
