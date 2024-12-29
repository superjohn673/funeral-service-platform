import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "your-sentry-dsn",
    environment: process.env.NODE_ENV,
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
