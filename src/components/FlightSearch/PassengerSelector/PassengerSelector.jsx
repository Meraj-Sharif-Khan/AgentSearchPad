import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PassengerSelector = ({ flightSearchCard }) => {
  const [open, setOpen] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    childAges: [],
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleOpen}
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
          onClick={handleOpen}
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

      {/* Dialog for Passenger Selection */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Passenger</DialogTitle>
        <Divider />
        <DialogContent>
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
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            fullWidth
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PassengerSelector;
