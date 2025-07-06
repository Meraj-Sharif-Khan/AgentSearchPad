import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { FlightContextProvider } from "./contexts/FlightContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FlightContextProvider>
        <App />
      </FlightContextProvider>
    </BrowserRouter>
  </StrictMode>
);
