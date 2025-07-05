import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";

const SearchButton = () => {
  return (
    <Button
      fullWidth
      sx={{
        backgroundColor: "#2A2E2D",
        color: "#fff",
        height: "100%",
        fontSize: "34.53px",
      }}
    >
      <SearchIcon fontSize="" />
    </Button>
  );
};

export default SearchButton;
