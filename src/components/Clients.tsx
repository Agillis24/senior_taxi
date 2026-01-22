import { useEffect, useState } from 'react';

export function Clients() {
  const [offset, setOffset] = useState(0);

  const clients = [
    { name: 'Město Praha', logo: '🏛️' },
    { name: 'Domov seniorů Slunečnice', logo: '🏥' },
    { name: 'Charita ČR', logo: '❤️' },
    { name: 'Pečovatelská služba', logo: '🤝' },
    { name: 'Senior Centrum', logo: '👥' },
    { name: 'Městská část Praha 6', logo: '🏢' },
    { name: 'Domov důchodců', logo: '🏠' },
    { name: 'Sociální služby města', logo: '🌟' },
  ];

  // Zdvojnásobíme klienty pro plynulou smyčku
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 0.05;
        // Reset po projetí poloviny (původního pole)
        if (Math.abs(newOffset) >= (100 / clients.length) * clients.length) {
          return 0;
        }
        return newOffset;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naši klienti
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Spolupracujeme s organizacemi, které kladou důraz na kvalitu péče, bezpečí a spolehlivost.
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex gap-8 transition-transform"
            style={{
              transform: `translateX(${offset}%)`,
              width: `${(100 / 5) * duplicatedClients.length}%`,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
                style={{ width: `calc(${100 / duplicatedClients.length}% - 2rem)` }}
              >
                <div className="flex flex-col items-center justify-center h-32">
                  <div className="text-5xl mb-2">{client.logo}</div>
                  <p className="text-sm text-gray-600 text-center font-medium">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
