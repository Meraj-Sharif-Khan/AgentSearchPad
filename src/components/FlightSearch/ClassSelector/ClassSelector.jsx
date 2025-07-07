import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Divider,
  Popover,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ClassSelector = ({ flightSearchCard }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorWidth, setAnchorWidth] = useState(0);
  const [travelClass, setTravelClass] = useState({
    travelClass: "Economy",
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorWidth(event.currentTarget.offsetWidth);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "classSelector" : undefined;

  const handleChange = (field) => (event) => {
    const value = event.target.value;

    setTravelClass({ ...travelClass, [field]: value });
  };

  return (
    <Box
      sx={{
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Traveler Summary Button */}

      {flightSearchCard ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Typography color="#fff" textTransform={"capitalize"}>
            {travelClass.travelClass}
          </Typography>
          <ArrowDropDownIcon sx={{ color: "#fff" }} />
        </Box>
      ) : (
        <Button
          fullWidth
          onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1.5,
            backgroundColor: "#fff",
            minHeight: "54.55px",
          }}
        >
          <Typography color="#000" textTransform={"capitalize"}>
            {travelClass.travelClass}
          </Typography>
        </Button>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            width: anchorWidth,
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            minWidth: 300,
          },
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            Class
          </Typography>
          <RadioGroup
            value={travelClass.travelClass}
            onChange={handleChange("travelClass")}
            onClick={handleClose}
          >
            <FormControlLabel
              value="Economy"
              control={<Radio />}
              label="Economy"
            />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
          </RadioGroup>
        </Box>
      </Popover>
    </Box>
  );
};

export default ClassSelector;
