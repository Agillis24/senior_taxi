import { useLocation } from "react-router-dom";

export function Clients() {
  const location = useLocation();
  const isClientsRoute =
    location.pathname === "/klienti" || location.pathname === "/klienti/";

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
    <section id="klienti" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left: heading + copy */}
          <div className="lg:col-span-5">
            {isClientsRoute ? (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Naši klienti a spolupracující města
              </h1>
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Kdo jsou naši klienti?
              </h2>
            )}

            <p className="mt-4 text-lg text-gray-600">
              Spolupracujeme s městy, městskými obvody a organizacemi, které kladou
              důraz na kvalitu péče, bezpečí a spolehlivost přepravy seniorů.
            </p>

            {isClientsRoute && (
              <div className="mt-6 text-gray-700 leading-relaxed space-y-3">
                <p>
                  Naši partneři využívají Senior Taxi jako praktickou službu pro občany –
                  zejména pro cesty k lékaři, na úřady, na nákupy nebo na společenské aktivity.
                </p>
                <p>
                  Důležitý je pro nás jednoduchý proces objednání, spolehlivost a transparentní
                  evidence jízd. Pokud chcete Senior Taxi zavést i u vás, ozvěte se nám – rádi
                  vysvětlíme možnosti nastavení služby.
                </p>
              </div>
            )}

            {/* Optional small note */}
            <p className="mt-6 text-sm text-gray-500">
              Kliknutím na kartu se u vybraných klientů otevře článek / informace o službě.
            </p>
          </div>

          {/* Right: cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client) => {
                const Card = (
                  <div className="h-full rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 h-24">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-14 w-auto object-contain px-6"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-sm font-semibold text-gray-900">
                        {client.name}
                      </p>

                      {client.phone && (
                        <a
                          href={`tel:${client.phone.replace(/\s+/g, "")}`}
                          className="mt-2 inline-flex items-center justify-center text-sm font-medium text-blue-700 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {client.phone}
                        </a>
                      )}
                    </div>
                  </div>
                );

                return client.url ? (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-2xl"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={client.name}>{Card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
