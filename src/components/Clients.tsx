export function Clients() {
  const clients = [
    {
      name: "Město Valašské Meziříčí",
      logo: new URL("../assets/valmez.png", import.meta.url).href,
      phone: "+420 775 896 947",
      url: "https://www.valasskemezirici.cz/novinky-v-senior-taxi-valmez/d-59680", // uprav na přesný odkaz, pokud chceš jiný
    },
    {
      name: "Centrum sociálních služeb Jih",
      logo: new URL("../assets/jih.png", import.meta.url).href,
    },
    {
      name: "Městský obvod Ostrava - Poruba",
      logo: new URL("../assets/poruba.png", import.meta.url).href,
      phone: "+420 602 872 003",
      url: "https://poruba.ostrava.cz/cs/o-porube/senior-expres-poruba", // uprav na přesný odkaz, pokud chceš jiný
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

        <div className="grid gap-6 md:grid-cols-3">
          {clients.map((client) => {
            const CardInner = (
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

                {client.phone && (
                  <a
                    href={`tel:${client.phone.replace(/\s+/g, "")}`}
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {client.phone}
                  </a>
                )}
              </div>
            );

            return client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                {CardInner}
              </a>
            ) : (
              <div
                key={client.name}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
