import { Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Profesionální doprava pro seniory
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bezpečná a pohodlná přeprava seniorů k lékaři, na nákupy nebo kamkoliv potřebujete. 
              S námi můžete cestovat s klidem a důvěrou.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Objednat jízdu
              </button>
              <a 
                href="tel:+420123456789"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                +420 123 456 789
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Působíme v celé České republice</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1767022705480-1266a3865c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YXhpJTIwZHJpdmVyfGVufDF8fHx8MTc2ODk3NTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profesionální řidič"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
