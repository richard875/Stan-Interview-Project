import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { store } from "./redux/Store";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
