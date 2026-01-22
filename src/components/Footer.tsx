import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo a popis */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">ST</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Senior Taxi</h3>
                <p className="text-sm text-gray-400">Doprava pro seniory</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Profesionální dopravní služby pro seniory s důrazem na bezpečnost, 
              pohodlí a lidský přístup. Využíváme moderní technologie pro vaši bezpečnost.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h4 className="font-bold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#media" className="text-gray-400 hover:text-white transition">
                  Média
                </a>
              </li>
              <li>
                <a href="#sluzby" className="text-gray-400 hover:text-white transition">
                  Služby
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-400 hover:text-white transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:+420123456789" className="hover:text-white transition">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:info@seniortaxi.cz" className="hover:text-white transition">
                  info@seniortaxi.cz
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Hlavní 123, 160 00 Praha 6</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Senior Taxi. Všechna práva vyhrazena.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Ochrana osobních údajů
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Obchodní podmínky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}