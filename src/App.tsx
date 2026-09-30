import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';

function App() {
  const { showBanner, onAccept, onDecline } = useVisitorTracking();

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

      {/* Cookie / Analytics consent banner */}
      {showBanner && (
        <CookieBanner onAccept={onAccept} onDecline={onDecline} />
      )}
    </div>
  );
}

export default App;
