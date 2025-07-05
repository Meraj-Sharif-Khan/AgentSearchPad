import {
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import AirportSearch from "./AirportSearch";
import { useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
const AirportSelector = ({ type }) => {
  const [open, setOpen] = useState(false);

  const [origin, setOrigin] = useState({
    city: "Dhaka",
    country: "Bangladesh",
    airportName: "Hazrat Shahjalal International Airport",
    code: "DAC",
  });
  const [destination, setDestination] = useState({
    city: "Cox's Bazar",
    country: "Bangladesh",
    airportName: "Cox's Bazar Airport",
    code: "CXB",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: "54.55px", position: "relative" }}>
      <div onClick={handleOpen}>
        <Box
          sx={{
            width: "100%",
            height: "54.55px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            cursor: "pointer",
            px: "18.7px",
          }}
        >
          <Box sx={{ pr: "18.7px", fontSize: 30 }}>
            {type === "origin" && <FlightTakeoffIcon />}
            {type === "destination" && <FlightLandIcon />}
          </Box>
          <Typography
            fontSize={{ xs: "12.36px", sm: "16px" }}
            fontWeight={500}
            color="initial"
            whiteSpace={"wrape"}
          >
            {type === "origin" && `${origin?.code}, ${origin?.airportName}`}
            {type === "destination" &&
              `${destination?.code}, ${destination?.airportName}`}
          </Typography>
        </Box>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <AirportSearch
            setOpen={setOpen}
            type={type}
            setOrigin={setOrigin}
            setDestination={setDestination}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AirportSelector;
