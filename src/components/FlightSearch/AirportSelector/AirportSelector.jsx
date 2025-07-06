import {
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  Popover,
  Typography,
} from "@mui/material";
import AirportSearch from "./AirportSearch";
import { useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PlaceIcon from "@mui/icons-material/Place";
const AirportSelector = ({ type, flightSearchCard }) => {
  // const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorWidth, setAnchorWidth] = useState(0);

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

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorWidth(event.currentTarget.offsetWidth);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "compact-date-picker" : undefined;

  return (
    <Box sx={{ height: "54.55px", position: "relative" }}>
      <div onClick={handleClick}>
        {flightSearchCard ? (
          <Box
            sx={{
              display: { lg: "flex", xs: "none" },
              flexWrap: "nowrap",
              alignItems: "center",
              cursor: "pointer",
              py: "16.41px",
              px: "25px",
              width: "329.50px",
              border: "2px solid #DADCE0",
              borderRadius: "4.68px",
              overflow: "hidden",
            }}
          >
            <Box sx={{ pr: "18.7px", fontSize: 30, color: "#fff" }}>
              <PlaceIcon />
            </Box>
            <Typography
              fontSize={{ xs: "12.36px", sm: "16px" }}
              fontWeight={500}
              color="#fff"
              whiteSpace={"nowrap"}
            >
              {type === "origin" && `${origin?.code}, ${origin?.airportName}`}
              {type === "destination" &&
                `${destination?.code}, ${destination?.airportName}`}
            </Typography>
          </Box>
        ) : (
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
        )}
      </div>

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
        <AirportSearch
          setAnchorEl={setAnchorEl}
          type={type}
          setOrigin={setOrigin}
          setDestination={setDestination}
        />
      </Popover>

      {/* ----------------- */}
      {/* <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <AirportSearch
            setOpen={setOpen}
            type={type}
            setOrigin={setOrigin}
            setDestination={setDestination}
          />
        </DialogContent>
      </Dialog> */}
    </Box>
  );
};

export default AirportSelector;
