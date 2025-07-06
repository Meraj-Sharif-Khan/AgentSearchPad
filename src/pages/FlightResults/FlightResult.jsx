import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/common/Header/Header";
import BrandHeader from "../../components/common/BrandHeader/BrandHeader";
import FlightSearchCard from "./FlightSearchCard";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import FlightInfoCard from "../../components/common/Card/FlightInfoCard";
const FlightResult = () => {
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
        <FlightInfoCard />
        <FlightInfoCard />
      </Container>
    </>
  );
};

export default FlightResult;
