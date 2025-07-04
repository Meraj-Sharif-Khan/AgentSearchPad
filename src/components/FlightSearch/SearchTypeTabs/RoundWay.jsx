import { Box } from "@mui/material";
import AirportSelector from "../AirportSelector/AirportSelector";
import DatePicker from "../DatePicker/DatePicker";

const RoundWay = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: "5.19px",
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "418.61px" },
            display: "flex",
            flexDirection: "column",
            gap: "3.9px",
            position: "relative",
          }}
        >
          <AirportSelector type="origin" />
          <AirportSelector type="destination" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5.19px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "159.18px", md: "161px" },
              height: "114.16px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <DatePicker />
          </Box>
          <Box
            sx={{
              width: { xs: "159.18px", md: "161px" },
              height: "114.16px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <DatePicker type="return" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RoundWay;
