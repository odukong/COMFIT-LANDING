import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import App from "@app/App";
import { AppProviders } from "@app/providers";

import "@app/styles/global.css";

ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
