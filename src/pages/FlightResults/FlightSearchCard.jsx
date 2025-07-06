import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PassengerSelector from "../../components/FlightSearch/PassengerSelector/PassengerSelector";
import ClassSelector from "../../components/FlightSearch/ClassSelector/ClassSelector";
import AirportSelector from "../../components/FlightSearch/AirportSelector/AirportSelector";
import JourneyDatePicker from "../../components/FlightSearch/DatePicker/JourneyDatePicker";

const FlightSearchCard = () => {
  const [trips, setTrips] = React.useState("Round Trip");

  const handleTrips = (event) => {
    setTrips(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          height: "19px",
          justifyContent: "space-between",
          alignItems: "center",
          pb: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "19px",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          {/* trips */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120, border: "none" }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={trips}
                onChange={handleTrips}
                label="Age"
                sx={{
                  color: "#fff",
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },

                  "& .MuiSelect-icon": {
                    color: "#fff", // Change to your desired color
                  },
                  "& .MuiSelect-iconOpen": {
                    color: "fff", // Color when dropdown is open
                  },
                }}
              >
                <MenuItem value={"One Way"}>One Way</MenuItem>
                <MenuItem value={"Round Trip"}>Round Trip</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* person */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <PassengerSelector flightSearchCard="flightSearchCard" />
          </Box>

          {/* class */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <ClassSelector flightSearchCard="flightSearchCard" />
          </Box>
        </Box>
        <Box>
          {/* Time Remaining */}
          <Box xs={12} sm={3} sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ mr: 1, color: "#fff" }} />
            <Typography whiteSpace={"nowrap"} variant="body2" color="#fff">
              Time Remaining 22:50
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "15.5px" }}>
        <Box sx={{ display: "flex", gap: "13.29px" }}>
          <AirportSelector flightSearchCard="flightSearchCard" type="origin" />
          <AirportSelector
            flightSearchCard="flightSearchCard"
            type="destination"
          />
        </Box>
        <Box
          sx={{
            display: { lg: "flex", xs: "none" },
            flex: "1",
            border: "2px solid #DADCE0",
            borderRadius: "4.68px",
          }}
        >
          <JourneyDatePicker flightSearchCard="flightSearchCard" />
        </Box>
      </Box>
    </>
  );
};

export default FlightSearchCard;
