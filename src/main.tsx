import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "uno.css";
import ComposeContext from "./context/index.tsx";
import { CarProvider } from "./context/car.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ComposeContext items={[CarProvider]}>
      <App />
    </ComposeContext>
  </React.StrictMode>
);
