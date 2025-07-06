import { Box, Container } from "@mui/material";
import BrandHeader from "../../components/common/BrandHeader/BrandHeader";
import Header from "../../components/common/Header/Header";
import CategoryTab from "../../components/CategoryTab";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState([
    {
      passengers: [
        { type: "ADT", count: 1, ages: [] },
        { type: "CNN", count: 0, ages: [] },
        { type: "INF", count: 0, ages: [] },
      ],
      cabin: "Economy",
      tripType: "multicity",
      vendorPref: [],
      studentFare: false,
      umrahFare: false,
      seamanFare: false,
      segmentsList: [
        { departure: "DAC", arrival: "DXB", departureDate: "2025-04-08" },
        { departure: "DXB", arrival: "JFK", departureDate: "2025-04-22" },
        { departure: "JFK", arrival: "MED", departureDate: "2025-04-30" },
      ],
      advanceSearch: false,
      classes: [],
      paxDetails: [],
      bookingId: "",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, []);

  return (
    <div>
      <Container>
        <Box sx={{ display: { md: "none" } }}>
          <BrandHeader />
        </Box>
        <Header />
        <Box
          sx={{
            paddingTop: { xs: "120px", sm: "80px", md: "57px" },
          }}
        >
          <CategoryTab />
          {/* <SearchTypeTabs /> */}
        </Box>
      </Container>
    </div>
  );
};

export default Home;
