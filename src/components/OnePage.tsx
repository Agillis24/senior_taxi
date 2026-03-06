import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { Media } from "./Media";
import { HowItWorks } from "./HowItWorks";
import { Services } from "./Services";
import { Clients } from "./Clients";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

type Props = {
  sectionId: string | null;
};

const DOMAIN = "https://seniortaxiostrava.cz";

const SEO: Record<string, { title: string; description: string; canonical: string; keywords: string }> = {
  "/": {
    title: "Senior Taxi Ostrava | Doprava seniorů pro města a obce",
    description:
      "Bezpečná doprava seniorů v Ostravě a okolí. Spolehlivě, bezpečně a s respektem. Kontakt: info@seniortaxiostrava.cz.",
    canonical: `${DOMAIN}/`,
    keywords:
      "senior taxi ostrava, doprava senioru, preprava senioru, senior taxi moravskoslezsky kraj, bezpecna preprava senioru",
  },
  "/sluzby": {
    title: "Služby | Senior Taxi Ostrava",
    description:
      "Kam Vás odvezeme: zdravotní péče, úřady, nákupy i sociální aktivity. Senior Taxi Ostrava – bezpečně a v klidu.",
    canonical: `${DOMAIN}/sluzby`,
    keywords:
      "sluzby senior taxi, senior doprava k lekari, doprava na urady, doprava na nakupy, socialni doprava senioru",
  },
  "/media": {
    title: "Média | Senior Taxi Ostrava",
    description:
      "Kde o nás psali: výběr článků a reportáží o Senior Taxi a spolupracujících městech a organizacích.",
    canonical: `${DOMAIN}/media`,
    keywords: "media senior taxi, clanky senior taxi, reportaze senior taxi ostrava",
  },
  "/klienti": {
    title: "Klienti | Senior Taxi Ostrava",
    description:
      "Města a organizace, se kterými spolupracujeme. Senior Taxi – důraz na bezpečí, kvalitu a spolehlivost.",
    canonical: `${DOMAIN}/klienti`,
    keywords: "klienti senior taxi, mesta a obce senior taxi, spoluprace senior taxi",
  },
  "/jak-to-funguje": {
    title: "Jak to funguje | Senior Taxi Ostrava",
    description:
      "Jak senior taxi funguje: objednání, vyzvednutí, GPS evidence jízd a měsíční fakturace pro instituce.",
    canonical: `${DOMAIN}/jak-to-funguje`,
    keywords: "jak funguje senior taxi, objednani senior taxi, gps evidence jizd senioru",
  },
  "/kontakt": {
    title: "Kontakt | Senior Taxi Ostrava",
    description:
      "Chcete senior taxi i u Vás? Napište nám na info@seniortaxiostrava.cz. Odpovíme do 24 hodin.",
    canonical: `${DOMAIN}/kontakt`,
    keywords: "kontakt senior taxi ostrava, senior taxi email, poptavka senior taxi",
  },
};

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function OnePage({ sectionId }: Props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);
  const isKnownPath = Object.hasOwn(SEO, path);

  const meta = isKnownPath ? SEO[path] : SEO["/"];
  const robots = isKnownPath
    ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    : "noindex,follow";
  const pageName = meta.title.split("|")[0].trim();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    description: meta.description,
    url: meta.canonical,
    inLanguage: "cs-CZ",
    isPartOf: {
      "@type": "WebSite",
      name: "Senior Taxi Ostrava",
      url: `${DOMAIN}/`,
    },
  };

  const breadcrumbSchema =
    isKnownPath && path !== "/"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Senior Taxi Ostrava",
              item: `${DOMAIN}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: meta.canonical,
            },
          ],
        }
      : null;

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
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content={robots} />
        <meta name="googlebot" content={robots} />

        <link rel="canonical" href={meta.canonical} />
        <link rel="alternate" hrefLang="cs-CZ" href={meta.canonical} />
        <link rel="alternate" hrefLang="cs" href={meta.canonical} />
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:site_name" content="Senior Taxi Ostrava" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:image" content={`${DOMAIN}/og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:image" content={`${DOMAIN}/og.jpg`} />

        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        {breadcrumbSchema ? (
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        ) : null}
      </Helmet>

      <Header />
      <Hero />
      <Media />
      <HowItWorks />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
