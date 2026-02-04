export function Clients() {
  const clients = [
    {
      name: "Město Valašské Meziříčí",
      logo: new URL("../assets/valmez.png", import.meta.url).href,
      phone: "+420 775 896 947",
      url: "https://www.valasskemezirici.cz/novinky-v-senior-taxi-valmez/d-59680",
    },
    {
      name: "Centrum sociálních služeb Jih",
      logo: new URL("../assets/jih.png", import.meta.url).href,
    },
    {
      name: "Městský obvod Ostrava - Poruba",
      logo: new URL("../assets/poruba.png", import.meta.url).href,
      phone: "+420 602 872 003",
      url: "https://poruba.ostrava.cz/cs/o-porube/senior-expres-poruba",
    },
  ];

  return (
    <section id="klienti" className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((client) => {
            const CardContent = (
              <div className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition h-full">
                {/* Logo box ve stylu Services (badge) */}
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {client.name}
                </h3>

                {client.phone ? (
                  <a
                    href={`tel:${client.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {client.phone}
                  </a>
                ) : (
                  <p className="text-gray-600">
                    Partner služby Senior Taxi
                  </p>
                )}
              </div>
            );

            return client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={client.name}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
