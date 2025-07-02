import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { FlightContextProvider } from "./contexts/FlightContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlightContextProvider>
      <App />
    </FlightContextProvider>
  </StrictMode>
);
