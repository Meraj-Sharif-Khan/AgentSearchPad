import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";

const AddCity = ({ cityCount, setCityCount }) => {
  const handleAddCity = () => {
    if (cityCount < 5) {
      setCityCount(cityCount + 1);
    }
  };
  return (
    <Button
      onClick={() => handleAddCity()}
      fullWidth
      sx={{
        backgroundColor: "#2A2E2D",
        color: "#fff",
        height: "100%",
        fontSize: "34.53px",
      }}
    >
      <AddIcon fontSize="" />
    </Button>
  );
};

export default AddCity;
