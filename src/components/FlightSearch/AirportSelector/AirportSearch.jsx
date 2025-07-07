import React, { useState } from "react";
import SearchSuggestions from "../../common/SearchSuggestions/SearchSuggestions";
import { Typography } from "@mui/material";
import useGetAirportService from "../../../services/airportService";
import { useSearchContext } from "../../../contexts/SearchContext";

const AirportSearch = ({ setAnchorEl, type, setOrigin, setDestination }) => {
  const [loading, setLoading] = useState(false);
  const [airports, setAirports] = useState([]);
  const { searchData, setSearchData } = useSearchContext();

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
    });
  }

  getFlightData();

  const handleSearch = (searchTerm) => {
    // arrival
    if (type === "origin") {
      setOrigin(searchTerm);

      const updateDeparture = {
        ...searchData,
        segmentsList: [
          { ...searchData.segmentsList[0], departure: searchTerm.code },
        ],
      };

      setSearchData(updateDeparture);
    }

    // destination
    if (type === "destination") {
      setDestination(searchTerm);

      const updateArrival = {
        ...searchData,
        segmentsList: [
          { ...searchData.segmentsList[0], arrival: searchTerm.code },
        ],
      };

      setSearchData(updateArrival);
    }
    setAnchorEl(null);
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
