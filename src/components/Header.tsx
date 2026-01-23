import { Mail, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

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

  return (
    <header ref={headerRef} className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Kliknutelné logo + text (scroll na začátek) */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 text-left"
            aria-label="Přejít na začátek stránky"
          >
            <img
              src={logo}
              alt="Logo Senior Taxi"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <div>
              <h1 className="font-bold text-xl">Senior Taxi Ostrava</h1>
              <p className="text-xs text-gray-600">Pohodlná přeprava seniorů</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("media")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Média
            </button>
            <button
              onClick={() => scrollToSection("sluzby")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("klienti")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Klienti
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Kontakt
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:info@seniortaxiostrava.cz"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Mail size={18} />
              <span>info@seniortaxiostrava.cz</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} />
