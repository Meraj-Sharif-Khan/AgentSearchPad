import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, CircularProgress } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import useFlightSearch from "../../../hooks/useFlightSearch";
import { useSearchContext } from "../../../contexts/SearchContext";
import { getSearchBody } from "../../../services/searchBody";
import { useSearchResultContext } from "../../../contexts/SearchResultContext";

const SearchButton = () => {
  const { searchData } = useSearchContext();
  const { searchResultData, setSearchResultData } = useSearchResultContext();

  const { loading, flightSearch } = useFlightSearch();
  const handleSearch = async () => {
    try {
      const { data } = await flightSearch(searchData);
      setSearchResultData(data.response);
      localStorage.setItem("searchResult", JSON.stringify(data.response));
      console.log(data.response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleSearch}
      fullWidth
      sx={{
        backgroundColor: "#2A2E2D",
        color: "#fff",
        height: "100%",
        fontSize: "34.53px",
      }}
    >
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <SearchIcon fontSize="" />
      )}
    </Button>
  );
};

export default SearchButton;
