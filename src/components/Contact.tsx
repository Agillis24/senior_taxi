import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jsme tu pro vás každý den
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-blue-600" size={28} />
                <p className="font-bold text-xl">Telefon</p>
              </div>
              <a href="tel:+420123456789" className="text-blue-600 hover:text-blue-700 text-2xl font-bold">
                +420 123 456 789
              </a>
              <p className="text-gray-600 mt-2">Po - Ne: 6:00 - 22:00</p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-blue-600" size={28} />
                <p className="font-bold text-xl">Email</p>
              </div>
              <a href="mailto:info@seniortaxi.cz" className="text-blue-600 hover:text-blue-700 text-xl">
                info@seniortaxi.cz
              </a>
              <p className="text-gray-600 mt-2">Odpovíme do 24 hodin</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-10 rounded-2xl text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Potřebujete objednat jízdu?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Volejte nám kdykoliv, jsme tu pro vás 24/7
            </p>
            <a 
              href="tel:+420123456789"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition gap-3 font-bold text-lg shadow-lg"
            >
              <Phone size={24} />
              Zavolat +420 123 456 789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}