export function HowItWorks() {
  const steps = [
    {
      title: 'Senior si objedná jízdu',
      description: 'Telefonicky nebo přes rodinu',
    },
    {
      title: 'Řidič ve sjednaný čas přijede',
      description: 'Včas a na domluvené místo',
    },
    {
      title: 'Jízdu je možné v GPS sledovat',
      description: 'Průběžné sledování trasy',
    },
    {
      title: 'Senior zaplatí drobný poplatek',
      description: 'Hotově nebo kartou',
    },
    {
      title: 'Jízda se zaznamená do el. knihy',
      description: 'Automatické vedení evidence',
    },
    {
      title: 'Jednou měsíčně se fakturuje',
      description: 'Přehledné vyúčtování objednateli',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jak to funguje
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jednoduchý proces od objednávky po vyúčtování
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}