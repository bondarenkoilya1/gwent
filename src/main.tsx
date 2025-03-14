import { createRoot } from "react-dom/client";

import { App } from "src/App";

import { Providers } from "src/providers";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
