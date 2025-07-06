import "@fontsource/roboto";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Container } from "@mui/material";
import FlightResult from "./pages/FlightResults/FlightResult";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Container>
        <Dashboard />
      </Container> */}
      {/* <FlightResult /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flightresult" element={<FlightResult />} />
      </Routes>
    </>
  );
}

export default App;
