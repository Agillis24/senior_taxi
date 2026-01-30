import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { Media } from "./Media";
import { HowItWorks } from "./HowItWorks";
import { Services } from "./Services";
import { Clients } from "./Clients";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

type Props = {
  sectionId: string | null;
};

const DOMAIN = "https://seniortaxiostrava.cz";

const SEO: Record<string, { title: string; description: string; canonical: string }> = {
  "/": {
    title: "Senior Taxi Ostrava | Bezpečná přeprava seniorů",
    description:
      "Bezpečná doprava seniorů v Ostravě a okolí. Spolehlivě, bezpečně a s respektem. Kontakt: info@seniortaxiostrava.cz.",
    canonical: `${DOMAIN}/`,
  },
  "/sluzby": {
    title: "Služby | Senior Taxi Ostrava",
    description:
      "Kam Vás odvezeme: zdravotní péče, úřady, nákupy i sociální aktivity. Senior Taxi Ostrava – bezpečně a v klidu.",
    canonical: `${DOMAIN}/sluzby`,
  },
  "/media": {
    title: "Média | Senior Taxi Ostrava",
    description:
      "Kde o nás psali: výběr článků a reportáží o Senior Taxi a spolupracujících městech a organizacích.",
    canonical: `${DOMAIN}/media`,
  },
  "/klienti": {
    title: "Klienti | Senior Taxi Ostrava",
    description:
      "Města a organizace, se kterými spolupracujeme. Senior Taxi – důraz na bezpečí, kvalitu a spolehlivost.",
    canonical: `${DOMAIN}/klienti`,
  },
  "/jak-to-funguje": {
    title: "Jak to funguje | Senior Taxi Ostrava",
    description:
      "Jak senior taxi funguje: objednání, vyzvednutí, GPS evidence jízd a měsíční fakturace pro instituce.",
    canonical: `${DOMAIN}/jak-to-funguje`,
  },
  "/faw": {
    title: "Nejčastější otázky a odpovědi | Senior Taxi Ostrava",
    description:
      "Zajímají Vás odpovědi na nejčastější otázky? Máme je pro Vás.",
    canonical: `${DOMAIN}/jak-to-funguje`,
  },
  "/kontakt": {
    title: "Kontakt | Senior Taxi Ostrava",
    description:
      "Chcete senior taxi i u Vás? Napište nám na info@seniortaxiostrava.cz. Odpovíme do 24 hodin.",
    canonical: `${DOMAIN}/kontakt`,
  },
};

function normalizePath(pathname: string) {
  // sjednotíme /klienti/ -> /klienti (Google nemá rád duplicity)
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function OnePage({ sectionId }: Props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);

  // fallback na homepage
  const meta = SEO[path] ?? SEO["/"];

  useEffect(() => {
    if (!sectionId) return;

    const el = document.getElementById(sectionId);
    if (!el) return;

    const t = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => clearTimeout(t);
  }, [sectionId]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        {/* canonical sjednocený */}
        <link rel="canonical" href={meta.canonical} />

        {/* OG/Twitter */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Helmet>

      <Header />
      <Hero />
      <Media />
      <HowItWorks />
      <Services />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
