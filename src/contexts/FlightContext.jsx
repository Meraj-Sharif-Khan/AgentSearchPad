import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FlightContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useFlightContext = () => {
  return useContext(FlightContext);
};

export const FlightContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(
    JSON.parse(localStorage.getItem("search")) || null
  );

  return (
    <FlightContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </FlightContext.Provider>
  );
};
