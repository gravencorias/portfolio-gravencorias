import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Resume from "./Resume.tsx";
import "./index.css";

// No router: /resume is the only other page. Netlify serves index.html for it via public/_redirects.
const isResume = window.location.pathname.replace(/\/+$/, "") === "/resume";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isResume ? <Resume /> : <App />}
  </React.StrictMode>
);
