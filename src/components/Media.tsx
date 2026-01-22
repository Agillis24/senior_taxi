import { Newspaper, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Media() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      title: 'Senior Taxi: Příklad moderní péče o seniory',
      publication: 'Hospodářské noviny',
      date: 'Říjen 2025',
      url: '#',
    },
    {
      title: 'Bezpečná doprava pro seniory v celé ČR',
      publication: 'iDNES.cz',
      date: 'Září 2025',
      url: '#',
    },
    {
      title: 'Jak pomáhá Senior Taxi starším spoluobčanům',
      publication: 'Aktuálně.cz',
      date: 'Srpen 2025',
      url: '#',
    },
    {
      title: 'Inovativní služby pro starší generaci',
      publication: 'Lidové noviny',
      date: 'Červenec 2025',
      url: '#',
    },
    {
      title: 'GPS monitoring zvyšuje bezpečnost seniorů',
      publication: 'Deník.cz',
      date: 'Červen 2025',
      url: '#',
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
            Kde o nás psali
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>

          <div className="grid md:grid-cols-3 gap-6 px-4">
            {getVisibleArticles().map((article, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <Newspaper size={20} />
                  <span className="font-semibold text-sm">{article.publication}</span>
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
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}