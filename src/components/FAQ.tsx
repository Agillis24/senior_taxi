import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

export function FAQ() {
  const items = useMemo(
    () => [
      {
        q: "Jak si objednám jízdu?",
        a: "Objednáte ji telefonicky – vy nebo rodina. Domluvíme čas, místo vyzvednutí i cílovou adresu.",
      },
      {
        q: "Kolik stojí jízda?",
        a: "Cena se odvíjí od trasy a případných drobných doplatků. Rádi vám cenu řekneme předem při objednání.",
      },
      {
        q: "Můžu mít vždy stejného řidiče?",
        a: "Pokud je to možné, snažíme se vyhovět. Záleží na dostupnosti řidičů a plánování jízd v daném čase.",
      },
      {
        q: "Jsou řidiči proškolení?",
        a: "Ano – klademe důraz na bezpečnost, ohleduplnost, komunikaci a pomoc seniorům při nástupu/výstupu.",
      },
      {
        q: "Můžete mě dovézt i do nemocnice nebo k lékaři?",
        a: "Ano. Vozíme seniory na vyšetření, rehabilitace, do nemocnice i na další zdravotní návštěvy.",
      },
      {
        q: "Jak dlouho dopředu musím objednávat?",
        a: "Ideálně co nejdříve. Často to jde i v kratším čase podle kapacit, ale dopředu je to jistější.",
      },
      {
        q: "Mohu jet i na delší výlet?",
        a: "Ano, po domluvě. Přizpůsobíme se vašim potřebám včetně čekání na místě nebo více zastávek.",
      },
      {
        q: "Jak probíhá platba?",
        a: "Drobné doplatky lze řešit hotově nebo kartou. U institucí probíhá měsíční fakturace s přehlednou evidencí jízd.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Často kladené dotazy
          </h2>
          <p className="text-lg text-gray-600">
            Odpovědi na nejčastější otázky o naší službě
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
            {items.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className="border-t first:border-t-0 border-gray-100"
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="
                      w-full flex items-center justify-between gap-6
                      px-6 md:px-8 py-6
                      text-left
                      transition
                      hover:bg-gray-50
                      group
                      focus:outline-none
                    "
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-base md:text-lg text-gray-900 group-hover:text-blue-600 transition">
                      {item.q}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-blue-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Plynulé rozbalování přes grid-rows (vypadá líp než max-height) */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.a}
                        </p>
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
