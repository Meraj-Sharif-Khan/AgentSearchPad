import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/common/Header/Header";
import BrandHeader from "../../components/common/BrandHeader/BrandHeader";
import FlightSearchCard from "./FlightSearchCard";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import FlightInfoCard from "../../components/common/Card/FlightInfoCard";
import { useSearchContext } from "../../contexts/SearchContext";
import { useSearchResultContext } from "../../contexts/SearchResultContext";
const FlightResult = () => {
  const [searchData, setSearchData] = useState();
  // const { searchResultData, setSearchResultData } = useSearchResultContext();

  // console.log(searchResultData);

  useEffect(() => {
    const searchResult = localStorage.getItem("searchResult");
    const data = JSON.parse(searchResult);
    setSearchData(data);
  }, []);

  console.log(searchData);

  return (
    <>
      <Box sx={{ display: { md: "none" } }}>
        <BrandHeader />
      </Box>
      <Container>
        <Box sx={{ display: { xs: "none", md: "block" }, pb: "21px" }}>
          <Header />
        </Box>
      </Container>
      {/* flight search card */}
      <Box
        sx={{
          backgroundColor: "#E34825",
          width: "100%",
          py: { xs: "10px", md: "18px" },
        }}
      >
        <Container>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <FlightSearchCard />
          </Box>
          {/* for mobile */}
          <Box
            sx={{
              display: {
                xs: "flex",
                lg: "none",
                alignItems: "center",
                justifyContent: "space-between",
              },
            }}
          >
            <Box>
              <Typography color="#fff">DAC - DXB</Typography>
              <Typography color="#fff">
                26 Sep, 2023 | 1 Traveler | Economy
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{ backgroundColor: "#fff", color: "#E34825" }}
                variant="contained"
                startIcon={<EditSquareIcon />}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        {searchData?.map((e, i) => (
          <FlightInfoCard key={i} carrierName={e.carrierName} />
        ))}
      </Container>
    </>
  );
};

export default FlightResult;
