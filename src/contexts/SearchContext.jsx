import { createContext, useContext, useState } from "react";
import { getSearchBody } from "../services/searchBody";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchContextProvider = ({ children }) => {
  const searchBody = getSearchBody();
  const [searchData, setSearchData] = useState(
    searchBody
    // JSON.parse(localStorage.getItem("search")) || null
  );

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
