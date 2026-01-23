export function HowItWorks() {
  const steps = [
    {
      title: "Zákazník objedná jízdu",
      description: "Telefonicky vy nebo rodina – domluvíme čas i místo.",
    },
    {
      title: "Řidič přijede včas",
      description: "Na domluvené místo, bez zbytečného čekání.",
    },
    {
      title: "Sledování jízdy v GPS",
      description: "Objednatel (instituce) má k dispozici všechny jízdy ke sledování.",
    },
    {
      title: "Drobné doplatky snadno",
      description: "Hotově nebo kartou – jednoduše a bezpečně.",
    },
    {
      title: "Automatická evidence jízd",
      description: "Každá jízda se uloží do elektronické knihy.",
    },
    {
      title: "Měsíční fakturace",
      description: "Přehledné vyúčtování pro objednatele (instituci).",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jak senior taxi funguje?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jednoduchý proces od objednávky po vyúčtování
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
