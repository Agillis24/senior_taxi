import { Mail } from "lucide-react";
import heroImage from "../assets/hero.png";

export function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Na mobilu: obrázek první, text druhý. Od md výš: 2 sloupce vedle sebe */}
        <div className="grid gap-12 items-center md:grid-cols-2">
          {/* Obrázek – na mobilu první */}
          <div className="order-1 md:order-2 relative w-full rounded-2xl overflow-hidden bg-white">
            <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
              <img
                src={heroImage}
                alt="Senior Taxi"
                className="w-full h-full object-contain object-right"
                loading="eager"
              />
            </div>
          </div>

          {/* Text – na mobilu druhý */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SENIOR TAXI OSTRAVA
            </h1>

            <p className="text-sm md:text-base text-gray-600 mb-8 whitespace-nowrap">
              Opava - Ostrava - Karviná - Havířov - Frýdek-Místek - Krnov - Český
              Těšín - Hlučín - Jeseník - Bohumín - Jablunkov
            </p>

            <a
              href="mailto:info@seniortaxiostrava.cz"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-5 rounded-lg hover:bg-blue-700 transition gap-3 text-lg font-semibold shadow-lg"
            >
              <Mail size={24} />
              info@seniortaxiostrava.cz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
