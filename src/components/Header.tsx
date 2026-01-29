import { Mail, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  // Zavři mobilní menu po změně URL
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Výpočet výšky headeru pro scroll offset
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    ro.observe(el);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const h = el.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--header-h", `${h}px`);
  }, [mobileMenuOpen]);

  const NavLinkClasses = "text-gray-700 hover:text-blue-600 transition";

  return (
    <header ref={headerRef} className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* LOGO – vždy hard reload */}
          <a
            href="/"
            className="flex items-center gap-3 text-left"
            aria-label="Přejít na úvodní stránku"
          >
            <img
              src={logo}
              alt="Logo Senior Taxi"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <div>
              <h1 className="font-bold text-xl">Senior Taxi Ostrava</h1>
              <p className="text-xs text-gray-600">
                Pohodlná přeprava seniorů
              </p>
            </div>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/media" className={NavLinkClasses}>
              Média
            </Link>
            <Link to="/sluzby" className={NavLinkClasses}>
              Služby
            </Link>
            <Link to="/klienti" className={NavLinkClasses}>
              Klienti
            </Link>
            <Link to="/kontakt" className={NavLinkClasses}>
              Kontakt
            </Link>
          </nav>

          {/* Kontakt vpravo */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:info@seniortaxiostrava.cz"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Mail size={18} />
              <span>info@seniortaxiostrava.cz</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/media" className={`${NavLinkClasses} text-left`}>
                Média
              </Link>
              <Link to="/sluzby" className={`${NavLinkClasses} text-left`}>
                Služby
              </Link>
              <Link to="/klienti" className={`${NavLinkClasses} text-left`}>
                Klienti
              </Link>
              <Link to="/kontakt" className={`${NavLinkClasses} text-left`}>
                Kontakt
              </Link>

              <a
                href="mailto:info@seniortaxiostrava.cz"
                className="flex items-center gap-2 text-blue-600"
              >
                <Mail size={18} />
                <span>info@seniortaxiostrava.cz</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
