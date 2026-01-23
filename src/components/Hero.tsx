import { Phone } from "lucide-react";
import heroImage from "../assets/hero.png";

export function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Na mobilu: obrázek první, text druhý. Od md výš: 2 sloupce vedle sebe */}
        <div className="grid gap-12 items-center md:grid-cols-2">
          {/* Obrázek – na mobilu první */}
          <div className="order-1 md:order-2 relative w-full rounded-2xl overflow-hidden bg-white">
            {/* jemný "glow" overlay (volitelné, vypadá dobře na úvodních fotkách) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-blue-100 opacity-60" />

            <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
              <img
                src={heroImage}
                alt="Senior Taxi"
                loading="eager"
                className="
                  w-full h-full object-contain object-right
                  will-change-transform
                  animate-[heroIntro_900ms_ease-out_both]
                "
              />
            </div>
          </div>

          {/* Text – na mobilu druhý */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SENIOR TAXI OSTRAVA
            </h1>

            <p className="text-sm md:text-base text-gray-600 mb-8 whitespace-nowrap">
              Budujeme spolehlivou dopravu pro seniory s důrazem na bezpečí a
              lidský přístup.
            </p>

            <a
              href="tel:+420608771144"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-5 rounded-lg hover:bg-blue-700 transition gap-3 text-lg font-semibold shadow-lg"
            >
              <Phone size={24} />
              +420 608 771 144
            </a>
          </div>
        </div>
      </div>

      {/* Keyframes jen pro Hero (bez zásahu do globálního CSS) */}
      <style>
        {`
          @keyframes heroIntro {
            0% { opacity: 0; transform: translateY(10px) scale(0.98); filter: blur(6px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
        `}
      </style>
    </section>
  );
}
