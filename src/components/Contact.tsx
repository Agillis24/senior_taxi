import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chtěli byste senior taxi i ve Vašem městě?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Kontaktujte nás.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Velký modrý box – email info */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-10 rounded-2xl text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Napište nám</h3>
            <p className="text-blue-100 mb-6 text-lg">Odpovíme do 24 hodin</p>

            <a
              href="mailto:info@seniortaxi.cz"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition gap-3 font-bold text-lg shadow-lg"
            >
              <Mail size={24} />
              info@seniortaxi.cz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
