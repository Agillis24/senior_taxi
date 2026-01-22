import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Firma + identifikace */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="font-bold text-xl">Autodoprava Luzar s.r.o.</h3>
              <p className="text-sm text-gray-400">
                Sídlo: Krůčkova 359/7, Svinov, 721 00 Ostrava
              </p>
              <p className="text-sm text-gray-400">IČO: 22241833</p>
              <p className="text-sm text-gray-400">DIČ: CZ22241833</p>
            </div>

            <p className="text-gray-400 mb-4">
              Profesionální dopravní služby pro seniory s důrazem na bezpečnost,
              pohodlí a lidský přístup.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h4 className="font-bold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#media"
                  className="text-gray-400 hover:text-white transition"
                >
                  Média
                </a>
              </li>
              <li>
                <a
                  href="#sluzby"
                  className="text-gray-400 hover:text-white transition"
                >
                  Služby
                </a>
              </li>
              <li>
                <a
                  href="#klienti"
                  className="text-gray-400 hover:text-white transition"
                >
                  Klienti
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-gray-400 hover:text-white transition"
                >
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
                <Mail size={16} />
                <a
                  href="mailto:info@seniortaxiostrava.cz"
                  className="hover:text-white transition"
                >
                  info@seniortaxiostrava.cz
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Krůčkova 359/7, Svinov, 721 00 Ostrava</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Autodoprava Luzar s.r.o. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
