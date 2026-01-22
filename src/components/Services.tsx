import { Stethoscope, Building2, ShoppingCart, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Zdravotní péče',
      description: 'K lékaři, do nemocnice, na vyšetření i rehabilitaci – s ohledem na potřeby seniora.',
    },
    {
      icon: Building2,
      title: 'Úřady a instituce',
      description: 'Na úřady, do banky, k notáři nebo na poštu – bez stresu a ve vašem tempu.',
    },
    {
      icon: ShoppingCart,
      title: 'Každodenní potřeby',
      description: 'Na nákupy včetně pomoci s odnosem zavazadel.',
    },
    {
      icon: Users,
      title: 'Sociální aktivity',
      description: 'Do centra sociálních služeb, na setkání, případně i na hřbitov – důstojně a spolehlivě.',
    },
  ];

  return (
    <section id="sluzby" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kam všude Vás odvezeme?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Komplexní dopravní pomoc pro každodenní i důležité cesty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
