import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">ST</span>
            </div>
            <div>
              <h1 className="font-bold text-xl">Senior Taxi</h1>
              <p className="text-xs text-gray-600">Doprava pro seniory</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('media')} className="text-gray-700 hover:text-blue-600 transition">
              Média
            </button>
            <button onClick={() => scrollToSection('sluzby')} className="text-gray-700 hover:text-blue-600 transition">
              Služby
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-blue-600 transition">
              Kontakt
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+420123456789" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Phone size={18} />
              <span>+420 123 456 789</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('media')} className="text-gray-700 hover:text-blue-600 transition text-left">
                Média
              </button>
              <button onClick={() => scrollToSection('sluzby')} className="text-gray-700 hover:text-blue-600 transition text-left">
                Služby
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-blue-600 transition text-left">
                Kontakt
              </button>
              <a href="tel:+420123456789" className="flex items-center gap-2 text-blue-600">
                <Phone size={18} />
                <span>+420 123 456 789</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}