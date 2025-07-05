import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";

const RemoveCity = ({ cityCount, setCityCount }) => {
  const handleRemoveCity = () => {
    if (cityCount > 2) {
      setCityCount(cityCount - 1);
    }
  };
  return (
    <Button
      onClick={() => handleRemoveCity()}
      fullWidth
      sx={{
        backgroundColor: "#2A2E2D",
        color: "#fff",
        height: "100%",
        fontSize: "34.53px",
      }}
    >
      <DeleteIcon fontSize="" />
    </Button>
  );
};

export default RemoveCity;
