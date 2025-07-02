import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import tkIcon from "../../../assets/icons/tkIcon.svg";

const CheckBalanceButton = () => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = "1,250.00";

  const handleClick = () => {
    if (!showBalance) {
      setShowBalance(true);
    } else {
      setShowBalance(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: "#e84e2f",
        color: "#fff",
        borderRadius: "999px",
        px: 1.7,
        py: 1,
        maxWidth: "147.25px",
        textTransform: "none",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        gap: 1,
        transition: "all 0.4s ease",
        "&:hover": {
          backgroundColor: "#d94326",
        },
      }}
    >
      {/* Icon */}
      <Box
        component="span"
        sx={{
          transition: "transform 0.4s ease",
          transform: showBalance ? "translateX(95px)" : "translateX(0)",
          display: "flex",
          flexShrink: "0",
          alignItems: "center",
          justifyContent: "center",
          height: "23.75px",
          width: "23.75px",
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
      >
        <img src={tkIcon} alt="" />
      </Box>

      {/* Text container */}
      <Box
        sx={{
          position: "relative",
          width: "120px",
          height: "24px",
        }}
      >
        {/* Check Balance Text */}
        <Typography
          sx={{
            position: "absolute",
            left: 0,
            top: "4px",
            opacity: showBalance ? 0 : 1,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            transform: showBalance ? "translateX(-20px)" : "translateX(0)",
            fontWeight: 500,
            whiteSpace: "nowrap",
            fontSize: "12.35px",
          }}
        >
          Check Balance
        </Typography>

        {/* Balance Value */}
        <Typography
          sx={{
            position: "absolute",
            left: 0,
            top: "4px",
            opacity: showBalance ? 1 : 0,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            transform: showBalance ? "translateX(0)" : "translateX(20px)",
            fontWeight: 500,
            fontSize: "12.35px",
            whiteSpace: "nowrap",
          }}
        >
          {balance}
        </Typography>
      </Box>
    </Button>
  );
};

export default CheckBalanceButton;
