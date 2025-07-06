import { Box, Button, Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import bimanIcon from "../../../assets/icons/logoBiman.svg";
import ErrorIcon from "@mui/icons-material/Error";
import LuggageIcon from "@mui/icons-material/Luggage";
import iconLine from "../../../assets/icons/iconLine.svg";
const FlightInfoCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: "14px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "11px 18.31px",
            borderRadius: "8px",
            width: "100%",
            maxWidth: { xs: "550px", lg: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {/* start flight name and logo  */}
            <Box sx={{ height: "32px", display: "flex" }}>
              <Box>
                <Avatar
                  alt="Biman Logo"
                  src={bimanIcon}
                  sx={{ width: 32, height: 32, mr: "13px" }}
                />
              </Box>
              <Box>
                <Typography fontWeight={500} fontSize={"11.9px"}>
                  Biman Bangladesh
                </Typography>
                <Typography color="#E34825" fontSize={"8.92px"}>
                  AS 458
                </Typography>
              </Box>
            </Box>
            {/*end flight name and logo */}

            {/* start Non Refundable & Baggageinfo */}

            <Box sx={{ order: { lg: 3 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6.95px",
                  mb: "5.26px",
                }}
              >
                <ErrorIcon
                  sx={{ color: "#E34825", height: "10.73px", width: "10.73px" }}
                />
                <Typography
                  color="#E34825"
                  fontSize={"8.84px"}
                  lineHeight={"100%"}
                >
                  Non Refundable
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6.95px",
                }}
              >
                <LuggageIcon
                  sx={{ color: "#5F6368", height: "10.73px", width: "10.73px" }}
                />
                <Typography
                  color="#5F6368"
                  fontSize={"8.84px"}
                  lineHeight={"100%"}
                >
                  Baggage 25 KG
                </Typography>
              </Box>
            </Box>
            {/* end Non Refundable & Baggageinfo */}
            {/* start flight route info */}
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", lg: "387.78px" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "387.78px",
                  order: { lg: 2 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>DAC</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography>19:45, </Typography>
                    <Typography>Dhaka</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>18h : 35min</Typography>
                  <img width={""} src={iconLine} alt="" />
                  <Typography>1 stops via BOM </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>DXB</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography>19:45,</Typography>
                    <Typography>Dubai</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* end flight route info */}

            {/* start Gross Fare desktop view */}
            <Box sx={{ display: { xs: "none", lg: "contents" } }}>
              <Box sx={{ order: { lg: 4 } }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <ErrorIcon
                    sx={{ color: "#5F6368", height: "12px", width: "12px" }}
                  />
                  <Typography
                    fontSize={"15px"}
                    fontWeight={700}
                    color="#5F6368"
                  >
                    Gross Fare
                  </Typography>
                </Box>
                <Typography
                  fontSize={"18.72px"}
                  fontWeight={700}
                  color="#E34825"
                >
                  ৳ 45,500
                </Typography>
              </Box>
              {/* end Gross Fare desktop view */}
              {/* start BOOK NOW Button  */}
              <Button
                sx={{
                  order: { lg: 5 },
                  backgroundColor: "#333333",
                  color: "#fff",
                }}
                variant="contained"
              >
                BOOK NOW
              </Button>
              {/* end BOOK NOW Button  */}
            </Box>
          </Box>
          <Box sx={{ display: { lg: "none" }, pt: "20.88px" }}>
            <Divider sx={{ border: "1px dashed #E1E1E1" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                pt: "8px",
              }}
            >
              <Typography></Typography>
              <Typography fontSize={"18.72px"} fontWeight={700}>
                ৳ 45,500
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FlightInfoCard;
