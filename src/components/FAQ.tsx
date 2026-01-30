import { ChevronDown } from "lucide-react";
import { useId, useMemo, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function Faq() {
  const baseId = useId();

  const items: FaqItem[] = useMemo(
    () => [
      {
        q: "Jak si objednám jízdu?",
        a: "Objednání je velmi jednoduché! Zavolejte nám vy nebo rodina a domluvíme čas, místo vyzvednutí i cílovou adresu.",
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
        q: "Jsou řidiči proškoleni?",
        a: "Ano. Klademe důraz na bezpečnost, ohleduplnost, komunikaci a pomoc seniorům při nástupu a výstupu.",
      },
      {
        q: "Můžete mě dovézt i do nemocnice nebo k lékaři?",
        a: "Ano. Vozíme seniory na vyšetření, rehabilitace, do nemocnice i na další zdravotní návštěvy.",
      },
      {
        q: "Jak dlouho dopředu musím objednávat?",
        a: "Ideálně co nejdříve. Často to jde i v kratším čase podle kapacit, ale objednání dopředu je jistější.",
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

  // defaultně otevřená první položka
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Nadpis + podnadpis */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Často kladené dotazy
          </h2>
          <p className="text-lg text-gray-600">
            Odpovědi na nejčastější otázky o naší službě
          </p>
        </div>

        {/* Karta */}
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `${baseId}-faq-panel-${i}`;

              return (
                <div key={i} className="border-b border-gray-100 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="
                      w-full flex items-center justify-between gap-6
                      px-6 md:px-8 py-6 text-left
                      transition
                      hover:bg-gray-50
                      focus:outline-none
                      focus-visible:ring-2 focus-visible:ring-blue-600/30
                    "
                  >
                    <span
                      className={`font-semibold text-base md:text-lg transition ${
                        isOpen ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {item.q}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-blue-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Rozbalení (animace přes grid rows + opacity) */}
                  <div
                    id={panelId}
                    role="region"
                    className={`grid transition-all duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 md:px-8 pb-6 transition-opacity duration-200 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
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
