import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chtěli byste senior taxi i u Vás?
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Napište nám – rádi vysvětlíme možnosti spolupráce.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Velký modrý box – email info */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 sm:p-10 rounded-2xl text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold">Napište nám</h3>
            <p className="text-blue-100 mt-2 mb-6 text-lg">
              Odpovíme do 24 hodin
            </p>

            {/* wrapper: vždy vycentruje */}
            <div className="flex justify-center">
              <a
                href="mailto:info@seniortaxiostrava.cz"
                className="
                  w-full max-w-md
                  flex items-center justify-center gap-3
                  bg-white text-blue-600
                  px-6 sm:px-10 py-4
                  rounded-lg
                  hover:bg-gray-100 transition
                  font-bold text-base sm:text-lg
                  shadow-lg
                  mx-auto
                  focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-700
                "
              >
                <Mail size={22} className="shrink-0" />
                <span className="truncate">info@seniortaxiostrava.cz</span>
              </a>
            </div>

            <p className="text-blue-100/90 text-sm mt-5">
              Nebo nám rovnou napište, kde chcete službu zavést (město/obec/organizace).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
