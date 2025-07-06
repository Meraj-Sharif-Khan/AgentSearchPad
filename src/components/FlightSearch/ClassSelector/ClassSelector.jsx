import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ClassSelector = ({ flightSearchCard }) => {
  const [open, setOpen] = useState(false);
  const [travelClass, setTravelClass] = useState({
    travelClass: "Economy",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleOpen}
        >
          <Typography color="#fff" textTransform={"capitalize"}>
            {travelClass.travelClass}
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
            backgroundColor: "#fff",
            minHeight: "54.55px",
          }}
        >
          <Typography color="#000" textTransform={"capitalize"}>
            {travelClass.travelClass}
          </Typography>
        </Button>
      )}

      {/* Dialog for Passenger Selection */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{ top: 0 }}
      >
        {/* <DialogTitle>Class</DialogTitle> */}
        <Divider />
        <DialogContent>
          {/* Class Selection */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Class
            </Typography>
            <RadioGroup
              value={travelClass.travelClass}
              onChange={handleChange("travelClass")}
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

export default ClassSelector;
