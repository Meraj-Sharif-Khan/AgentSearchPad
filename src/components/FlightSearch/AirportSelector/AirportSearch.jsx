import React, { useState } from "react";
import SearchSuggestions from "../../common/SearchSuggestions/SearchSuggestions";
import { Typography } from "@mui/material";
import useGetAirportService from "../../../services/airportService";

const AirportSearch = ({ setOpen, type, setOrigin, setDestination }) => {
  const [loading, setLoading] = useState(false);
  const [airports, setAirports] = useState([]);

  const mockOptions = [
    {
      city: "Dhaka",
      country: "Bangladesh",
      airportName: "Hazrat Shahjalal International Airport",
      code: "DAC",
    },
    {
      city: "Cox's Bazar",
      country: "Bangladesh",
      airportName: "Cox's Bazar Airport",
      code: "CXB",
    },
  ];

  const { getAirportService } = useGetAirportService();

  async function getFlightData() {
    const data = await getAirportService();
    const airport = data.map((e, i) => {
      airports.push(e);
      console.log(e.result);
    });
  }

  getFlightData();

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Your search logic here
    if (type === "origin") {
      setOrigin(searchTerm);
    }
    if (type === "destination") {
      setDestination(searchTerm);
    }
    setOpen(false);
  };

  return (
    <div>
      {type === "origin" && (
        <Typography variant="h6" gutterBottom>
          Departure
        </Typography>
      )}
      {type === "destination" && (
        <Typography variant="h6" gutterBottom>
          Destination
        </Typography>
      )}
      <SearchSuggestions
        options={mockOptions}
        loading={loading}
        onSearch={handleSearch}
        placeholder="Search cities..."
        noOptionsText="No matching cities found"
      />
    </div>
  );
};

export default AirportSearch;
