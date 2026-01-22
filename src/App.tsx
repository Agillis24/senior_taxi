import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Media } from './components/Media';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Media />
      <HowItWorks />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}