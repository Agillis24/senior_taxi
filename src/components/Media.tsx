import { Newspaper, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Media() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      title: "Senior taxi ve Valašském Meziříčí má v roce 2026 několik novinek",
      publication: "Televize TVS",
      date: "Leden 2026",
      url: "https://itvs24.cz/valasske-mezirici/senior-taxi-ve-valasskem-mezirici-ma-v-roce-2026-nekolik-novinek",
    },
    {
      title: "Senior taxi Valmez pokračuje, mění provoz i objednání služby",
      publication: "valasskezpravy.cz",
      date: "Prosinec 2025",
      url: "https://valasskezpravy.cz/aktuality/senior-taxi-valmez-pokracuje-meni-provoz-i-objednani-sluzby/",
    },
    {
      title: "Novinky v Senior taxi Valmez",
      publication: "Valašské Meziříčí - oficální web",
      date: "Prosinec 2025",
      url: "https://www.valasskemezirici.cz/novinky-v-senior-taxi-valmez/d-59680",
    },
    {
      title: "Expres z Ostravy-Poruby 27. 3. 2025",
      publication: "Polar TV",
      date: "Březen 2025",
      url: "https://polar.cz/index.php/zpravy/ostrava/ostrava-poruba/11000047942/senior-expres-poruba-ma-za-sebou-rekordni-rok-taxiky-najezdily-pres-62-000-km?cmpscreen",
    },
    {
      title: "Senior Expres Poruba má za sebou rekordní rok. Taxíky najezdily přes 62 000 km",
      publication: "Polar TV",
      date: "Březen 2025",
      url: "https://polar.cz/zpravy/ostrava/ostrava-mesto/11000047901/senior-expres-poruba-ma-za-sebou-rekordni-rok-taxiky-najezdily-pres-62-000-km?utm_source=www.seznam.cz&utm_medium=sekce-z-internetu",
    },
    {
      title: "O senior taxi je v Porubě zájem mezi klienty i mezi řidiči",
      publication: "MORAVSKOSLEZSKÝ deník.cz",
      date: "Únor 2025",
      url: "https://moravskoslezsky.denik.cz/zpravy_region/ostrava-poruba-senior-taxi-sluzba-klienti-ridici-doprava-20250226.html",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const getVisibleArticles = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(articles[(currentSlide + i) % articles.length]);
    }
    return visible;
  };

  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kde o nás psali?
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
            aria-label="Předchozí články"
            type="button"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>

          <div className="grid md:grid-cols-3 gap-6 px-4">
            {getVisibleArticles().map((article, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <Newspaper size={20} />
                  <span className="font-semibold text-sm">
                    {article.publication}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <a
                    href={article.url}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Číst
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
            aria-label="Další články"
            type="button"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
