import { createContext, useContext, useState } from "react";
import { getSearchBody } from "../services/searchBody";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchResultContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchResultContext = () => {
  return useContext(SearchResultContext);
};

export const SearchResultContextProvider = ({ children }) => {
  const [searchResultData, setSearchResultData] = useState();

  return (
    <SearchResultContext.Provider
      value={{ searchResultData, setSearchResultData }}
    >
      {children}
    </SearchResultContext.Provider>
  );
};
