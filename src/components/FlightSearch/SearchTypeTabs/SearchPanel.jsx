import { Box } from "@mui/material";
import AirportSelector from "../AirportSelector/AirportSelector";
import ClassSelector from "../ClassSelector/ClassSelector";
import PassengerSelector from "../PassengerSelector/PassengerSelector";
import SearchButton from "../../common/Button/SearchButton";
import AddCity from "../../common/Button/AddCity";
import RemoveCity from "../../common/Button/RemoveCity";
import JourneyDatePicker from "../DatePicker/JourneyDatePicker";
import ReturnDatePicker from "../DatePicker/ReturnDatePicker";

const SearchPanel = ({ tab, index, cityCount, setCityCount }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: "5.19px",
          mb: "18.7px",
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
            width: { sm: "100%", md: "auto" },
            display: "flex",
            gap: "5.19px",
            alignItems: "center",
            justifyContent: "space-around",
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
            <JourneyDatePicker />
          </Box>
          {tab !== 2 && (
            <Box
              sx={{
                width: { xs: "159.18px", md: "161px" },
                height: "114.16px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
            >
              <ReturnDatePicker />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "280.45px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "5.19px",
            },
          }}
        >
          <ClassSelector />
          <PassengerSelector />
        </Box>

        {tab !== 2 && (
          <Box
            width={{ sm: "100%", md: "100px" }}
            height={{ xs: "88.22px", md: "114.16px" }}
          >
            <SearchButton />
          </Box>
        )}
        {tab === 2 && cityCount === index + 1 && (
          <>
            <Box
              width={{ sm: "100%", md: "100px" }}
              height={{ xs: "88.22px", md: "114.16px" }}
            >
              <AddCity cityCount={cityCount} setCityCount={setCityCount} />
            </Box>
            <Box
              width={{ sm: "100%", md: "100px" }}
              height={{ xs: "88.22px", md: "114.16px" }}
            >
              <RemoveCity cityCount={cityCount} setCityCount={setCityCount} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default SearchPanel;
