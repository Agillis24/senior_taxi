import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA fallback:
// If we came here via /404.html redirect, restore the original path from ?p=
(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");
  if (!p) return;

  url.searchParams.delete("p");

  const original = decodeURIComponent(p);

  const remaining = url.searchParams.toString();
  const joiner = original.includes("?") ? "&" : "?";
  const finalUrl = original + (remaining ? joiner + remaining : "");

  window.history.replaceState(null, "", finalUrl);
})();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
