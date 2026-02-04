import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/hero.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [fx, setFx] = useState({ y: 0, scale: 1, opacity: 1 });

  useEffect(() => {
    let raf = 0;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const heroCenter = rect.top + rect.height / 2;
      const viewCenter = vh / 2;
      const dist = heroCenter - viewCenter;

      const t = clamp(dist / (vh * 0.9), -1, 1);

      const y = -t * 18;
      const scale = 1 + (1 - Math.abs(t)) * 0.03;
      const opacity = 0.9 + (1 - Math.abs(t)) * 0.1;

      setFx({ y, scale, opacity });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 items-center md:grid-cols-2">
          {/* Obrázek – na mobilu první */}
          <div className="order-1 md:order-2 relative w-full rounded-2xl overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-blue-100 opacity-60" />

            <div className="w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
              <img
                src={heroImage}
                alt="Senior Taxi"
                loading="eager"
                className="w-full h-full object-contain object-right will-change-transform"
                style={{
                  animation: "heroIntro 900ms ease-out both",
                  transform: `translateY(${fx.y}px) scale(${fx.scale})`,
                  opacity: fx.opacity,
                  transition: "transform 80ms linear, opacity 80ms linear",
                }}
              />
            </div>
          </div>

          {/* Text – na mobilu druhý */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SENIOR TAXI OSTRAVA
            </h1>

            <p className="text-lg text-gray-600 mb-4 max-w-xl">
              Bezpečná a spolehlivá doprava seniorů v Ostravě a okolí.
            </p>

            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-xl">
              S důrazem na lidský přístup, transparentní evidenci jízd a
              spolehlivý provoz pro města a organizace.
            </p>

            <a
              href="tel:+420608771144"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-5 rounded-lg hover:bg-blue-700 transition gap-3 text-lg font-semibold shadow-lg"
            >
              <Phone size={24} aria-hidden="true" />
              +420 608 771 144
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes heroIntro {
            0% { opacity: 0; transform: translateY(12px) scale(0.985); filter: blur(6px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
        `}
      </style>
    </section>
  );
}
