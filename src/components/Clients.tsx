export function Clients() {
  const clients = [
    {
      name: "Město Valašské Meziříčí",
      logo: new URL("../assets/valmez.png", import.meta.url).href,
    },
    {
      name: "Centrum sociálních služeb Jih",
      logo: new URL("../assets/jih.png", import.meta.url).href,
    },
    {
      name: "Městský obvod Ostrava - Poruba",
      logo: new URL("../assets/poruba.png", import.meta.url).href,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kdo jsou naši klienti?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Spolupracujeme s organizacemi, které kladou důraz na kvalitu péče,
            bezpečí a spolehlivost.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center justify-center h-44 md:h-48">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain mb-4"
                  loading="lazy"
                />
                <p className="text-sm text-gray-600 text-center font-medium">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
