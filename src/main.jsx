import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SearchContextProvider } from "./contexts/SearchContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { SearchResultContextProvider } from "./contexts/SearchResultContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <SearchResultContextProvider>
          <App />
        </SearchResultContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </StrictMode>
);
