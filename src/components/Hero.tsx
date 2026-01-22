import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Levá část s textem */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Profesionální doprava pro seniory
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Bezpečná a pohodlná přeprava s osobním přístupem
            </p>
            <a 
              href="tel:+420123456789"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-5 rounded-lg hover:bg-blue-700 transition gap-3 text-lg font-semibold shadow-lg"
            >
              <Phone size={24} />
              Zavolat +420 123 456 789
            </a>
          </div>

          {/* Pravá část s animovanou mapou */}
          <div className="relative h-[500px] bg-white rounded-2xl overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
              {/* Pozadí s jemným gradientem */}
              <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <animate attributeName="x1" values="0%;100%;0%" dur="15s" repeatCount="indefinite"/>
                  <stop offset="0%" stopColor="#dbeafe"/>
                  <stop offset="100%" stopColor="#bfdbfe"/>
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              <rect width="600" height="500" fill="url(#skyGradient)"/>
              
              {/* Silnice - horizontální s animací */}
              <path d="M 0 150 L 600 150" stroke="#94a3b8" strokeWidth="40" fill="none">
                <animate attributeName="stroke" values="#94a3b8;#64748b;#94a3b8" dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M 0 150 L 600 150" stroke="#fff" strokeWidth="3" strokeDasharray="20 15" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="35" dur="2s" repeatCount="indefinite"/>
              </path>
              
              {/* Silnice - vertikální */}
              <path d="M 300 0 L 300 500" stroke="#94a3b8" strokeWidth="40" fill="none">
                <animate attributeName="stroke" values="#94a3b8;#64748b;#94a3b8" dur="5s" repeatCount="indefinite"/>
              </path>
              <path d="M 300 0 L 300 500" stroke="#fff" strokeWidth="3" strokeDasharray="20 15" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="35" dur="2.5s" repeatCount="indefinite"/>
              </path>
              
              {/* Silnice - diagonální */}
              <path d="M 100 350 L 500 350" stroke="#94a3b8" strokeWidth="35" fill="none">
                <animate attributeName="stroke" values="#94a3b8;#64748b;#94a3b8" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M 100 350 L 500 350" stroke="#fff" strokeWidth="3" strokeDasharray="20 15" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="35" dur="1.8s" repeatCount="indefinite"/>
              </path>
              
              {/* GPS body s pulzací */}
              <g filter="url(#shadow)">
                <circle cx="150" cy="150" r="8" fill="#3b82f6">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="250" r="8" fill="#3b82f6">
                  <animate attributeName="r" values="8;12;8" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="450" cy="150" r="8" fill="#3b82f6">
                  <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="400" cy="350" r="8" fill="#3b82f6">
                  <animate attributeName="r" values="8;12;8" dur="2.2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Taxi auto - statické ale s pulzujícím GPS světlem */}
              <g transform="translate(200, 250)" filter="url(#shadow)">
                {/* Karoserie */}
                <rect x="-30" y="-15" width="60" height="30" rx="5" fill="#fbbf24">
                  <animate attributeName="fill" values="#fbbf24;#fcd34d;#fbbf24" dur="3s" repeatCount="indefinite"/>
                </rect>
                {/* Okna */}
                <rect x="-18" y="-10" width="18" height="20" rx="2" fill="#60a5fa"/>
                <rect x="6" y="-10" width="15" height="20" rx="2" fill="#60a5fa"/>
                {/* Kola */}
                <circle cx="-15" cy="15" r="6" fill="#1f2937"/>
                <circle cx="15" cy="15" r="6" fill="#1f2937"/>
                {/* Světlo GPS - pulzující */}
                <circle cx="0" cy="-22" r="5" fill="#3b82f6">
                  <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite"/>
                </circle>
                {/* Detail - nápis TAXI */}
                <text x="-18" y="3" fontSize="10" fontWeight="bold" fill="#1f2937">TAXI</text>
              </g>
              
              {/* Budovy s animací */}
              <g filter="url(#shadow)">
                <rect x="80" y="100" width="40" height="30" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2">
                  <animate attributeName="fill" values="#cbd5e1;#e2e8f0;#cbd5e1" dur="4s" repeatCount="indefinite"/>
                </rect>
                <rect x="420" y="100" width="50" height="30" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2">
                  <animate attributeName="fill" values="#cbd5e1;#e2e8f0;#cbd5e1" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="250" y="400" width="45" height="35" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2">
                  <animate attributeName="fill" values="#cbd5e1;#e2e8f0;#cbd5e1" dur="3.5s" repeatCount="indefinite"/>
                </rect>
                
                {/* Okna v budovách */}
                <rect x="85" y="105" width="6" height="6" fill="#fef3c7">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="94" y="105" width="6" height="6" fill="#fef3c7">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="103" y="105" width="6" height="6" fill="#fef3c7">
                  <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                </rect>
              </g>
              
              {/* Stromy s jemnou animací */}
              <g filter="url(#shadow)">
                <circle cx="500" cy="250" r="18" fill="#86efac">
                  <animate attributeName="r" values="18;20;18" dur="3s" repeatCount="indefinite"/>
                </circle>
                <rect x="495" y="260" width="10" height="25" fill="#78716c"/>
                
                <circle cx="150" cy="400" r="18" fill="#86efac">
                  <animate attributeName="r" values="18;20;18" dur="4s" repeatCount="indefinite"/>
                </circle>
                <rect x="145" y="410" width="10" height="25" fill="#78716c"/>
                
                <circle cx="550" cy="400" r="15" fill="#86efac">
                  <animate attributeName="r" values="15;17;15" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <rect x="545" y="410" width="10" height="20" fill="#78716c"/>
              </g>
              
              {/* GPS signály - kruhy se šířící od bodů */}
              <circle cx="150" cy="150" r="15" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0">
                <animate attributeName="r" values="0;30" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="450" cy="150" r="15" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0">
                <animate attributeName="r" values="0;30" dur="3s" begin="1s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0" dur="3s" begin="1s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}