import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from 'react';
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<StrictMode>
    <Router><App /></Router>
  </StrictMode>);
});