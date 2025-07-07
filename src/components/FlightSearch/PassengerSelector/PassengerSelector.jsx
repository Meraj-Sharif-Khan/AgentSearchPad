import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Popover,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PassengerSelector = ({ flightSearchCard }) => {
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    childAges: [],
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorWidth, setAnchorWidth] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorWidth(event.currentTarget.offsetWidth);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "passengerSelector" : undefined;

  const handleChange = (field) => (event) => {
    const value = event.target.value;

    if (field === "children") {
      // Initialize child ages array when children count changes
      const newChildCount = parseInt(value) || 0;
      const currentChildCount = travelers.childAges.length;

      let newChildAges = [...travelers.childAges];
      if (newChildCount > currentChildCount) {
        // Add empty ages for new children
        for (let i = currentChildCount; i < newChildCount; i++) {
          newChildAges.push("");
        }
      } else {
        // Remove extra ages
        newChildAges = newChildAges.slice(0, newChildCount);
      }

      setTravelers({
        ...travelers,
        children: newChildCount,
        childAges: newChildAges,
      });
    } else {
      if ((field === "adults" && value < 1) || value > 11) {
        return;
      } else {
        setTravelers({ ...travelers, [field]: value });
      }
    }
  };

  const handleChildAgeChange = (index) => (event) => {
    const newChildAges = [...travelers.childAges];
    newChildAges[index] = event.target.value;
    setTravelers({ ...travelers, childAges: newChildAges });
  };

  const totalTravelers =
    Number(travelers.adults) +
    Number(travelers.children) +
    Number(travelers.infants);

  return (
    <Box>
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
          <PersonIcon sx={{ color: "#fff" }} />
          <Typography
            whiteSpace={"nowrap"}
            color="#fff"
            textTransform={"capitalize"}
          >
            {totalTravelers <= 9 ? "0" : ""} {totalTravelers}
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
            minHeight: "54.55px",
            backgroundColor: "#fff",
          }}
        >
          <Typography color="#000" textTransform={"capitalize"}>
            {totalTravelers} {totalTravelers === 1 ? "Passenger" : "Passengers"}
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
        {/* Adults Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Adults
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            12 years and above
          </Typography>
          <TextField
            type="number"
            value={travelers.adults}
            onChange={handleChange("adults")}
            inputProps={{ min: 1, max: 10 }}
            size="small"
            sx={{ width: 100 }}
          />
        </Box>

        {/* Children Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Children
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            2–11 years
          </Typography>
          <TextField
            type="number"
            value={travelers.children}
            onChange={handleChange("children")}
            inputProps={{ min: 0, max: 10 }}
            size="small"
            sx={{ width: 100, mb: 2 }}
          />

          {/* Child Age Inputs */}
          {travelers.children > 0 && (
            <Box sx={{ ml: 2 }}>
              {Array.from({ length: travelers.children }).map((_, index) => (
                <TextField
                  key={index}
                  label={`Child ${index + 1} Age`}
                  value={travelers.childAges[index] || ""}
                  onChange={handleChildAgeChange(index)}
                  type="number"
                  inputProps={{ min: 2, max: 11 }}
                  size="small"
                  sx={{ width: 150, mb: 1, mr: 1 }}
                />
              ))}
              {travelers.childAges.some((age) => !age) && (
                <Typography display={"block"} variant="caption" color="error">
                  Please add child age.
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Infants Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Infant
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Below 2 years
          </Typography>
          <TextField
            type="number"
            value={travelers.infants}
            onChange={handleChange("infants")}
            inputProps={{ min: 0, max: travelers.adults }} // Typically infants must be accompanied by adults
            size="small"
            sx={{ width: 100 }}
          />
        </Box>
        <Divider />
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          fullWidth
        >
          Done
        </Button>
      </Popover>
    </Box>
  );
};

export default PassengerSelector;
