import { Phone } from "lucide-react";
import heroImage from "../assets/hero.png";

export function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Levá část s textem */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Profesionální doprava pro seniory
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Bezpečná a pohodlná přeprava s osobním přístupem
            </p>
            <a
              href="tel:+420123456789"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-5 rounded-lg hover:bg-blue-700 transition gap-3 text-lg font-semibold shadow-lg"
            >
              <Phone size={24} />
              Zavolat +420 123 456 789
            </a>
          </div>

          {/* Pravá část s obrázkem */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-white">
            <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
              <img
                src={heroImage}
                alt="Senior Taxi"
                className="w-full h-full object-contain object-right"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
