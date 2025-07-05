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
} from "@mui/material";

const ClassSelector = () => {
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
    <Box>
      {/* Traveler Summary Button */}
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

      {/* Dialog for Passenger Selection */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
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
