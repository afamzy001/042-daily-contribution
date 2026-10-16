import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { store } from "./App/store.js";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>

);